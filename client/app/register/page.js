"use client"
import Image from "next/image"
import { useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { registerUser } from "@/queries/auth/auth_queries"
import { publicRequest } from "@/requestMethods"
import { useRouter } from 'next/navigation'

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [bio, setBio] = useState('');
    const router = useRouter()
    
    // handle with status code??
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await publicRequest.post(`/auth/register`, {
                username: name,
                email,
                password,
                bio,
            });
            console.log("resss", res);
            if(res.status==200){
                router.push('/login')
            }
            alert(res.data.msg);
        } catch (error) {
            alert("user regsitertion failed!");
            console.error("Error registering user:", error);
            return { error: "Failed to register user. Please try again later." };
        }
        setLoading(false);
    };

    return (
        <div className="w-full m-0 p-0 flex justify-center items-center bg-[#ffffff]">
            <div className="w-full max-w-[1060px] m-0 p-3 flex justify-center gap-8 items-center" >
                <form className="flex-1 flex items-center flex-col gap-3 rounded-md bg-white lg:max-w-[600px] py-2" onSubmit={handleSubmit}>
                    <div className="flex w-[80%] p-2 pl-0 flex-col">
                        <h1 className="text-3xl text-start p-0 m-0 font-extrabold">Sign Up</h1>
                        <span className="text-md p-0 m-0 text-gray-500">
                            Get started with{" "}
                            <span className="font-bold text-[1rem] text-[#1576DB]">BlogX</span>
                        </span>
                    </div>
                    <div className="flex flex-col w-[80%]">
                        <label className="text-md font-candara mb-[1px]">Your Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="border border-gray-400 rounded-md p-2 outline-none focus:border-blue-500 font-candara"
                            type="text"
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex flex-col w-[80%]">
                        <label className="text-md font-candara mb-[1px]">About you</label>
                        <textarea
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            className="border border-gray-400 rounded-md p-2 outline-none focus:border-blue-500 font-candara"
                            type="text"
                            required
                            placeholder="Add about yourself"
                        />
                    </div>
                    <div className="flex flex-col w-[80%]">
                        <label className="text-md font-candara mb-[1px]">Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="border border-gray-400 rounded-md p-2 outline-none focus:border-blue-500 font-candara"
                            type="email"
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="flex flex-col w-[80%]">
                        <label className="text-md font-candara mb-[1px]">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="border border-gray-400 rounded-md p-2 outline-none focus:border-blue-500 font-candara"
                            type="password"
                            required
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex w-[80%] gap-2 my-2 justify-between items-center">
                        <Link href="/login" className="flex flex-col">
                            <button className="bg-[#e6e0e0] text-gray-700 rounded-full sm:px-6 px-3 py-2 font-candara">Have account?</button>
                        </Link>
                        <div className="flex flex-col">
                            <button className="bg-blue-500 text-white rounded-md sm:px-6 px-3 sm:py-2 py-2 font-candara">Sign Up</button>
                        </div>
                    </div>
                    <div className="w-[80%] flex items-center whitespace-nowrap">
                        <span className="w-full h-[1px] text-gray-200 bg-gray-400"></span>
                        <span className="text-md font-candara text-gray-600 px-2 whitespace-nowrap">Or Continue with</span>
                        <span className="w-full h-[1px] text-gray-200 bg-gray-400"></span>
                    </div>
                    <div className="w-[80%] flex items-center whitespace-nowrap gap-4 justify-center">
                        <button className="border p-1 font-bold text-red-500 border-rose-500 flex items-center gap-2 px-4 rounded-md"><FcGoogle /> Google </button>
                        <button className="border p-1 font-bold text-gray-800 border-gray-800 flex items-center gap-2 px-4 rounded-md"><BsGithub /> Github </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
