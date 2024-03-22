import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-12 bg-gradient-to-r from-green-500 to-green-700 via-green-600 w-full mt-4'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-start px-4 gap-8 justify-between'>
            <div className="flex flex-col">
                <h1 className="text-3xl uppercase">Bangladesh</h1>
                <p className='text-sm max-w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta nobis similique culpa voluptatem, accusamus ut quae ipsam vel natus magnam tempore eum, et minima sint, praesentium amet quidem est.</p>
            </div>
            {/* links */}
            <div className="flex flex-col gap-2 items-start">
                <h4 className='font-bold text-lg'>Useful Links</h4>
                <ul className="flex flex-col items-start gap-1">
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Home</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Privacy Policy</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">TOS</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Contact Us</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">About Us</a></li>
                </ul>
            </div>
            {/* resources */}
            <div className="flex flex-col gap-2 items-start">
                <h4 className='font-bold text-lg'>Resources</h4>
                <ul className="flex flex-col items-start gap-1">
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Home</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Privacy Policy</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">TOS</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">Contact Us</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#">About Us</a></li>
                </ul>
            </div>
            {/* social links */}
            <div className="flex flex-col gap-2 items-start">
                <h4 className='font-bold text-lg'>Social Links</h4>
                <ul className="flex flex-col items-start gap-1">
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#" className='flex items-center'><span><FaFacebook/></span>Facebook</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#" className='flex items-center'><span><FaInstagram/></span> Instagram</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#" className='flex items-center'><span><FaTwitter/></span> Twitter</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#" className='flex items-center'><span><FaYoutube/></span> Youtube</a></li>
                    <li className='text-sm opacity-60 hover:opacity-100 cursor-pointer'><a href="#" className='flex items-center'><span><FaLinkedin/></span> Linkedin</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer