import React from 'react'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const Gallery = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className="flex flex-col gap-4 py-12 items-center justify-center px-4">
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>Beauty of Bangladesh</h1>
            <p className='text-sm max-w-lg line-clamp-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aspernatur autem, laborum assumenda ipsum quia quam magni doloremque, dolorum, iusto sapiente molestias. Soluta, ab? Blanditiis laboriosam fugiat minima numquam error?</p>
            <div className="grid lg:grid-cols-5 gap-4">
                <img src={image1} alt="" className='object-cover w-full h-full md:col-span-3 md:row-span-2'/>
                <img src={image2} alt="" className='object-cover w-full h-full'/>
                <img src={image3} alt="" className='object-cover w-full h-full'/>
                <img src={image4} alt="" className='object-cover w-full h-full'/>
                <img src={image5} alt="" className='object-cover w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery