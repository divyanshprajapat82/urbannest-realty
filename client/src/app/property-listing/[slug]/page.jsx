"use client"
import JodhpurList from '@/app/components/home/JodhpurList';
import PropertyOwner from '@/app/components/PropertyOwner';
import { contextData } from '@/app/context/MainContext';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa6';

export default function page() {
    // let { property, pStaticPath } = useContext(contextData)
    const [filterProperties, setFilterProperties] = useState([])
    const [staticPath, setStaticPath] = useState([])

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    // console.log(accountSetting);
    let { slug } = useParams()
    console.log(slug);

    if (slug) {
        useEffect(() => {


            // let getPropertyType = () => {
            axios.get(`${APIBASEURL}global/property/${slug}`)
                .then((res) => res.data)
                .then((finalData) => {
                    console.log(finalData);
                    setFilterProperties(finalData.data)
                    setStaticPath(finalData.staticPath)
                })
            // }
        }, [])
    }


    // useEffect(() => {
    //     getPropertyType()
    // }, [])
    return (
        <>
            {/* <div className='sticky top-[85px] bg-[#DD3846] p-2'>
            </div> */}
            <div className="bg-[#fff] text-[#000]">
            <div className='max-w-[1200px] mx-auto p-2 '>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                    {filterProperties.map((items, index) => (
                        <div key={index} className='p-2'>
                            <div className=' overflow-hidden rounded-2xl border border-[#00000048]'>
                                <div className=' flex justify-center h-[200px] object-cover overflow-hidden'>
                                    {/* <img src="/images/Screenshot20131955.webp" alt="" /> */}
                                    <div className='relative object-cover w-full'>
                                        <img src={items.singleImage} className='w-full h-full object-cover' alt="" />
                                        <div className='absolute top-2 right-2'>
                                            <div className='flex items-center rounded-[5px] overflow-hidden'>
                                                <div className='px-2 py-1.5 text-[12px] font-semibold bg-[#DD3846] text-[#fff]'>{items.propertyType.propertyTypeName}</div>
                                                <div className='px-2 py-1.5 text-[12px] font-semibold bg-[#120F23] text-[#fff]'>FOR SALE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-col items-start'>
                                    <h2 className='text-[18px] font-semibold'>{items.propertyTitle}</h2>
                                    <p className='flex items-center gap-1'><CiLocationOn className='mb-0.5' />{items.locality.name}</p>
                                    <div className='px-4 py-1 mt-8 text-[15px] bg-[#E9E9EA] text-[#000000b1] rounded-[5px]'>
                                        Area:{items.area} Sqyards
                                    </div>
                                    <div className='flex  flex-wrap justify-between items-center w-full mt-2'>
                                        <p>Price <span className='text-[30px] text-[#DD3846]'>₹ {items.price} cr</span></p>
                                        <Link href={`/property/${items.slug}`}>
                                            <button className=' md:w-[150px] w-[100%] h-[40px] text-[17px] rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                                                <span className='flex items-center justify-center gap-1'>
                                                    More Details
                                                    <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />

                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <PropertyOwner />
            <JodhpurList />
                </div>
        </>
    )
}
