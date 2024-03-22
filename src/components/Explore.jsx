import React from 'react'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'

const Explore = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className="mt-4 flex flex-col gap-4 items-center justify-center">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Explore the beautiful bangladesh</h1>
            <p className='text-sm max-w-md text-center'>Explore the natural beauty of bangladesh and witness the creation at it's best</p>
        </div>
        <div className="mt-4 grid lg:grid-cols-3 gap-4 px-4">
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image4} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>CoxsBazar</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image5} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>Dhaka</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image6} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>Sylhet</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image7} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>Khulna</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image8} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>Rajshahi</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
                <div className="relative rounded shadow group overflow-hidden">
                    <img src={image9} alt="" className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                    <h4 className={`left-[-100%] invisible group-hover:left-4 bottom-4 group-hover:visible transition ease-in-out duration-300 z-10 uppercase font-bold absolute  text-white text-2xl`}>Chattogram</h4>
                    <div className="absolute inset-0 bg-gray-600/40"></div>
                </div>                             
        </div>
    </div>
  )
}

export default Explore