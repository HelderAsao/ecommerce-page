
import IconNext from '/images/icon-next.svg'
import IconPrevious from '/images/icon-previous.svg'
import Shoes1Thumbnail from '/images/image-product-1-thumbnail.jpg'
import Shoes2Thumbnail from '/images/image-product-2-thumbnail.jpg'
import Shoes3Thumbnail from '/images/image-product-3-thumbnail.jpg'
import Shoes4Thumbnail from '/images/image-product-4-thumbnail.jpg'


type SectionProps = {
    chosenShoes: string[],
    shoes: number,
    setShoes: (value: number) => void,
    setIsLightboxOpen: (value: boolean) => void,
    handlePreviousArrow: () => void,
    handleNextArrow: () => void,
}

const Gallery = ({ chosenShoes, shoes, setShoes, setIsLightboxOpen, handlePreviousArrow, handleNextArrow }: SectionProps) => {

    const shoesThumbnails = [
        Shoes1Thumbnail,
        Shoes2Thumbnail,
        Shoes3Thumbnail,
        Shoes4Thumbnail
    ]

    return (
        
            <section>
                <div className='relative'>
                    <img src={chosenShoes[shoes]} alt="shoes mobile" className=' w-full h-auto md:rounded-md cursor-pointer' onClick={() => setIsLightboxOpen(true)} />
                    <div className='absolute flex justify-between w-full top-1/2 px-5 '>
                        <img src={IconPrevious} alt="" className='md:hidden cursor-pointer bg-white p-4 rounded-full w-11 h-11 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' onClick={() => handlePreviousArrow()} />
                        <img src={IconNext} alt="" className='md:hidden cursor-pointer bg-white p-4 rounded-full w-11 h-11 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-md active:scale-95' onClick={() => handleNextArrow()} />
                    </div>

                    <div className='hidden md:flex md:gap-6 md:mt-6'>

                        {shoesThumbnails.map((thumbnail, index) => (
                            <div key={index} className='relative group border-2 border-transparent rounded-md overflow-hidden hover:border-amber-600 cursor-pointer' onClick={() => setShoes(index)}>

                                <img src={thumbnail} alt={'Product thumbnail'} className='rounded-md' />

                                <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-200'>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

    )

}

export default Gallery