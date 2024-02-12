"use client"
import About from "@/components/profile/About"
import UserBlogs from "@/components/profile/UserBlogs"
import { useState, useEffect } from 'react'
import { getUser } from '@/queries/user/user_queries'
import { usePathname } from 'next/navigation';

export default function Profile() {
  const router = usePathname();
  const [user, setUser] = useState(null);
  const c1 = router?.split('/');
  const userId = c1[2];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser({ userId: userId });
        setUser(res.user);
      } catch (error) {
        console.error("Error in fetchUser:", error);
        setError("Failed to fetch user. Please try again later.");
      }
    };
    fetchUser();
  }, [userId]);

  console.log("userxxxx", user)
  if (!user) return null;

  return (
    <div className="w-full m-0 p-0 flex justify-center items-center bg-[#ffffff]">
      <div className="w-full max-w-[800px] m-0 p-0 flex flex-col justify-between gap-8 rounded-t-lg">
        <About user={user} />
        <div className='flex w-full flex-col shadow-md px-8 py-2 gap-2 border pb-12'>
          <p className="text-[#0D2436] text-[1.6rem] leading-[15px] font-candara mb-4 mt-5 font-bold">{user?.username}'s Top Articles</p>
          <UserBlogs />
        </div>
      </div>
    </div>
  )
}