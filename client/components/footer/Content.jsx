import React from 'react'
import dots from '../../public/assets/images/dots.svg'
import Image from 'next/image'

const Container=({txt})=>{
  return(
  <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">{txt}</p>
  )
}

export default function Content() {
  return (
    <div className='w-full h-300 bg-[#0D2436] flex justify-center items-center pb-5'>
      <div className="w-full max-w-[1040px] p-3 flex gap-3 justify-center items-start flex-wrap">
        <div className='flex-1  flex px-2 justify-center flex-col gap-[1px] p-1'>
          <p className="font-bold text-[1.6rem] text-white">BlogX</p>
          <p className='text-sm text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer '>Build a modern and creative website with moonfo</p>
        </div>
        <div className='flex-1 flex flex-col gap-[1px] p-1'>
          <p className="font-bold text-[1.2rem] text-[#5A7184] cursor-pointer ">Product</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Landingpage</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Features</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Documentation</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Pricing</p>
        </div>
        <div className='flex-1  flex flex-col gap-[1px] p-1'>
          <p className="font-bold text-[1.2rem] text-[#5A7184] cursor-pointer ">Services</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Documentation</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Design</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Theme</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">UI Kit</p>
        </div>
        <div className='flex-1  flex flex-col gap-[1px] p-1'>
          <p className="font-bold text-[1.2rem] text-[#5A7184] cursor-pointer ">Company</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">About</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Terms</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Privacy Policy</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Careers</p>
        </div>
        <div className='flex-1 flex flex-col gap-[1px] p-1'>
          <p className="font-bold text-[1.2rem] text-[#5A7184] cursor-pointer ">More</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Documentation</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Offers</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">License</p>
          <p className="text-[.9rem] text-[#5A7184] hover:text-[#a9b4bd] cursor-pointer ">Changelog</p>
        </div>
      </div>
    </div>
  )
}
