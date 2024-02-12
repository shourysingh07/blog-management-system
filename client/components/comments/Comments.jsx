import Image from "next/image"
import article1 from '../../public/assets/images/articles/article1.png'
import { IoCheckmarkCircle } from 'react-icons/io5'


export default function Comments() {
    return (
        <div className='w-full border border-gray-200 p-2 bg-[#F2F4F5] rounded-md my-3'>
            <div className="flex py-1 pb-1">
                <Image src={article1} height={40} width={44} className="rounded-full h-[40px] w-[40px]" alt="no" />
                <div className="height={44} w-full mx-1 p-1 flex flex-col">
                    <span className="p-0 m-0 leading-[18px] font-bold text-lg italic">Jennifer Winget</span>
                    <span className="p-0 m-0 leading-[18px] text-[.7rem] pt-[1px] text-gray-400 italic flex items-center my-[1px] font-mono">
                        15 December 2020, 11:40 AM
                    </span>
                </div>
            </div>
            <div className="ml-[44px] text-[.86rem] text-[#77808B] pr-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae</div>
        </div>
    )
}
