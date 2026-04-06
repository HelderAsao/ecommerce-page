
import IconMenu from '../../public/images/icon-menu.svg'
import Logo from '../../public/images/logo.svg'
import Cart from '../../public/images/icon-cart.svg'
import Avatar from '../../public/images/image-avatar.png'
import IconDelete from '../../public/images/icon-delete.svg'
import type React from 'react'

type NavProps = {
    cartRef: React.RefObject<HTMLDivElement | null>,
    toggleCartOpen: () => void, 
    isCartOpen: boolean,
    cartItems: number,
    getTotalPrice: () => number,
    resetCart: () => void,
    chosenShoes: string[],
    shoes: number,
    toggleSidebar: () => void

}

const Nav = ({ cartRef, toggleCartOpen, isCartOpen, cartItems, getTotalPrice, resetCart, chosenShoes, shoes, toggleSidebar }:NavProps) => {


    return (
        <div>


            <nav className='relative flex p-7 items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <img src={IconMenu} alt="menu"
                        onClick={() => {
                            console.log('clicou')
                            toggleSidebar()
                        }}

                        className='cursor-pointer h-4' />
                    <img src={Logo} alt="logo" className='w-30 h-5' />
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='relative ' ref={cartRef}>

                        <div className='relative' >
                            <img src={Cart} alt="cart" className='cursor-pointer h-5' onClick={() => toggleCartOpen()} />
                            <div className='absolute flex bg-red-400 text-white rounded-full w-4 h-4 -top-2 -right-2 text-xs items-center justify-center'>
                                <p className='text-center'>{cartItems}</p>
                            </div>
                        </div>

                        {/* content cart */}
                        {isCartOpen &&

                            <div className=' fixed left-2 right-2 mt-8 md:absolute z-10  bg-white   md:top-full rounded-md md:w-[450px]  md:right-0 md:left-auto md:translate-x-0 '>
                                <div className='p-4 '>
                                    <p className='text-black '>Cart</p>
                                </div>
                                <div className='w-full border border-gray-300 mt-6'></div>

                                {/* empty */}
                                {cartItems === 0 &&
                                    <div className=' flex items-center justify-center p-4'>
                                        <p className='mb-20 font-bold'> Your cart is empty</p>
                                    </div>
                                }

                                {/* conteudo */}
                                {cartItems > 0 &&
                                    <div className='flex  p-4 mt-6'>
                                        <div className='flex w-full justify-between items-center'>
                                            <img src={chosenShoes[shoes]} alt="shoes1" className='h-20 rounded-md' />
                                            <div className='flex flex-col'>
                                                <p>Fall Limited Edition Sneakers</p>
                                                <div className='flex gap-2'>
                                                    <p>$125.00 x {cartItems}</p>

                                                    <p className='font-bold text-black'>${getTotalPrice().toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <img src={IconDelete} alt="ícone lixeira" className='h-4 cursor-pointer' onClick={(e) => {
                                                e.stopPropagation()
                                                resetCart()
                                            }} />
                                        </div>

                                    </div>
                                }

                                <div className='flex p-4 '>
                                    <button className='bg-orange-400 p-4 w-full rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-orange-500 hover:shadow-md active:scale-95'>
                                        <p className='text-black'>Checkout</p>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <img src={Avatar} alt="avatar" className='h-5 w-5' />
                </div>


            </nav>
        </div>
    )
}

export default Nav