import React from 'react'
import video from '../assets/video.mp4'

import {BsSearch} from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
        <video src={video} autoPlay loop muted className='w-full h-full object-cover'></video>
        <div className="absolute inset-0 bg-gray-600/30"></div>

        <div className="flex flex-col items-center justify-center absolute inset-0">
            <h1 className='text-5xl  text-center font-bold uppercase text-white'>Riverine Bangladesh</h1>
            <p className='text-white px-4 font-semibold text-xl md:text-2xl lg:text-3xl text-center py-4'>Observe the beauty of Bangladesh Closely</p>
            <form action="" className='flex w-3/5 text-black bg-white rounded justify-between items-center'>
                <input type="text" placeholder='Search for your destination' className='text-black px-2 outline-none border-0 ring-0 active:border-0 active:ring-0 focus:border-0 focus:ring-0'/>
                <button className='p-4'><BsSearch /></button>
            </form>
        </div>
    </div>
  )
}

export default Hero