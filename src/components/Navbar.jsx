import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenu(!isMobileMenu);
  return (
    <div className='w-full absolute z-10 mx-auto h-24'>
        {/* navigation */}
        <nav className='w-full flex items-center justify-between absolute z-10 px-4 py-2'>
                {/* logo */}
                <h1 className='text-2xl md:text-3xl uppercase font-bold text-white'>Bangladesh.</h1>
                {/* menu items */}
                <ul className="hidden md:flex items-center">
                    <li className='p-4 font-semibold text-white'><a href="#">Home</a></li>
                    <li className='p-4 font-semibold text-white'><a href="#">Gallery</a></li>
                    <li className='p-4 font-semibold text-white'><a href="#">Guide</a></li>
                    <li className='p-4 font-semibold text-white'><a href="#">Contact</a></li>
                    <li className='p-4 font-semibold text-white'><a href="#">Explore</a></li>
                </ul>
                {/* action buttons */}
                <div className="hidden md:flex items-center">
                    <a href="#" className='border bg-gradient-to-r from-green-500 to-green-500 via-red-500 text-white font-bold px-4 py-2 rounded shadow uppercase'>book a guide</a>
                </div>
                {/* mobile menu */}
                <div className='inline-block md:hidden cursor-pointer text-white' onClick={toggleMobileMenu}>
                    {
                        isMobileMenu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
                    }
                </div>
        </nav>

        {/* mobile menu navigation */}
        <div className={`absolute z-20 top-0 w-[60%] bg-gradient-to-r from-green-500 to-green-600 h-screen border-r border-r-red-500 p-4 ${isMobileMenu ? 'left-0' : 'left-[-100%]'} duration-300`}>
            <h1 className='text-2xl md:text-3xl uppercase font-bold'>Bangladesh.</h1>
            {/* menu items */}
            <ul className="flex flex-col gap-2 mt-4 items-start">
                    <li className='p-4 border-b border-red-500 w-full font-semibold'><a href="#">Home</a></li>
                    <li className='p-4 border-b border-red-500 w-full font-semibold'><a href="#">Gallery</a></li>
                    <li className='p-4 border-b border-red-500 w-full font-semibold'><a href="#">Guide</a></li>
                    <li className='p-4 border-b border-red-500 w-full font-semibold'><a href="#">Contact</a></li>
                    <li className='p-4 border-b border-red-500 w-full font-semibold'><a href="#">Explore</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar