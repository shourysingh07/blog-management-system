import newsletter from '../../public/assets/images/newsletter.jpg'
import Image from 'next/image'

export default function Newletter() {
  return (
    <div className='bg-[#0D2436] flex pb-2'>
        <div className='flex flex-col items-center justify-center w-full h-44'>
            <h1 className='md:text-4xl xs:text-2xl font-bold text-gray-200 text-center w-[93%]'>Subscribe to our newsletter</h1>
            <p className='text-gray-400 italic text-center w-[90%]'>Get our stories delivered from us to your inbox weekly.</p>
            <div className='flex flex-row items-center justify-center md:w-1/2 sm:w-[70%] xs:w-[87%] mt-4 rounded-full gap-1'>
                <input className='w-full h-full p-2 text-gray-700 rounded-md focus:outline-none rounded-r-none font-candara italic' type="text" placeholder='Enter your email address' />
                <button className="cursor-pointer bg-[#1576DB] text-white border p-[11px] rounded-md rounded-l-none border-[#1576DB] font-bold">Subscribe</button>
            </div>
        </div>
    </div>
  )
}
