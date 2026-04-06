import Cart from '../../public/images/icon-cart.svg'
import Minus from '../../public/images/icon-minus.svg'
import Plus from '../../public/images/icon-plus.svg'



type AddToCartProps = {
    count: number,
    handleDecrementButton: () => void,
    handleIncrementButton: () => void,
    handleAddToCart: () => void,
    resetCount: () => void
}

const AddToCart =({ count, handleDecrementButton, handleIncrementButton, handleAddToCart, resetCount }:AddToCartProps) =>{


    return(
        <div>
            <footer className='flex flex-col md:flex-row md:gap-4 md:items-center'>
                        <div className='flex items-center px-6 md:px-0 md:pl-6 md:w-1/4'>
                            <div className='flex justify-between w-full  text-center border rounded-md h-10 items-center'>
                                <button className='cursor-pointer'>
                                    <img src={Minus} alt="minus" className='px-2' onClick={() => handleDecrementButton()} />
                                </button>
                                <span className='text-center'>{count}</span>
                                <button className='cursor-pointer'>
                                    <img src={Plus} alt="plus" className='px-2' onClick={() => handleIncrementButton()} />
                                </button>
                            </div>
                        </div>

                        <div className=' flex items-center justify-center mt-2 px-6 md:px-0 md:mt-0 md:w-2/4'>
                            <button className=' flex h-10 border items-center rounded-md w-full bg-orange-400 justify-center gap-3 text-black cursor-pointer transition-all duration-200 ease-in-out hover:bg-orange-500 hover:shadow-md active:scale-95'
                                onClick={() => {
                                    handleAddToCart()
                                    resetCount()
                                }}>
                                <img src={Cart} alt="cart" className=' w-4 h-4' />
                                Add to cart
                            </button>
                        </div>
                    </footer>
        </div>
    )
}

export default AddToCart