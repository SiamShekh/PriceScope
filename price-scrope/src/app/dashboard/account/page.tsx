"use client";

import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { MdEngineering, MdOutlineFavorite, MdOutlineSupportAgent, MdTipsAndUpdates } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosSettings } from "react-icons/io";
import { FaFaceRollingEyes } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import auth from "@/components/utils/FirebaseConfig";

const Account = () => {

    const pages = [
        {
            name: "Home",
            href: "/dashboard",
            icon: <GoHomeFill />
        },
        {
            name: "Most Demand",
            href: "/dashboard/demand",
            icon: <FaRegEye />
        },
        {
            name: "Favorite",
            href: "/dashboard/favorite",
            icon: <MdOutlineFavorite />
        },
        // {
        //     name: "Update",
        //     href: "/update",
        //     icon: <MdTipsAndUpdates />
        // },
        // {
        //     name: "Setting",
        //     href: "/setting",
        //     icon: <IoIosSettings />
        // },
        // {
        //     name: "Product Watch",
        //     href: "/watch",
        //     icon: <FaFaceRollingEyes />
        // },
        {
            name: "Support",
            href: "https://t.me/Siam_shekh_n",
            icon: <MdOutlineSupportAgent />
        },
        {
            name: "Developer",
            href: "https://siam-sheikh.xyz/",
            icon: <MdEngineering />
        },
    ]

    const pathname = usePathname();

    const [user, setUser] = useState<undefined | User>(undefined);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [user]);

    return (
        <div className="min-h-screen relative">
            <div className="flex gap-3 items-center">
                <img
                    src={user?.photoURL as string}
                    className="size-10 bg-black/60 dark:bg-white/60 rounded-full" />
                <div>
                    <p className="text-xl font-semibold text-black dark:text-white">{user?.displayName}</p>
                    <p className="text-xs text-black/70 dark:text-white/70">{user?.email}</p>
                </div>
            </div>

            <div className="mt-5">
                {
                    pages?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "dark:bg-blue-500/10"} py-3 rounded-xl flex items-center gap-3`}>
                                <span className="text-2xl text-black dark:text-white">{page?.icon}</span>
                                <p className="text-[16px] font-light font-sans">{page?.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Account;