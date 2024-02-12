"use client"
import Image from "next/image"
import article1 from '../../public/assets/images/articles/article1.png'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Link from "next/link"
import moment from "moment"
import { useEffect, useState } from "react"
import { getUser } from "@/queries/user/user_queries"

export default function BlogCardSm({ blog }) {
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

    return (
        <div className="flex flex-col rounded-md shadow-sh1">
            <div className="w-full h-[180px] relative rounded-t-md">
                <Image src={blog?.blogImage} fill={true} alt="mo" className="rounded-t-md" />
            </div>
            <div className="flex px-3 py-3 flex-col">
                <Link href={`/blog/${blog.id}`} className="font-candara cursor-pointer text-[#183B56] text-[1.4rem] leading-[1.35rem] text-start font-bold">{blog?.title?.slice(0, 25)}</Link>
                <p className="font-candara text-gray-600 py-[4px] text-start leading-[1.31rem]">
                    <div dangerouslySetInnerHTML={{ __html: blog?.description?.slice(0, 111) }} />
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex py-4 pb-1 h-[60px] items-center">
                        <Image src={article1} height={44} width={44} className="rounded-full md:h-[44px] md:w-[44px] xs:h-[35px] xs:w-[35px]" alt="no" />
                        <div className="height={44} w-full mx-1 p-1 flex flex-col gap-0">
                            <span className="p-0 m-0 leading-[18px] font-bold italic">{user?.username ? user?.username : "unknown"}</span>
                            <span className="p-0 m-0 leading-[15px] text-xs text-gray-400 italic flex items-center my-[1px]"><IoCheckmarkCircle color="cadetblue" className="mr-1" />verified writer</span>
                        </div>
                    </div>
                    <span className="font-mono capitalize italic text-sm font-bold text-gray-600">{moment(blog.createdAt).format('MMM YY')}</span>
                </div>
            </div>
        </div>
    )
}
