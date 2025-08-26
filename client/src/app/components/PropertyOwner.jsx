import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function PropertyOwner() {
    return (
        <>
            <div className='max-w-[1200px] mx-auto my-8 p-2 '>
                <div className='w-full h-[200px] overflow-hidden rounded-4xl flex items-center relative'>
                    <img src="/images/property-bg.webp" className='object-cover object-center' alt="" />
                    <div className='absolute w-full h-full bg-linear-to-r from-[#5646d1e3] from-0% to-[#c93947eb] to-100%'>
                        <div className='flex items-center md:flex-nowrap flex-wrap justify-between h-full p-4'>
                            <img src="/images/placeholder-images.svg" className='lg:block hidden' alt="" />
                            <div>
                                <h1 className='sm:text-[35px] text-[25px] font-semibold text-[#fff]'>Are you property owner?</h1>
                                <h2 className='sm:text-[25px] text-[20px] text-[#fff]'>List your property & connect with clients faster!</h2>
                            </div>
                            <button className=' md:w-[250px] w-[100%] h-[60px] text-[20px] rounded-[6px] bg-[#fff] text-[#000] cursor-pointer group'>
                                <span className='flex items-center justify-center gap-2'>
                                    Post Property
                                    <FaArrowRight className='text-[20px]
                                        ' />

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
