"use client"
import {BiChevronDown} from "react-icons/bi"
import { useRouter } from "next/navigation";
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx"
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function Navbar(){
    const router=useRouter();
    const user=useSelector(state=>state?.user?.user);
    const uname=user?.username?.split(' ');
    const firstName=uname && uname[0];

    return(
        <div className="w-full m-0 p-0 flex justify-center items-center">
            <div className="w-full max-w-[1100px] m-0 p-3 flex justify-between items-center px-6">
                <Link href="/" className="font-bold text-[1.6rem] text-[#1576DB] cursor-pointer">BlogX</Link>
                <div className="xs:hidden md:flex justify-between items-center gap-7">
                    <Link href="/" className="cursor-pointer text-[#183B56] hover:text-[#1576DB]">Home</Link>
                    <Link href="/blogs/all" className="cursor-pointer text-[#183B56] hover:text-[#1576DB]">Article</Link>
                    {user && <Link href="/blog/create" className="cursor-pointer text-[#183B56] hover:text-[#1576DB]">New</Link>}
                    {!user ? <Link href="/login" className="cursor-pointer text-[#1576DB] hover:bg-[#1576DB] hover:text-white border px-5 py-1 rounded-full  border-[#1576DB] font-bold">Sign In</Link>
                    : <Link href={`/profile/${user?.id}`} className="cursor-pointer text-[#1576DB] hover:text-rose-500 border-[#1576DB] font-bold flex flex-row items-center justify-center capitalize">
                        <RxAvatar />&nbsp;{firstName}
                    </Link>}
                </div>
                <div className="flex justify-between items-center md:hidden xs:block">
                    <RxHamburgerMenu className="text-[#1f1f22] text-[1.6rem] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
