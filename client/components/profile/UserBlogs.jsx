import React from 'react'
import Image from 'next/image'
import gpt from '../../public/assets/images/gpt.jpg'
import article1 from '../../public/assets/images/articles/article1.png'
import { FaShare } from 'react-icons/fa'
import { IoMdShare } from 'react-icons/io'

export default function UserBlogs() {
  return (
    <div className='w-full p-1 grid grid-cols-7 gap-5 items-center justify-center pb-6 mb-0 '>
      <div className='col-span-6 flex flex-col'>
        <div className="flex h-fit items-center p-[2px] mb-2">
          <Image src={article1} height={34} width={34} className="rounded-full h-[34px] w-[34px] relative" alt="no" />
          <div className="flex flex-col ml-2">
            <span className='m-0 p-0 font-candara text-gray-600 text-lg italic leading-[18px]'>Fernanado Doglio</span>
            <span className='m-0 p-0 font-candara text-xs text-gray-400 italic leading-[18px]'>Feb <span className='font-mono'>17</span></span>
          </div>
        </div>
        <h1 className='font-candara text-2xl font-bold text-gray-800 leading-[22px] pl-2 pt-1 mr-8'>I asked Chat GPT to build a To-Do app — Have we finally met our replacement?</h1>
        <div className="flex flex-wrap gap-2 mx-2 mt-4 mb-0">
          <span className="px-3 py-[2px] cursor-pointer text-blue-500 bg-blue-100 rounded-[3px]">Chat gpt</span>
          <span className="px-3 py-[2px] cursor-pointer text-blue-500 bg-blue-100 rounded-[3px]">Ai</span>
          <span className="px-3 py-[2px] cursor-pointer text-blue-500 bg-blue-100 rounded-[3px]"><span className='font-mono'>5</span> min read</span>
        </div>
      </div>
      <div className='bg-rose-300 col-span-1 relative w-full h-[100px] border'>
        <Image src={gpt} alt="gpt" fill={true} />
      </div>
    </div>
  )
}