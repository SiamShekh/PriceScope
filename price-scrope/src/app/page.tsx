import "@/app/globals.css"
import Link from 'next/link';
import { BsInfoLg } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaStar, FaVideo } from 'react-icons/fa6';
import SplitText from "@/components/utils/SplitText";
import SpotlightCard from "@/components/utils/SpotlightCard";
import review from "@/utils/review";

const page = () => {


    return (
        <div className='max-w-7xl p-3 mx-auto min-h-screen'>
            <div className="flex items-center justify-between">
                <p className='text-xl font-bold'>Pricescope</p>
                <div className="items-center gap-10 hidden md:flex">
                    <Link href={"/dashboard"}>Search Product</Link>
                    <Link href={"/dashboard/demand"}>Trending Now</Link>
                </div>
            </div>

            <div className="min-h-[90vh] flex items-center justify-center md:flex-row flex-col-reverse relative mt-10">
                <div className="flex-1">
                    <div className="min-h-[90vh] flex items-start justify-center flex-col">
                        <div className="bg-black/10 dark:bg-white/10 flex items-center px-2 rounded-md p-1 gap-1 border border-black/10 dark:border-white/10 w-fit">
                            <BsInfoLg className='text-xl bg-black/20 dark:bg-white/20 rounded-full text-black dark:text-white' />
                            <p className='font-medium text-black/50 dark:text-white/50 uppercase'>presented by Syntax Siam</p>
                        </div>
                        <SplitText
                            text="Is it over price?"
                            className="text-5xl lg:text-7xl mt-5 font-semibold"
                            delay={50}
                            duration={0.3}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="start"
                        />
                        <SplitText
                            text=" or not from right place?"
                            className="text-5xl lg:text-7xl font-semibold text-yellow-500"
                            delay={50}
                            duration={0.3}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="start"
                        />
                        <p className='font-medium text-black/50 dark:text-white/50 text-sm mt-10'><span className='text-black dark:text-white'>Context: </span>Siam Sheikh, a developer at Syntax Lab, is looking for a new laptop to support his daily work. He wants the best deal — one that offers the lowest price, high quality, and reliability. To find the right option, he’s now thinking of searching on PriceScope.</p>

                        <div className="flex items-center gap-3 mt-5">
                            <Link href={"/login"} className='bg-blue-600 text-white px-3 py-1 rounded-md font-semibold flex items-center gap-2'><CgProfile /> Sign Up</Link>
                            <Link href={"/login"} className='bg-black dark:bg-white px-3 py-1 rounded-md text-white dark:text-black font-semibold flex items-center gap-2'><FaVideo /> How it's work?</Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className=" inset-0 flex items-center justify-center flex-col  hover:z-50 duration-500 hover:rotate-0">
                        <div className="lg:w-96 w-full h-fit cursor-pointer rounded-2xl bg-black/10 dark:bg-white/10 border-2 border-white/10 dark:border-white/10 z-20 backdrop-blur-lg">
                            <img
                                src={"https://laptopisland.lk/wp-content/uploads/2025/01/MSI-Modern-15-i5-13th-Gen-8GB-512GB-SSD-2.png"}
                                alt='Mac book'
                                className='lg:h-64 object-cover bg-black p-3 rounded-2xl'
                            />
                            <div className="p-3">
                                <p className='dark:text-white/60 text-black/60 text-sm lg:text-xl lg:mt-5'>{"Electronics>Laptop"}</p>
                                <p className='dark:text-white text-black font-bold text-xl lg:text-3xl my-3'>MSI Modern 15 B7M AMD Ryzen 5 7430U 15.6" FHD Laptop</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center lg:text-xl text-yellow-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className='dark:text-white text-black text-sm lg:text-sm'>{"8,901 Review"}</p>
                                </div>
                                <div className="flex items-end gap-2 dark:text-white">
                                    <p className='text-2xl lg:text-3xl font-bold'>89,100 BDT</p>
                                    <p className='text-sm line-through lg:text-xl'>109,000 BDT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <p className={`text-5xl card_css lg:text-7xl text-black dark:text-white font-semibold text-center mt-28`}>Find the best prices</p>
                <p className='text-center text-sm mt-4 text-black/60 dark:text-white/60 lg:max-w-2xl lg:text-3xl max-w-md mx-auto font-medium'>Compare prices, get real-time tracking, and save money on your purchases.</p>

                <div className="grid mt-5 md:grid-cols-2 gap-3 items-center">
                    <SpotlightCard className="cursor-pointer" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <p className="text-9xl font-semibold text-green-500">100%</p>
                        <p className="text-2xl uppercase font-medium my-2">Real-time price tracking</p>
                        <p className="text-sm uppercase dark:text-white/60">We gather product information and prices from popular e-commerce platforms and sort them by the lowest price.</p>
                    </SpotlightCard>
                    <SpotlightCard className="cursor-pointer row-span-2 h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className="lg:absolute bottom-3">
                            <p className="text-7xl lg:text-9xl font-semibold text-yellow-500">300+</p>
                            <p className="text-2xl font-semibold uppercase">Product in a single pages</p>
                            <p className="text-sm uppercase dark:text-white/60">We display over 300 products from different e-commerce websites and sort them by price, from highest to lowest.</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="cursor-pointer h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <p className="text-9xl font-semibold text-cyan-500">-14%</p>
                        <p className="text-xl font-medium my-2">Sort by lowest price</p>
                        <p className="text-sm dark:text-white/60">We sort products by price (lowest to highest) while also considering product quality — not just the price.</p>
                    </SpotlightCard>
                </div>
            </div>

            <div className="marquee-wrapper relative">
                <p className={`text-5xl relative z-10 card_css lg:text-7xl text-black dark:text-white font-semibold text-center mt-28`}>Loved by our users</p>
                <p className='text-center text-xl z-10 mt-4 text-black/60 dark:text-white/60 lg:max-w-2xl lg:text-3xl max-w-md mx-auto font-medium'>People love our tools — here’s what they’re saying.</p>

                <div className="marquee-container inline-flex gap-4 mt-10">
                    {
                        review.map((review, i) => (
                            <SpotlightCard key={i} className="cursor-pointer w-96 marquee" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p className="line-clamp-3 mb-10">{review?.review}</p>

                                <div className="flex items-center gap-3">
                                    <img className="size-10 rounded-full bg-white/10" src={review?.profilePicture} />
                                    <p>{review?.name}</p>
                                </div>
                            </SpotlightCard>
                        ))
                    }
                </div>

                <div className="marquee-reverse inline-flex gap-4 mt-5">
                    {
                        review?.reverse().map((review, i) => (
                            <SpotlightCard key={i} className="cursor-pointer w-96 marquee" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <p className="line-clamp-3 mb-10">{review?.review}</p>

                                <div className="flex items-center gap-3">
                                    <img className="size-10 rounded-full bg-white/10" src={review?.profilePicture} />
                                    <p>{review?.name}</p>
                                </div>
                            </SpotlightCard>
                        ))
                    }
                </div>

                <div className="absolute z-0 hidden md:flex h-full w-96 bg-gradient-to-r from-black to-transparent inset-0 left-0"></div>
                <div className="absolute z-0 h-full hidden md:flex w-96 bg-gradient-to-l from-black to-transparent top-0 right-0"></div>
            </div>

            <div className="bg-[#004752] p-12 mt-20 rounded-xl flex items-center justify-center flex-col gap-4">
                <p className="font-semibold text-3xl text-center text-white">Start your journey with Pricescope</p>
                <p className="text-xl text-center text-white">Search and find the best products.</p>
                <Link href={"/dashboard"} className="text-center mt-10 px-10 bg-white text-black p-3 rounded-full font-bold hover:bg-black hover:text-white hover:border-0 duration-500">Browse Product</Link>
            </div>

            <div className="md:flex justify-between mt-20">
                <div className="">
                    <p className="text-2xl font-medium">PriceScope</p>
                    <p>A tool that created by Syntax Siam</p>
                    <p className="opacity-60 text-sm">MIT © 2025 Syntax Siam</p>
                </div>
                <div className="hidden md:flex items-center gap-4 text-white/60">
                    <Link href={"/dashboard"} className="font-medium">Search</Link>
                    <Link href={"/dashboard/demand"} className="font-medium">Best Sell</Link>
                    <Link href={"/dashboard/demand"} className="font-medium">Github</Link>
                    <Link href={"/dashboard/demand"} className="font-medium">Linkedin</Link>
                </div>
            </div>
        </div>
    );
};

export default page;