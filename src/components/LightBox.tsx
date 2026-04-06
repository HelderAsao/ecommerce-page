import IconClose from '../../public/images/icon-close.svg'
import IconPrevious from '../../public/images/icon-previous.svg'
import IconNext from '../../public/images/icon-next.svg'
import Shoes1Thumbnail from '../../public/images/image-product-1-thumbnail.jpg'
import Shoes2Thumbnail from '../../public/images/image-product-2-thumbnail.jpg'
import Shoes3Thumbnail from '../../public/images/image-product-3-thumbnail.jpg'
import Shoes4Thumbnail from '../../public/images/image-product-4-thumbnail.jpg'

type LightBoxProps = {
    isLightboxOpen: boolean,
    chosenShoes: string[],
    shoes: number,
    setIsLightboxOpen: (value: boolean) => void,
    handlePreviousArrow: () => void,
    handleNextArrow: () => void,
    setShoes: (value: number) => void,

}

const LightBox = ({ isLightboxOpen, chosenShoes, shoes, setIsLightboxOpen, handlePreviousArrow, handleNextArrow, setShoes }: LightBoxProps) => {

    if (!isLightboxOpen) return null;

    const shoesThumbnails = [
        Shoes1Thumbnail,
        Shoes2Thumbnail,
        Shoes3Thumbnail,
        Shoes4Thumbnail
    ]

    return (
        <div>


            {isLightboxOpen &&
                <div className='hidden md:flex flex-col fixed z-20  justify-center items-center inset-0 bg-black/60'>

                    <div className='w-[500px]'>

                        <div className='flex relative items-center'>
                            <img src={chosenShoes[shoes]} alt="" className=' rounded-md w-[500px] mb-8 h-auto' />
                            <img src={IconClose} alt="botao de deletar" className='absolute -top-2 right-0 cursor-pointer' onClick={() => setIsLightboxOpen(false)} />
                            <button className='absolute -left-6 ' onClick={() => handlePreviousArrow()}>
                                <img src={IconPrevious} alt="" className='cursor-pointer bg-white p-4 rounded-full w-11 h-11 top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' />
                            </button>
                            <button className='absolute -right-6' onClick={() => handleNextArrow()}>
                                <img src={IconNext} alt="" className='cursor-pointer bg-white p-4 rounded-full w-11 h-11 top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' />
                            </button>
                        </div>




                        <div className='flex w-full gap-8 px-6'>
                            {shoesThumbnails.map((thumbnail, index) => (
                                <div className='relative group border-2 border-transparent rounded-md overflow-hidden hover:border-amber-600 cursor-pointer' onClick={() => setShoes(index)}>
                                    <img src={thumbnail} alt="Product thumbnail" className='rounded-md  ' />
                                    <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-200'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default LightBox