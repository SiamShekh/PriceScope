"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';

const LoginPage = () => {
    const images = [
        {
            original: "https://i.ibb.co/8n8nWcr3/7069728-3412435.jpg  ",
        },
        {
            original: "https://i.ibb.co/twvRsqN5/6572420-3301602.jpg",
        },
        {
            original: "https://i.ibb.co/5XDcg0h8/7079603-3509263.jpg",
        },
    ];

    return (
        <div className="dark:bg-white bg-black rounded-3xl border-2 border-black/5 dark:border-white/5">
            <ImageGallery
                showNav={false}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets
                autoPlay
                additionalClass="rounded-3xl relative overflow-hidden"
                items={images} />
            <p className="text-sm text-center p-3 text-white dark:text-black">Get high-quality products at cheap rates. It's the best tool for cutting your online shopping budget and making life easier.</p>
        </div>
    );
};

export default LoginPage;