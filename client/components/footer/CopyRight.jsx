import heart from '../../public/assets/images/Heart.png'
import Image from 'next/image'

export default function CopyRight() {
  return (
    <div className='flex w-full p-4 items-center justify-center bg-[#0D2436] flex-col gap-2 pb-10'>
        <Image src={heart} width={30} height={30} className='mr-2' />
        <p className='text-[#5A7184] text-sm font-candara italic text-center w-[90%]'>Copyright © <span className='font-mono'>2023</span>. Moonfo with love by Shoury.</p>
    </div>
  )
}
