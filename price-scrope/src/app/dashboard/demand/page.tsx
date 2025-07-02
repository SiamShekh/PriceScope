import ProductSkelaton from "@/components/skelaton/Product";
import ProductItem from "@/components/utils/Product";
import { Product } from "@/index";
import getDemandedProduct from "@/server-actions/getDemandedProduct";
import Image from "next/image";

const Demand = async () => {
    const data = await getDemandedProduct();

    return (
        <div>
            <div className="uppercase relative pl-2">
                <div className="h-full absolute w-2 -left-2 bg-black/30 dark:bg-white/30"></div>
                <p className="font-extrabold font-mono text-3xl text-black dark:text-white">Most Watched Product</p>
                <p className="font-mono text-2xl dark:text-white/60 text-black/60">The product that users frequently search for and engage with on our platform.</p>
            </div>
            {
                <div className="grid lg:grid-cols-4 gap-3 mt-4">
                    {
                        !data ? (
                            <>
                                <ProductSkelaton />
                                <ProductSkelaton />
                                <ProductSkelaton />
                                <ProductSkelaton />
                            </>
                        ) :
                            data?.length === 0 ?
                                <div className='flex items-center justify-center flex-col mt-5 lg:col-span-4'>
                                    <Image src={"https://i.ibb.co/Mk5hGGyQ/men-take-note.webp"} width={400} height={400} quality={100} alt="image" className='font-medium text-white/60' />
                                    <p className="font-extrabold font-mono text-3xl text-black dark:text-white">Empty...</p>
                                </div> :
                                data?.map((product: Product, i: number) => (
                                    <ProductItem product={product} key={i} />
                                ))
                    }
                </div>
            }
        </div>
    );
};

export default Demand;

