const Watch = () => {
    return (
        <div>
            <div className="uppercase relative pl-2">
                <div className="h-full absolute w-2 -left-2 bg-white/30"></div>
                <p className="font-extrabold font-mono text-3xl text-white">watched Product</p>
                <p className="font-mono text-2xl text-white/60">The product you searched for and viewed on our platform.</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Watch;

const Product = () => {
    return (
        <div className="bg-white/5 rounded-md border border-white/10 uppercase">
            <img src="https://m.media-amazon.com/images/I/711hcPp2r8L._AC_SL1500_.jpg" alt="image" className='h-36 rounded-t-md w-full object-cover' />
            <div className="p-2">
                <p className='font-medium line-clamp-2 text-white'>Asus Keyboard 51763 Model Most Latest varient</p>
                <p className='font-medium font-mono text-white/50 mt-2'>Price: 345 BDT</p>
                <p className='font-medium font-mono text-white/50'>Brand: Daraz.com</p>
                <div className="flex items-center justify-center mt-2 gap-2">
                    <button className='p-3 bg-cyan-500/20 w-full rounded-md uppercase text-xs'>add favorite</button>
                    <button className='p-2 bg-green-500/20 w-full rounded-md uppercase'>buy</button>
                </div>
            </div>
        </div>
    )
}