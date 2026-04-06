const ProductInfo = () => {


    return(
        <section className='p-7 '>
                        <p className='mb-2'> SNEAKER COMPANY</p>
                        <p className='text-2xl font-bold mb-2 md:text-4xl md:my-6'> Fall Limited Edition Sneakers</p>

                        <p className='mb-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

                        <div className='flex items-center md:flex-col md:items-start md:gap-4'>
                            <div className='flex w-full items-center  gap-5'>
                                <span className='text-2xl'>$125.00</span>
                                <span className='border bg-black text-white p-1 rounded-md '>50%</span>
                            </div>
                            <div className='flex '>
                                <span className='line-through '>$250.00</span>
                            </div>
                        </div>

                    </section>
    )

}

export default ProductInfo