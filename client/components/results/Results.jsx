"use client"
import React from 'react'
import Image from 'next/image'
import gpt from '../../public/assets/images/gpt.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import { FaShare } from 'react-icons/fa'
import { IoMdShare } from 'react-icons/io'
import { useEffect, useState } from "react"
import { getUser } from "@/queries/user/user_queries"
import moment from "moment";
import Link from 'next/link'

export default function Results({ blog }) {
    console.log(blog);
    const [user,setUser]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchUserDetail=async()=>{
            try {
                const res = await getUser({
                    userId:blog.userId
                });
                setUser(res.user);
            } catch (error) {
                console.error("Error in fetchBlogs:", error);
                setError("Failed to fetch blogs. Please try again later.");
            }
        };
        fetchUserDetail();
    },[blog?.userId])

    const catg=blog?.categories?.split(', ');

    return (
        <div className='w-full border border-white border-b-gray-200 p-1 grid grid-cols-10 gap-5 items-center justify-center mb-1 ml-1'>
            <div className='md:col-span-8 xs:col-span-7 flex flex-col w-full'>
                <div className="flex items-center p-[2px] mb-2">
                    <Image src={article1} height={31} width={31} className="rounded-full h-[31px] w-[31px] relative" alt="no" />
                    <div className='flex md:items-center justify-start md:flex-row xs:flex-col'>
                        <Link href={`/profile/${user?.id}`} className='m-0 p-0 ml-2 font-candara text-gray-600 text-lg italic'>{user?.username ? user?.username : "unknown"}<b className='font-extrabold text-[1.2rem]'>&nbsp;·</b>{" "}</Link>
                        <span className='m-0 p-0 ml-2 font-candara leading-[10px] text-gray-500 italic text-xs'>{moment(blog.createdAt).format('MMM  YY')}</span>
                    </div>
                </div>
                <Link href={`/blog/${blog?.id}`} className='font-candara md:text-2xl text-lg font-bold text-gray-800 leading-[22px] pl-2 pt-1'>{blog?.title?.slice(0, 30)}</Link>
                <p className='font-candara text-base text-gray-700 md:leading-[23px] xs:leading-[18px] pl-2 pt-1 md:text-[1rem] xs:text-[.9rem]'>
                  <div dangerouslySetInnerHTML={{ __html: blog?.description?.slice(0, 120) }} />
                </p>
                <div className="flex items-center gap-2 mt-1 justify-between">
                    <div className="flex flex-wrap gap-2 md:my-2 mx-2 md:mt-2">
                        {catg.map((c,index)=>(<span className="px-1 py-[2px] cursor-pointer text-xs border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">{c}</span>))}
                        <span className="px-1 py-[2px] cursor-pointer text-xs border text-gray-800 border-[#b0b8c4] bg-[#b0b8c4] rounded-full">
                            <span className='font-mono'>{Math.floor(Math.random() * 9) + 1}</span> min read
                        </span>
                    </div>
                    <IoMdShare className='text-2xl text-black cursor-pointer' />
                </div>
            </div>
            <Link href={`/blog/${blog?.id}`} className='md:col-span-2 xs:col-span-3 relative w-full lg:h-[130px] md:h-[105px] xs:h-[100px] max-w-[140px]'>
                <Image src={blog.blogImage} alt="gpt" fill={true} />
            </Link>
        </div>
    )
}
