import IconClose from '/images/icon-close.svg'

type SideBarProps = {
    isSidebarOpen: boolean,
    setIsSidebarOpen:(value:boolean) =>void,
}

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }:SideBarProps) => {

    if (!isSidebarOpen) return null

    const itemsMenu = [
        'collections',
        'men',
        'women',
        'about',
        'contact'
    ]

    return (
        <div className=' md:hidden p-7 fixed top-0 left-0 h-screen w-2/3 bg-white z-10'>
            <img src={IconClose} alt="" className='h-4 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
            <ul className='flex flex-col gap-4 font-bold text-black mt-10'>

                {itemsMenu.map((item, index) => (
                    <li key={index} className='cursor-pointer group relative'>
                        {item}
                        <span className='absolute left-0 -bottom-2 h-[2px] w-0 bg-black  transition-all duration-300  group-hover:w-full'></span>
                    </li>
                ))}

            </ul>
        </div>

    )
}

export default SideBar