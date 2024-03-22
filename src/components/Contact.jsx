import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className="py-12 px-4 flex items-center flex-col justify-between">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Contact Us</h1>
            <p className='text-sm max-w-md'>Got some question? Don't hesitate to shoot us your question!</p>

            <form action="" className='w-[60%] flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Your Full Name:</label>
                    <input type="text" placeholder='your full name here' className='border p-4 rounded shadow'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Valid Email:</label>
                    <input type="text" placeholder='Email to reply you back' className='border p-4 rounded shadow'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Subject:</label>
                    <input type="text" placeholder='Topic or subject for question' className='border p-4 rounded shadow'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Message / Query:</label>
                    <textarea name="" className='border p-4 rounded shadow' id="" cols="30" rows="10" placeholder='What would you like to know from us?'></textarea>
                </div>

                <button className='px-6 py-2 rounded bg-gradient-to-r from-green-500 to-green-500 via-red-500 font-bold uppercase mr-auto'>Send Query</button>
            </form>
        </div>
    </div>
  )
}

export default Contact