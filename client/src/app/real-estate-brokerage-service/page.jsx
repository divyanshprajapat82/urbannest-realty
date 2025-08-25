"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { howItWork } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa6'
import JodhpurList from '../components/home/JodhpurList'

export default function page() {
    const [propertyType, setPropertyType] = useState([])

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL


    let getPropertyType = () => {
        axios.get(`${APIBASEURL}home/propertyType-view`)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                setPropertyType(finalData.data)
            })
    }

    useEffect(() => {
        getPropertyType()
    }, [])
    return (
        <>
            <div className="bg-[#fff] text-[#000]">
            <div className='bg-[#F8F8FC] pt-4 pb-8'>
                <div className='max-w-[1200px] mx-auto p-2'>
                    <p className='flex items-center text-[15px] text-[#777]'>
                        <Link href={"/"} >Home</Link>
                        <MdOutlineKeyboardArrowRight className='text-[18px]' />
                        Jodhpur's No.l Real Estate Broker
                    </p>
                    <div className='mt-5'>
                        <h1 className='text-[30px]'>Jodhpur's No.l Real Estate Broker</h1>
                        <p className='text-[17px] text-[#666] mt-2'>Over the last three decades and three generations, our family is into the real estate brokerage business. Mn Dileep Surana is considered as a brand in the pool of realtors. In all these years, ahead of our business growth, revenues etc., we have focused on: -Customer Satisfaction, Creating prosperity, Legitimate deals. Our customers have got the best real estate company of Jodhpur and got tremendous rise in their real estate property in Jodhpur, purchased through us.</p>
                    </div>


                </div>
            </div>
            <div className='max-w-[1200px] mx-auto mt-8 p-2'>
                <h1 className='text-center text-[30px]'>Our Coverage</h1>
                <p className='text-center text-[#666] mt-2'>We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties i.e.</p>

                <div className='my-8 flex justify-center gap-4'>
                    {propertyType.map((items, index) => (
                        <div key={index} className='px-6 py-3 bg-gradient-to-tl from-[#fde5e7] from-10% to-[#fff] to-40% flex items-center gap-4 border border-[#0000002a] hover:border-[#F2707B] shadow-md rounded-2xl cursor-pointer'>
                            <img src="/residentail-icon.svg" alt="" />
                            <h2 className='text-[20px]'>{items.propertyTypeName}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto mt-8 p-2'>
                <h1 className='text-center text-[30px]'>How It Works – Step by Step</h1>
                <p className='text-center text-[#666] mt-2'>We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties (i.e., commercial, residential, industrial, agricultural, warehousing etc.</p>

                <div className='my-8 grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {howItWork.map((items, index) => (
                        <div key={index} className='px-6 py-6 w-full bg-gradient-to-tl from-[#fde5e7] from-10% to-[#fff] to-40% flex items-center justify-between gap-4 border border-[#0000002a] hover:border-[#F2707B] shadow-md rounded-2xl cursor-pointer'>
                            <div className=''>
                                <div className='w-10 h-10 mb-4 text-[20px] text-[#F2707B] flex justify-center items-center bg-[#FFF5F6] border border-[#F2707B] rounded-full'>
                                    {items.no}
                                </div>
                                <h2 className='text-[20px]'>{items.title}</h2>
                                <p className='text-[#666]'>{items.description}</p>
                            </div>
                            <img src={items.img} width={120} alt="" />
                        </div>
                    ))}
                </div>

                <p className='text-center text-[#666] mt-8'>We have been the most trusted realtor for the people of Jodhpur. Like family doctors, family solicitor, we have been family realtors for our client's families and generations.</p>

                <div className='w-full flex justify-center my-8'>
                    <button className='w-[200px] h-[45px] text-[18px] rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                        <span className='flex items-center justify-center gap-1'>
                            Post Property
                            <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />

                        </span>
                    </button>
                </div>
            </div>

            <JodhpurList />
                </div>
        </>
    )
}
