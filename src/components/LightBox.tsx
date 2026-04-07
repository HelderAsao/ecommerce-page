import IconClose from '/images/icon-close.svg'
import IconPrevious from '/images/icon-previous.svg'
import IconNext from '/public/images/icon-next.svg'
import Shoes1Thumbnail from '/images/image-product-1-thumbnail.jpg'
import Shoes2Thumbnail from '/images/image-product-2-thumbnail.jpg'
import Shoes3Thumbnail from '/images/image-product-3-thumbnail.jpg'
import Shoes4Thumbnail from '/images/image-product-4-thumbnail.jpg'
import { useEffect, useState, useRef } from 'react'

type LightBoxProps = {
    isLightboxOpen: boolean,
    chosenShoes: string[],
    shoes: number,
    setIsLightboxOpen: (value: boolean) => void,

}


const LightBox = ({ isLightboxOpen, chosenShoes, shoes, setIsLightboxOpen }: LightBoxProps) => {



    const [lightBoxImage, setLightBoxImage] = useState(shoes)

    const lightBoxRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        if (!isLightboxOpen) return;

        const handleClickOutside = (e: MouseEvent) => {

            if (lightBoxRef.current && !lightBoxRef.current.contains(e.target as Node)) {

                setIsLightboxOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isLightboxOpen])

    useEffect(() => {
        if (isLightboxOpen) {
            setLightBoxImage(shoes)
        }
    }, [isLightboxOpen, shoes])


    const handleNext = () => {
        setLightBoxImage(prev => (prev + 1) % chosenShoes.length)
    }

    const handlePrevious = () => {
        setLightBoxImage(prev => (prev - 1 + chosenShoes.length) % chosenShoes.length)
    }

    const shoesThumbnails = [
        Shoes1Thumbnail,
        Shoes2Thumbnail,
        Shoes3Thumbnail,
        Shoes4Thumbnail
    ]

    return (
         isLightboxOpen &&

        <div>

            <div className='hidden md:flex flex-col fixed z-20  justify-center items-center inset-0 bg-black/60'>

                <div className='w-[500px] ' ref={lightBoxRef}>

                    <div className='flex relative items-center'>
                        <img src={chosenShoes[lightBoxImage]} alt="" className=' rounded-md w-[500px] mb-8 h-auto' />
                        <img src={IconClose} alt="botao de deletar" className='absolute -top-6 right-0 cursor-pointer' onClick={() => setIsLightboxOpen(false)} />
                        <button className='absolute -left-6 ' onClick={handlePrevious}>
                            <img src={IconPrevious} alt="" className='cursor-pointer bg-white p-4 rounded-full w-11 h-11 top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' />
                        </button>
                        <button className='absolute -right-6' onClick={handleNext}>
                            <img src={IconNext} alt="" className='cursor-pointer bg-white p-4 rounded-full w-11 h-11 top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' />
                        </button>
                    </div>




                    <div className='flex w-full gap-8 px-6'>
                        {shoesThumbnails.map((thumbnail, index) => (
                            <div key={index} className={`relative group border-2 border-transparent rounded-md overflow-hidden cursor-pointer ${lightBoxImage === index ? 'border-amber-600' : 'hover:border-amber-600'}`} onClick={() => setLightBoxImage(index)}>
                                <img src={thumbnail} alt="Product thumbnail" className='rounded-md  ' />
                                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-200 ${lightBoxImage === index ? 'opacity-50' : 'opacity-0 group-hover:opacity-50'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default LightBox