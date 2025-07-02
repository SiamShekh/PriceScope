"use client";

import LoginPage from '@/components/swapper/LoginPage';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '@/components/utils/FirebaseConfig';
import registration from '@/server-actions/registrations';
import { useRouter } from 'next/navigation';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { toast } from 'sonner';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const route = useRouter();

    const LoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                toast.loading("Loading...");
                const user = result.user;
                const auth = await registration({ name: user?.displayName, email: user?.email, photo: user?.photoURL });
                if (auth) {
                    toast.dismiss();
                    toast.success("Successfully Logged");
                    route.push("/dashboard");
                } else {
                    toast.dismiss();
                    toast.error("Connection error, try again.")
                }
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    }

    return (
        <div className='min-h-screen flex-col-reverse md:flex-row p-3 flex justify-between gap-5'>
            <div className="flex-1 my-auto">
                <p className='text-6xl text-black dark:text-white mt-10 text-center font-bold'>Welcome</p>
                <p className='text-sm text-center font-medium opacity-60 max-w-lg mx-auto'>You can reduce your daily shopping budget with cost-cutting tools. We've seen that this tool is useful for other users, and we believe it can help you too.</p>

                <div className="grid max-w-md mx-auto mt-5 grid-cols-2 gap-3 items-center">
                    <div className='flex items-center gap-1 text-black/60 dark:text-white/60'>
                        <FaCircleCheck className='text-sm' />
                        <p className='text-sm font-medium line-clamp-1'>Real-time price tracking</p>
                    </div>
                    <div className='flex items-center gap-1 text-black/60 dark:text-white/60'>
                        <FaCircleCheck className='text-sm' />
                        <p className='text-sm font-medium line-clamp-1'>Search from over 10 sites</p>
                    </div>
                    <div className='flex items-center gap-1 text-black/60 dark:text-white/60'>
                        <FaCircleCheck className='text-sm' />
                        <p className='text-sm font-medium line-clamp-1'>Sort by lowest price</p>
                    </div>
                    <div className='flex items-center gap-1 text-black/60 dark:text-white/60'>
                        <FaCircleCheck className='text-sm' />
                        <p className='text-sm font-medium line-clamp-1'>Buy from trusted stores</p>
                    </div>
                </div>
                <div className="max-w-md mx-auto mt-10 grid grid-cols-4 items-center justify-center gap-3">
                    <Image width={100} height={100} src={"https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo-2018.png"} alt='Daraz' />
                    <Image width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/c/cf/Pickaboo.png"} alt='Daraz' />
                    <Image width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rokomari.svg/1200px-Rokomari.svg.png"} alt='Daraz' />
                    <Image width={100} height={100} src={"https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png"} alt='Daraz' />
                </div>

                <div className="flex items-center justify-center mt-10">
                    <div onClick={LoginWithGoogle} className='flex items-center justify-center gap-3 bg-black/10 dark:bg-white/10 backdrop-blur-3xl border-2 border-black/10 dark:border-white/10 cursor-pointer w-full max-w-md p-3 rounded-full'><FaGoogle className='text-xl' />Login with google</div>
                </div>
            </div>
            <div className="flex-1 my-auto">
                <LoginPage />
            </div>
        </div>
    );
};

export default Login;