"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';

export default function About() {
    const [imageTarget, setImageTarget] = useState("/images/A1.webp")

    console.log(imageTarget);

    return (
        <>
            <div className='max-w-[1200px] mx-auto p-2 '>
                <div className='flex md:flex-nowrap flex-wrap gap-4 mt-4'>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <div className='bg-[#FFF5F6] p-6 rounded-2xl'>
                            <h1 className='text-[#DD3846] sm:text-[40px] text-[30px] font-semibold'>
                                {/* 34 */}
                                <CountUp
                                    end={34}
                                    duration={2}
                                    enableScrollSpy
                                />
                                +</h1>
                            <p className='sm:text-[16px] text-[14px]'>Year of Experience</p>
                        </div>
                        <div className='bg-[#FFF5F6] p-6 rounded-2xl'>
                            <h1 className='text-[#DD3846] sm:text-[40px] text-[30px] font-semibold'>
                                <CountUp
                                    end={250}
                                    duration={2}
                                    enableScrollSpy
                                />+</h1>
                            <p className='sm:text-[16px] text-[14px]'>Properties Listed</p>
                        </div>
                        <div className='bg-[#FFF5F6] p-6 rounded-2xl'>
                            <h1 className='text-[#DD3846] sm:text-[40px] text-[30px] font-semibold'>
                                <CountUp
                                    end={4100}
                                    duration={2}
                                    enableScrollSpy
                                />+</h1>
                            <p className='sm:text-[16px] text-[14px]'>Successful Deals</p>
                        </div>
                        <div className='bg-[#FFF5F6] p-6 rounded-2xl'>
                            <h1 className='text-[#DD3846] sm:text-[40px] text-[30px] font-semibold'>
                                <CountUp
                                    end={2200}
                                    duration={2}
                                    enableScrollSpy
                                />+</h1>
                            <p className='sm:text-[16px] text-[14px]'>Happy Customers</p>
                        </div>
                    </div>
                    <div className='relative w-full rounded-2xl overflow-hidden'>
                        <img src={imageTarget} alt="" />

                        <div className='absolute bg-[#00000045] top-0 left-0 w-full h-full'>
                            <div className='absolute bottom-5 left-5'>
                                <div className='flex gap-2'>
                                    <img src="/images/A1.webp" onClick={(e) => setImageTarget("/images/A1.webp")} className='lg:w-[110px] md:w-[80px] sm:w-[110px] w-[70px] sm:rounded-2xl rounded-[10px]' alt="" />
                                    <img src="/images/A2.webp" onClick={(e) => setImageTarget("/images/A2.webp")} className='lg:w-[110px] md:w-[80px] sm:w-[110px] w-[70px] sm:rounded-2xl rounded-[10px]' alt="" />
                                    <img src="/images/A3.webp" onClick={(e) => setImageTarget("/images/A3.webp")} className='lg:w-[110px] md:w-[80px] sm:w-[110px] w-[70px] sm:rounded-2xl rounded-[10px]' alt="" />
                                    <img src="/images/A4.webp" onClick={(e) => setImageTarget("/images/A4.webp")} className='lg:w-[110px] md:w-[80px] sm:w-[110px] w-[70px] sm:rounded-2xl rounded-[10px]' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
