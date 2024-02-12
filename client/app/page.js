import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Featured from '@/components/featured/Featured'

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
    </>
  )
}
