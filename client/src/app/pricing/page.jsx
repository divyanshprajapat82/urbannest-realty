import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import HowSold from '../components/pricing/HowSold'
import Pricing from '../components/pricing/Pricing'
import PropertyOwner from '../components/PropertyOwner'
import JodhpurList from '../components/home/JodhpurList'

export default function page() {
    return (
        <>
            <div className="bg-[#fff] text-[#000]">
            <div className='max-w-[1200px] mx-auto p-2'>
                <p className='flex items-center text-[15px] text-[#777]'>
                    <Link href={"/"} >Home</Link>
                    <MdOutlineKeyboardArrowRight className='text-[18px]' />
                    Real Estate Property Listing Service
                </p>
                <div className='mt-5'>
                    <h1 className='text-[30px]'>Real Estate Property Listing Service</h1>
                    <p className='text-[17px] text-[#666] mt-2'>We are the 1st Local property selling website, Every property listed with us is genuine and verified. All the desired information Required for buying property is provided here with one click you can get your dream property.</p>
                </div>
            </div>

            <HowSold />
            <Pricing />
            <PropertyOwner />
            <JodhpurList />
                </div>
        </>
    )
}
