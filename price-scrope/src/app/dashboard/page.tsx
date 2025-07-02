"use client";

import ProductSkelaton from '@/components/skelaton/Product';
import HomePage from '@/components/swapper/HomePage';
import ProductItem from '@/components/utils/Product';
import { Product as TProduct } from '@/index';
import SearchProducts from '@/server-actions/search-products';
import Image from 'next/image';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { CiSearch } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [products, setProduct] = useState<undefined | TProduct[]>(undefined);
  const [isPending, setPending] = useState(false);
  const [search, setSearch] = useState("");

  const HandleSearch = async (e: FieldValues) => {
    setSearch(e?.search);
    setPending(true);
    setProduct(await SearchProducts(e?.search));
    setPending(false);
  }


  return (
    <div className="min-h-screen  ">
      <HomePage />
      <form onSubmit={handleSubmit(HandleSearch)} className="flex items-center justify-between border-2 border-black/5 dark:border-white/5 dark:bg-white/5 relative overflow-hidden mt-5 rounded-md">
        <input type="text" {...register("search")} required placeholder='Keyboard...' className='outline-none p-3 font-semibold text-black dark:text-white w-full' />
        <button type='submit' className='dark:bg-white/5 bg-black/5 dark:hover:bg-white dark:hover:text-black duration-500 text-2xl p-4 rounded-l-full'><FaSearch /></button>
      </form>

      {search
        &&
        <div className='my-3'>
          <p className='dark:text-white text-black font-bold text-xl'>{search}</p>
          <p className='text-black/60 dark:text-white/60 text-sm'>
            {isPending ? "__ " : products?.length + " "}
            Product Found</p>
        </div>
      }


      {
        search ?
          <div className="grid lg:grid-cols-4 gap-3 mt-4">
            {
              isPending ? (
                <>
                  <ProductSkelaton />
                  <ProductSkelaton />
                  <ProductSkelaton />
                  <ProductSkelaton />
                </>
              ) :
                products?.length === 0 ?
                  <div className='flex items-center justify-center flex-col mt-5 lg:col-span-4'>
                    <p className='font-medium text-black/60 dark:text-white/60'>Search No Result</p>
                    <p className='font-semibold text-black/60 dark:text-white/80 text-xl'>We're sorry. We cannot find any matches for your search term.</p>
                    <CiSearch className='text-6xl' />
                  </div> :
                  products?.map((product: TProduct, i: number) => (
                    <ProductItem product={product} key={i} />
                  ))
            }
          </div> :
          <div className='flex items-center justify-center flex-col mt-20 lg:col-span-4'>
            <p className='text-2xl font-bold'>Search from</p>
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
            <div className="max-w-md mx-auto grid grid-cols-4 items-center justify-center gap-3">
              <Image width={100} height={100} src={"https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo-2018.png"} alt='Daraz' />
              <Image width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/c/cf/Pickaboo.png"} alt='Daraz' />
              <Image width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rokomari.svg/1200px-Rokomari.svg.png"} alt='Daraz' />
              <Image width={100} height={100} src={"https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png"} alt='Daraz' />
            </div>
          </div>
      }
    </div>
  );
};

export default Home;