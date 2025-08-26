import { howSold } from '@/app/assets/assets'
import React from 'react'

export default function HowSold() {
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-2 p-2'>
                <h1 className='text-[25px]'>How your property will be sold in weeks ?</h1>

                <div className='mt-4 grid sm:grid-cols-2 grid-cols-1 gap-2'>
                    {howSold.map((items, index) => (
                        <div key={index} className='border border-[#00000021] bg-[#fff] p-4 group rounded-2xl'>
                            <div className='w-full h-[200px] overflow-hidden rounded-2xl'>
                                <img src={items.img} className='w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-500' alt="" />
                            </div>
                            <div className='mt-4'>
                                <h5 className='text-[18px]'>{items.title}</h5>
                                <p className='text-[#555] text-[15px] line-clamp-6 mt-1'>{items.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
