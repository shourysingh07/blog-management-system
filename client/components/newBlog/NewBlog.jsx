"use client";
import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VscAdd, VscClose } from 'react-icons/vsc'
import { IoIosCloudUpload } from 'react-icons/io'
import Image from 'next/image';
import uploadFileAndGetDownloadURL from '@/utils/upload';
import { addNewBlog, getBlogDetails, updateBlog } from '@/queries/blog/blog_queries';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

const categoriesList = [
  'Coding',
  'Sports',
  'Education',
  'Others',
  'Club',
  'Music',
  'Cricket',
  'Movies',
];

export default function NewBlog() {
  const [val, setVal] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [headline, setHeadline] = useState('');
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.user.user);
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams?.get('id');

  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(selectedOption)) {
        return prevSelectedCategories.filter((category) => category !== selectedOption);
      } else {
        return [...prevSelectedCategories, selectedOption];
      }
    });
  };

  // Fetch existing blog details if in editing mode
  const [previewUrl, setPreviewUrl] = useState();
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogDetails = await getBlogDetails({ blogId }); // Adjust this function based on your implementation
        console.log("blogDetails", blogDetails)
        setTitle(blogDetails.blog.title);
        setVal(blogDetails.blog.description);
        setHeadline(blogDetails.blog.headline);
        setSelectedCategories(blogDetails.blog.categories.split(','));
        setPreviewUrl(blogDetails.blog.blogImage || "");
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    if (blogId) {
      fetchBlogDetails();
    }
  }, [blogId]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link'],  // <-- Add a comma here
      ['clean'],
      ['code-block']
    ],
    clipboard: {
      matchVisual: false,
    },
  };


  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'link', 'image', 'video', 'clean',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !val || !file || !headline) {
      alert("Please fill all the fields");
      return;
    }
    const downloadURL = await uploadFileAndGetDownloadURL(file);
    try {
      if (blogId) {
        const res = await updateBlog({
          blogId,
          title,
          description: val,
          blogImage: downloadURL,
          headline,
          categories: selectedCategories?.join(', '),
          userId: user?.id,
        });
        console.log("updated", res);
      } else {
        const res = await addNewBlog({
          title,
          description: val,
          blogImage: downloadURL,
          headline,
          categories: selectedCategories?.join(', '),
          userId: user?.id,
        });
        console.log("new", res);
      }
      router.push('/');
    } catch (error) {
      console.error("Error adding new blog:", error);
    }
  }

  return (
    <div className='flex flex-col'>
      <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-3 font-bold w-full pb-3">{!blogId ? "Create a " : "Update the "} Blog</p>
      <form className='flex gap-2 w-full h-full flex-col items-center' onSubmit={handleSubmit}>

        <div className='w-full h-[50px] mx-2 relative'>
          {/*<p className='text-xs text-gray-400 absolute bottom-4 right-2'>300/300</p>*/}
          <input type='text' value={title} placeholder='Title(180 characters)' onChange={e => setTitle(e.target.value)} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500' />
        </div>

        <div
          // onDrop={handleImageDrop}
          // onDragOver={(e) => e.preventDefault()}
          className='w-full h-[220px] mx-2 border rounded-sm border-gray-400 flex items-center justify-center flex-col gap-1 border-dotted relative my-0'>
          <input type='file' id='file' name='file' placeholder='Title' onChange={handleFileChange} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500 hidden' />
          <IoIosCloudUpload className='text-[#3ddbe4]' size={60} />
          <p className='text-md text-gray-400'>Drag and drop your image here</p>
          <label htmlFor='file' className='text-md border cursor-pointer outline-none p-[4px] px-[7px] rounded-md bg-[#1576DB] text-white border-gray-300 text-md focus:border-gray-500 w-fit'>
            Browse files
            {previewUrl && <Image src={previewUrl} alt='blog image' fill={true} className='rounded-md border box-border' />}
          </label>
        </div>

        <div className='w-full mx-2'>
          <ReactQuill
            value={val}
            onChange={setVal}
            modules={modules}
            formats={formats}
            theme="snow"
            placeholder='Write your blog here...'
            className='h-min-[200px] focus:border-gray-500 text-[1.4rem]'
          />
        </div>

        <div className='w-full h-[50px] my-1'>
          <textarea rows={2} type='text' value={headline} placeholder='Headline(360 characters)' onChange={e => setHeadline(e.target.value)} className='border w-full outline-none p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500' />
        </div>

        <div className='border w-full outline-none mt-3 p-[7px] rounded-sm border-gray-300 text-gray-700 text-md focus:border-gray-500'>
          <p className='text-md text-gray-400 px-2'>Add Tags<span className='font-mono'>({selectedCategories.length}/{categoriesList.length})</span></p>
          <div className='flex gap-2 mx-2 mb-1 py-2 flex-wrap'>
            {categoriesList.map((category) => (
              <div
                key={category}
                className={`border px-3 py-1 rounded-full flex items-center gap-1 font-bold ${selectedCategories.includes(category)
                  ? 'bg-[#1576DB] text-white'
                  : 'bg-gray-600 text-white'
                  } cursor-pointer`}
                onClick={() => handleCategoryChange({ target: { value: category } })}
              >
                {selectedCategories.includes(category) ? (
                  <span className='flex items-center justify-center gap-1'>
                    <VscClose />
                    {category}
                  </span>
                ) : (
                  <span className='flex items-center justify-center gap-1'>
                    <VscAdd />
                    {category}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='w-full mx-2 relative flex justify-end h-[33px] my-2'>
          <button className='bg-[#3ddbe4] text-white px-4 py-1 rounded-md shadow-lg' onClick={handleSubmit}>Publish</button>
        </div>
      </form>
    </div>
  )
}
