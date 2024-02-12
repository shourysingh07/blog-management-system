import Image from "next/image"
import article1 from '../../public/assets/images/articles/article1.png'
import moment from "moment";
import Link from "next/link";

export default function LatestBlogs({ blog }) {
  return (
    <Link className='w-full flex items-center justify-center' href={`/blog/${blog?.id}`}>
      <div className='flex gap-3 mx-0 rounded-md cursor-pointer w-full'>
        <Image src={article1} height={60} width={60} alt="no" className="rounded-md" />
        <div className="flex flex-col">
          <p className="text-[#132431] mb-[3px] text-[1rem] leading-[15px] font-candara  font-bold pr-[2px]">{blog?.title?.slice(0, 23)}..</p>
          <p className="text-[#a2a7ad] text-[.8rem] font-candara pt-1">{moment(blog?.createdAt)?.format('MMM DD-YY')}</p>
        </div>
      </div>
    </Link>
  )
}
