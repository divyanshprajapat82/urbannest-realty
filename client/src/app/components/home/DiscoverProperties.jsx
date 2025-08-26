"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function DiscoverProperties() {
    const [propertyType, setPropertyType] = useState([])
    const [staticPath, setStaticPath] = useState("")

    let bgColor = [
        "bg-[#FFEEEF]",
        "bg-[#FFF5E4]",
        "bg-[#F0F9FF]",
        "bg-[#EBF2E8]"
    ]

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getPropertyType = () => {
        axios.get(`${APIBASEURL}home/propertyType-view`)
            // axios.get(`http://localhost:8000/web/home/homeProduct-view`)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                setPropertyType(finalData.data)
                setStaticPath(finalData.staticPath)
            })
    }

    useEffect(() => {
        getPropertyType()
    }, [])
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-8 p-2 '>
                <h1 className='text-center text-[35px]'>Discover Properties</h1>
                <p className='text-center text-[17px] text-[#666] mt-1'>Surana Realtors, the best real estate broker in Jodhpur has established their name in this real estate game with classy and top-notch service and made themselves the finest real estate broker across the state.</p>
            </div>
            <div className='max-w-[1200px] mx-auto mt-4 p-2 '>
                <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap gap-1 gap-y-2'>
                    {propertyType.map((items, index) => (
                        <div className={`lg:w-[280px] md:w-[200px] w-[280px] h-[100%] ${bgColor[index % bgColor.length]}  group rounded-2xl overflow-hidden`}>
                            <Link href={`/property-listing/${items.slug}`}>
                                <div className='p-8 text-center'>
                                    <h1 className='lg:text-[30px] text-[20px]'>{items.propertyTypeName}</h1>
                                </div>
                                <img src={items.propertyTypeImage} className='w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-300' alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:max-w-[1200px] max-w-[700px] mx-auto mt-8 mb-8 bg-[#E2E8F0] rounded-4xl'>
                <div className='flex items-center'>
                    <div className='lg:w-[60%] w-full p-8'>
                        <h1 className='text-[35px]'>Property Dealer's in Jodhpur</h1>
                        <p className='text-[17px] text-[#666] mt-1'>Welcome to Surana Realtors, the leading real estate broker in Jodhpur. Here, we are always ready and conveniently motived to help you with any query and requirement about your real estate property urgency. Here at Surana Realtors, you will get your one-step stop for your every consulting service about real estate. We deal with property selling, buying, and even helping you if you’re not investing, you could just simply rent a property. We can make a deal for you with any leading real estate developers.</p>
                        <button className=' md:w-[200px] w-[100%] h-[50px] text-[18px] mt-4 rounded-[6px] bg-[#fff] text-[#000] cursor-pointer group'>
                            <span className='flex items-center justify-center gap-2'>
                                Post Property
                                <FaArrowRight className='text-[18px]' />
                            </span>
                        </button>
                    </div>
                    <div className='w-[600px] mr-8 lg:block hidden'>
                        <img src="/images/Frame20.webp" className='w-full' alt="" />
                    </div>
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto p-2 '>
                <h1 className='text-center text-[35px]'>What Makes Us the Preferred Choice?                </h1>
                <p className='text-center text-[18px] text-[#666] mt-1'>We being the top-rated property dealer and real estate broker in current times always determined to help you.</p>
            </div>
        </>
    )
}
