import React from 'react'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {MdTravelExplore} from 'react-icons/md';

const Guide = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className="py-12 px-4">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>Explore the beautiful Bangladesh</h1>
                    <article>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt iste quos in recusandae corrupti assumenda reiciendis sapiente laborum. Inventore molestias veritatis atque amet debitis consectetur ratione, id magni laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore similique adipisci porro odio. Nihil aspernatur, fugit velit explicabo error molestias at quidem eum rerum illo itaque obcaecati consequuntur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia animi, recusandae est modi quo a, unde necessitatibus quia earum omnis explicabo doloremque nostrum tempora eveniet quidem rem dignissimos harum illum?</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt iste quos in recusandae corrupti assumenda reiciendis sapiente laborum. Inventore molestias veritatis atque amet debitis consectetur ratione, id magni laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore similique adipisci porro odio. Nihil aspernatur, fugit velit explicabo error molestias at quidem eum rerum illo itaque obcaecati consequuntur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia animi, recusandae est modi quo a, unde necessitatibus quia earum omnis explicabo doloremque nostrum tempora eveniet quidem rem dignissimos harum illum?</p>
                    </article>
                    {/* action buttons */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center gap-2">
                            <RiCustomerServiceLine className='text-5xl bg-green-500 text-white rounded shadow p-2'/>
                            <div className="flex flex-col items-start">
                                <h4 className='font-bold text-xl'>Contact for Guide</h4>
                                <p className='text-sm font-semibold'>Call 244XX to book your guide.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdTravelExplore className='text-5xl bg-green-500 text-white rounded shadow p-2'/>
                            <div className="flex flex-col items-start">
                                <h4 className='font-bold text-xl'>Travel Guide on Call</h4>
                                <p className='text-sm font-semibold'>Call 244XX to book your hotels.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 flex flex-col shadow-md p-4">
                    <h4 className='text-lg font-bold'>Book Your Guide</h4>
                    <p className='text-sm'>contact us for experienced guide</p>
                    <form action="" className='flex flex-col gap-2 mt-4'>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Your Name</label>
                            <input type="text" className='p-2 rounded border' placeholder='Your name' />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Book From</label>
                            <input type="date" className='p-2 rounded border' />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Book To</label>
                            <input type="date" className='p-2 rounded border' />
                        </div>
                        <button className="bg-gradient-to-r from-green-500 to-green-600 via-red-500 rounded px-4 py-2 shadow text-black font-bold">Contact to Book</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guide