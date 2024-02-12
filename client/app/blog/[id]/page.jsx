"use client"
import SingleBlog from "@/components/singleBlog/SingleBlog"
import LatestBlogs from "@/components/latest/LatestBlogs"
import { getBlogDetails } from "@/queries/blog/blog_queries"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';

export default function Blog() {
  const router = usePathname();
  const c1 = router?.split('/');
  const blogId = c1[2];
  const [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const res = await getBlogDetails({ blogId: blogId });
        setBlogDetail(res.blog);
      } catch (error) {
        console.error("Error in fetchBlog:", error);
        setError("Failed to fetch blog. Please try again later.");
      }
    };
    fetchBlogDetail();
  }, [blogId]);

  const catg=blogDetail?.categories?.split(', ');

  console.log("blogDetail",blogDetail)

  return (
    <div className="w-full m-0 p-0 flex justify-center items-center bg-[#FDFDFD]">
      <div className="w-full max-w-[1060px] m-0 p-3 grid md:grid-cols-10 justify-between md:gap-8">
        <div className='bg-white lg:col-span-7 md:col-span-6'>
          <SingleBlog blogDetail={blogDetail} />
        </div>
        <div className='bg-white lg:col-span-3 md:col-span-4 flex flex-col md:shadow-lg md:p-4 xs:p-2 md:border gap-[7px] rounded-md h-fit'>
          <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara mb-3 font-bold">Latest Blogs</p>
          <div className="space-y-1 flex flex-col justify-start items-start w-fit">
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
          </div>
          <p className="text-[#0D2436] text-[1.4rem] leading-[15px] font-candara my-4 font-bold">Tags</p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Medical</span>
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Learn</span>
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Biology</span>
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Food</span>
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Chemist</span>
            <span className="px-2 py-[2px] cursor-pointer border border-[#1565D8] text-white bg-[#1565D8] rounded-md">Pharmcy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
