"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';

const HomePage = () => {
    const images = [
        {
            original: "https://img.lazcdn.com/us/domino/3853a941-27c8-40cd-8a14-9f33def00015_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
        },
        {
            original: "https://img.lazcdn.com/us/domino/878bfb12-9e06-4810-9104-5131d0dac407_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
        },
        {
            original: "https://img.lazcdn.com/us/domino/b0d0885e-eaa5-4b8c-8ea5-212ca6baa90e_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
        },
    ];

    return (
        <div >
            <ImageGallery
                showNav={false}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets
                autoPlay
                additionalClass="rounded-2xl relative overflow-hidden"
                items={images} />
        </div>
    );
};

export default HomePage;