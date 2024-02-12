"use client"
import Image from "next/image"
import bannerImg from '../../public/assets/images/banner.svg'
import {BiSearch} from 'react-icons/bi'

export default function Banner(){
    console.log(bannerImg)
    return(
        <div className="w-full m-0 p-0 flex justify-center items-center">
            <div className="w-full max-w-[1100px] m-0 flex justify-between max-h-[400px] gap-2 bg-[#F9FCFF] md:pb-0 xs:pb-4">
                <div className="content flex-1 flex md:pt-12 xs:pt-4 flex-col lg:pl-16 md:pl-6 lg:pr-20 md:pr-5 gap-4 flex-wrap items-center">
                    <h1 className="font-candara text-[#183B56] lg:text-[2.5rem] xs:text-[2rem] lg:leading-[2.75rem] xs:leading-[2rem] text-center font-extrabold sm:text-center lg:w-[100%] xs:w-[94%]">Read the most interesting articles</h1>
                    <p className="font-candara text-[#183B56] lg:text-start xs:text-center lg:w-[100%] xs:w-[85%] leading-[1.3rem] sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="border rounded-md lg:w-[90%] flex items-center justify-center shadow-lg bg-white">
                        <BiSearch className="mx-2" size={25} color="#183B56"/>
                        <input type="text" placeholder="search article" className="text-[#183B56] w-full border outline-none border-none p-[3px] overflow-hidden font-candara italic " />
                        <button className="bg-[#1565D8] text-white font-candara text-[1rem] px-2 py-1 m-1 rounded-[4px]">Search</button>
                    </div>
                    <div className="flex lg:gap-4 lg:p-2 xs:gap-1 xs:p-[1px] flex-wrap mt-1">
                        <span className="font-bold text-[#183B56] italic">Popular tags:</span>
                        <span className="border italic border-gray-200 text-[#407dd8] bg-[#ccd3dd] rounded-md px-1 py-[1px]">coding</span>
                        <span className="border italic border-gray-200 text-[#407dd8] bg-[#ccd3dd] rounded-md px-1 py-[1px]">Reactjs</span>
                        <span className="border italic border-gray-200 text-[#407dd8] bg-[#ccd3dd] rounded-md px-1 py-[1px]">Nextjs</span>
                    </div>
                </div>
                <Image height={370} width={500} src={bannerImg} alt="benner" className="flex-1 xs:hidden md:block md:h-[370px] md:w-[250px] lg:h-[370px] w-[370px]" />
            </div>
        </div>
    )
}
