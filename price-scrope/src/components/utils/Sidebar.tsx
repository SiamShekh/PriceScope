"use client";

import { GoHomeFill } from "react-icons/go";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { MdEngineering, MdOutlineFavorite, MdOutlineSupportAgent, MdTipsAndUpdates } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosSettings } from "react-icons/io";
import { FaFaceRollingEyes } from "react-icons/fa6";
import { onAuthStateChanged, User } from "firebase/auth";
import auth from '@/components/utils/FirebaseConfig';
import { useEffect, useState } from "react";

const Sidebar = () => {
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
        //     href: "/dashboard/update",
        //     icon: <MdTipsAndUpdates />
        // },
    ]

    const pathname = usePathname();

    const utils = [
        // {
        //     name: "Setting",
        //     href: "/dashboard/setting",
        //     icon: <IoIosSettings />
        // },
        // {
        //     name: "Product Watch",
        //     href: "/dashboard/watch",
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
    ];

    const [user, setUser] = useState<undefined | User>(undefined);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [user])


    return (
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Site Identity */}
            {
                user === undefined ?
                    <div className="flex gap-3 items-center">
                        <div
                            className="size-10 bg-black/10 border-black/10 dark:bg-white/10 skeleton border dark:border-white/10 rounded-full" />
                        <div>
                            <p className="w-40 h-6 bg-black/10 dark:bg-white/10 skeleton" />
                            <p className="w-20 h-4 mt-2 bg-black/10 dark:bg-white/10 skeleton" />
                        </div>
                    </div> :
                    <div className="flex gap-3 items-center">
                        <img
                            src={user?.photoURL as string}
                            className="size-10 bg-black/10 dark:bg-white/60 rounded-full" />
                        <div>
                            <p className="text-xl font-semibold text-black dark:text-white">{user?.displayName}</p>
                            <p className="text-xs text-black/70 dark:text-white/70">{user?.email}</p>
                        </div>
                    </div>
            }


            {/* Navigation Items */}
            <div className="mt-10">
                {
                    pages?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "bg-blue-500/10"}  mt-2 p-3 rounded-xl flex items-center gap-3`}>
                                <span className="text-2xl text-black dark:text-white">{page?.icon}</span>
                                <p className="text-[16px] font-light font-sans">{page?.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

            {/* Social Identity */}


            <div className="absolute left-0 p-3 bottom-0 w-full">
                <Link href={"/dashboard/"}>
                    <button className="bg-blue-500 w-full p-3 cursor-pointer font-semibold rounded-xl text-sm">
                        Search Product
                    </button>
                </Link>
                {
                    utils?.map((page) => (
                        <Link key={page?.href} href={page?.href}>
                            <div className={`${page?.href === pathname && "bg-blue-500/10"}  mt-2 p-3 rounded-xl flex items-center gap-3`}>
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

export default Sidebar;