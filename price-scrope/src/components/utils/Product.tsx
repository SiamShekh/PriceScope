"use client";

import { Product } from "@/index";
import AddFavorite from "@/server-actions/AddFavorite";
import MarkDemanded from "@/server-actions/mark-demand";
import RemoveFromFavorite from "@/server-actions/RemoveFromFavorite";
import Image from "next/image";
import { toast, Toaster } from "sonner";

const ProductItem = ({ product, type }: { product: Product, type?: string }) => {

  return (
    <div className="dark:bg-white/5 bg-black/5 rounded-md border border-black/10 dark:border-white/10 uppercase mb-3">
      <Image
        width={200}
        height={200}
        src={product?.img}
        alt="image"
        className='h-36 rounded-t-md w-full object-cover' />
      <div className="p-2">
        <p className='font-medium line-clamp-2 text-black dark:text-white'>{product?.name}</p>
        <p className='font-medium font-mono text-black/50 dark:text-white/50 mt-2'>Price: {product?.price} BDT</p>
        {/* <p className='font-medium font-mono text-white/50'>Brand: Daraz.com</p> */}
        <div className="flex items-center justify-center mt-2 gap-2">
          {
            type === "delete" ?
              <button onClick={async () => {
                toast.loading("Loading");
                const data = await RemoveFromFavorite(product?.id);
                if (data) {
                  toast.dismiss();
                  toast.success("Successfully removed from favorite product");
                } else {
                  toast.dismiss();
                  toast.error("Connection Error, try again");
                }
              }} className='p-3 bg-cyan-500/20 w-full rounded-md uppercase text-xs'>remove</button> :
              <button onClick={async () => {
                toast.loading("Loading");
                const data = await AddFavorite(product);
                if (data) {
                  toast.dismiss();
                  toast.success("Successfully added on favorite");
                } else {
                  toast.dismiss();
                  toast.error("Connection Error, try again");
                }
              }} className='p-3 bg-cyan-500/20 w-full rounded-md uppercase text-xs'>add favorite</button>
          }

          <button onClick={() => {
            window.open(product?.href, "_blank");
            MarkDemanded(product);
          }} className='p-2 bg-green-500/20 w-full rounded-md uppercase'>buy</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;