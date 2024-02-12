"use client";
import cover from '../../public/assets/images/slider/slider1.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Comments from '../comments/Comments'
import { IoShareSocialSharp } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BiSolidCommentEdit } from 'react-icons/bi'
import { RiSpeakFill } from 'react-icons/ri'
import { useState, useEffect, useRef } from 'react';
import { getUser } from "@/queries/user/user_queries"
import moment from 'moment';
import Link from 'next/link';
import { addComment } from "@/queries/comment/comment_queries";
import { useSelector } from 'react-redux';

export default function SingleBlog({ blogDetail }) {
  const text = blogDetail?.description;
  const loggedInUser = useSelector(state => state?.user?.user);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const voices = speechSynthesis.getVoices();
  const [comment, setComment] = useState('');

  useEffect(() => {
    const voices = speechSynthesis.getVoices();
    setSelectedVoice(voices[selectedVoice]);
    console.log("selectedVoice", selectedVoice)
  }, [selectedVoice]);

  const handleSpeak = () => {
    if (!isSpeaking) {
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      utteranceRef.current.voice = selectedVoice; // Set the selected voice for the utterance
      speechSynthesis.speak(utteranceRef.current);
      setIsSpeaking(true);
      speechSynthesis.onend = () => setIsSpeaking(false);
      speechSynthesis.onpause = () => setIsSpeaking(false);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await getUser({
          userId: blogDetail.userId
        });
        setUser(res.user);
      } catch (error) {
        console.error("Error in fetchBlogs:", error);
        setError("Failed to fetch blogs. Please try again later.");
      }
    };
    fetchUserDetail();
  }, [blogDetail?.userId])

  const handleAddComment = async () => {
    if (!comment) return;
    // check if user is logged in
    if (!loggedInUser) {
      alert("Please login to comment");
      return;
    }
    try {
      const res = await addComment({
        blogId: blogDetail?.id,
        comment: comment,
        userId: loggedInUser?.id,
      });
      console.log("res", res);
    } catch (error) {
      console.error("Error in handleAddComment:", error);
    }
  }

  return (
    <div className='w-full px-1 mb-8'>
      <div className='flex items-center justify-between'>
        <h3 className='py-1 text-gray-700 mb-3'>Home{" "}/ Blog{" "} / Article Title</h3>
        <IoShareSocialSharp size={24} className='cursor-pointer' />
      </div>
      <img src={blogDetail?.blogImage ? blogDetail?.blogImage : cover} alt="noImg" className='w-full rounded-md max-h-[390px]' />
      <div className="flex justify-between items-center">
        <div className="flex py-4 pb-1">
          <Image src={article1} height={44} width={44} className="rounded-full" alt="no" />
          <div className="height={44} w-full mx-1 p-1 flex flex-col">
            <span className="p-0 m-0 leading-[18px] font-bold text-lg italic flex items-center">
              {user?.username ? user?.username : "unknown"} <sup><IoCheckmarkCircle color="cadetblue" className="mr-1" size={14} /></sup>
            </span>
            <span className="p-0 m-0 leading-[18px] text-[14px] text-gray-400 italic flex items-center my-[1px]">
              <span className='font-mono'>20&nbsp;</span> min read
              <span className='font-extrabold text-[2rem]'>&nbsp;·&nbsp;</span>
              {moment(blogDetail?.createdAt)?.format('MMM-DD YYYY')}
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <AiTwotoneDelete color='crimson' size={24} className='cursor-pointer' />
          <Link href={`/blog/create?id=${blogDetail?.id}`}>
            <BiSolidCommentEdit color='green' size={24} className='cursor-pointer' />
          </Link>
        </div>
      </div>
      <p className="text-[#132431] text-[1.6rem] mt-5 mb-3 leading-[20px] font-candara font-bold">{blogDetail?.title}</p>
      <button onClick={handleSpeak} className='bg-gray-500 text-gray-200 px-4 py-2 rounded-md text-sm shadow-lg flex items-center'>
        <RiSpeakFill className='mr-1' size={20} /> {isSpeaking ? 'Pause' : 'Listen'}
      </button>
      <p className="font-candara text-gray-600 py-4 pb-6 pt-12text-start leading-[1.31rem] text-[1rem]">
        <div dangerouslySetInnerHTML={{ __html: blogDetail?.description }} />
      </p>
      <div className='w-full relative mb-8'>
        <textarea rows={4} placeholder='Leave your comment here' className="font-mono w-full max-w-[96%] bg-[#fff] rounded-md p-3 text-gray-700 border border-gray-400 outline-none" onChange={e => setComment(e.target.value)} />
        <button className="cursor-pointer bg-[#1576DB] text-white border px-4 shadow-md py-[1px] rounded-md  border-[#1576DB] font-bold absolute bottom-3 right-10" onClick={handleAddComment}>Send</button>
      </div>
      <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-4 font-bold">All Comments(<span className='font-mono'>10</span>)</p>
      <Comments />
      <Comments />
      <Comments />
    </div>
  )
}
