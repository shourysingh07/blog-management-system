"use client"
import wave from '../../public/assets/images/wave.svg'
import Image from 'next/image'
import Newletter from './Newletter'
import Content from './Content'
import CopyRight from './CopyRight'
import { usePathname } from 'next/navigation';

export default function Footer() {
  const path = usePathname();
  return (
    <div className='flex flex-col w-full mt-10'>
        <Image src={wave} alt="wave" className='w-full' />
        {path==="/" && <Newletter />}
        <Content />
        <CopyRight />
    </div>
  )
}
