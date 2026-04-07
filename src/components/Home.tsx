import Shoes from '/images/image-product-1.jpg'
import Shoes2 from '/images/image-product-2.jpg'
import Shoes3 from '/images/image-product-3.jpg'
import Shoes4 from '/images/image-product-4.jpg'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import LightBox from './LightBox'
import Nav from './Nav'
import ProductInfo from './ProductInfo'
import AddToCart from './AddToCart'
import Gallery from './Gallery'
import SideBar from './SideBar'
import useCart from '../hooks/useCart'
import { getTotalPrice } from '../utils/getTotalPrice'



const Home = () => {

    // referência para o carrinho
    const cartRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const handleClickOutside = (e:MouseEvent) => {

            if (cartRef.current && !cartRef.current.contains(e.target as Node )) {

                setIsCartOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const { count, cartItems, handleIncrementButton, handleDecrementButton, handleAddToCart, resetCount, resetCart } = useCart()

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [shoes, setShoes] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const chosenShoes = [
        Shoes,
        Shoes2,
        Shoes3,
        Shoes4
    ]

    const toggleSideBar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    const handleNextArrow = () => {
        setShoes(prev => (prev + 1) % chosenShoes.length)
    }

    const handlePreviousArrow = () => {
        setShoes(prev => (prev - 1 + chosenShoes.length) % chosenShoes.length)
    }

    const toggleCartOpen = () => {
        setIsCartOpen(prev => !prev)
    }


    return (
        <div className=''>

            {/* lightbox */}
            <LightBox
                isLightboxOpen={isLightboxOpen}
                chosenShoes={chosenShoes}
                shoes={shoes}
                setShoes={setShoes}
                setIsLightboxOpen={setIsLightboxOpen}
                handlePreviousArrow={handlePreviousArrow}
                handleNextArrow={handleNextArrow}

            />


            <Nav
                cartRef={cartRef}
                toggleCartOpen={toggleCartOpen}
                isCartOpen={isCartOpen}
                cartItems={cartItems}
                getTotalPrice={getTotalPrice}
                resetCart={resetCart}
                chosenShoes={chosenShoes}
                shoes={shoes}
                toggleSidebar={toggleSideBar}
            />

            {/* menu lateral */}
            <div className='md:p-7'>

                <SideBar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div className='flex flex-col md:flex-row md:items-center md:gap-16'>
                    <Gallery
                        chosenShoes={chosenShoes}
                        shoes={shoes}
                        setShoes={setShoes}
                        setIsLightboxOpen={setIsLightboxOpen}
                        handlePreviousArrow={handlePreviousArrow}
                        handleNextArrow={handleNextArrow}
                    />

                    <div className='flex flex-col md:flex-col md:min-h-[430px] md:justify-between'>


                        <ProductInfo />
                        <AddToCart
                            count={count}
                            handleDecrementButton={handleDecrementButton}
                            handleIncrementButton={handleIncrementButton}
                            handleAddToCart={handleAddToCart}
                            resetCount={resetCount}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;