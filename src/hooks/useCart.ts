import { useState } from 'react';

function useCart() {

    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState(0);
    
    const handleAddToCart = () => {
        setCartItems(prev => prev + count)
    }

    const resetCart = () => {
        setCartItems(0)
    }

    const resetCount = () => {
        setCount(0)
    }

    const handleIncrementButton = () => {
        setCount(prev => prev + 1)
    }
    const handleDecrementButton = () => {
        if (count === 0) return;
        setCount(prev => prev - 1)

    }


    return {
        count,
        cartItems,
        handleIncrementButton,
        handleDecrementButton,
        handleAddToCart,
        resetCount,
        resetCart,
    }
    
}

export default useCart