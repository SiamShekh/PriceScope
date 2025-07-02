"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineFavorite, MdTipsAndUpdates } from 'react-icons/md';
import { RiAccountPinCircleFill } from 'react-icons/ri';

const Dock = () => {
    const pathname = usePathname();

    const pages = [
        {
            name: "Home",
            href: "/dashboard",
            icon: <GoHomeFill />
        },
        {
            name: "Demand",
            href: "/dashboard/demand",
            icon: <FaRegEye />
        },
        {
            name: "Favorite",
            href: "/dashboard/favorite",
            icon: <MdOutlineFavorite />
        },
        {
            name: "Account",
            href: "/dashboard/account",
            icon: <RiAccountPinCircleFill />
        },
    ]

    return (
        <div className="dock lg:hidden">
            {
                pages.map((page) => (
                    <Link key={page?.href} href={page?.href}>
                        <button className={`${page?.href === pathname ? "dark:text-white text-black" : "text-black/30 dark:text-white/30"} flex items-center justify-center flex-col`}>
                            <span className='text-xl'>{page?.icon}</span>
                            <span className="dock-label line-clamp-1">{page?.name}</span>
                        </button>
                    </Link>
                ))
            }

        </div>
    );
};

export default Dock;