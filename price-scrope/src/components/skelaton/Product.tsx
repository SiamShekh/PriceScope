const ProductSkelaton = () => {
  return (
    <div className="dark:bg-white/5 bg-black/5 rounded-md border dark:border-white/10 border-black/10 uppercase">
      <div className='h-36 dark:bg-white/5 bg-black/5 skeleton rounded-t-md w-full object-cover' />
      <div className="p-2">
        <p className='w-44 h-7 skeleton dark:bg-white/5 bg-black/5'/>
        <p className='w-32 h-5 mt-2 skeleton dark:bg-white/5 bg-black/5'/>
        <div className="flex skeleton items-center justify-center mt-2 gap-2">
          <button className='p-4 bg-cyan-500/20 w-full rounded-md uppercase text-xs flex-1'/>
          <button className='p-4 bg-green-500/20 w-full rounded-md uppercase flex-1'/>
        </div>
      </div>
    </div>
  )
}
export default ProductSkelaton;