"use client"
import { useRouter } from "next/router"
import NewBlog from "@/components/newBlog/NewBlog"
import RuleBook from "@/components/rules/RuleBook"

export default function CreateBlog() {
  return (
    <div className="w-full m-0 p-0 flex justify-center items-center bg-[#FDFDFD]">
      <div className="w-full max-w-[1060px] m-0 p-3 grid md:grid-cols-10 justify-between gap-8 sm:px-6 xs:px-3">
        <div className='bg-white lg:col-span-7 md:col-span-6'>
          <NewBlog />
        </div>
        <div className='lg:col-span-3 md:col-span-4 xs:hidden md:flex flex-col shadow-lg p-4 border gap-[7px] rounded-md h-fit bg-[#0D2436]'>
          <p className="text-gray-200 text-[1.4rem] leading-[15px] font-candara pb-2 font-bold border border-[#0D2436] border-b-gray-500">Rule Book</p>
          <RuleBook />
        </div>
      </div>
    </div>
  )
}