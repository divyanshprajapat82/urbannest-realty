import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import About from '../components/home/About'
import AboutTime from '../components/about-us/AboutTime'
import JodhpurList from '../components/home/JodhpurList'

export default function page() {
  return (
    <>
      <div className="bg-[#fff] text-[#000]">
      <div className='max-w-[1200px] mx-auto p-2 '>
        <p className='flex items-center text-[15px] text-[#555]'>
          <Link href={"/"} >Home</Link>
          <MdOutlineKeyboardArrowRight className='text-[18px]' /> About Us
        </p>
        <div className='mt-2'>
          <h1 className='text-[35px]'>About Us</h1>
          <p className='text-[17px] text-[#666] mt-5'>Welcome to Surana Realtors, the leading real estate broker in Jodhpur. Here, we are always ready and conveniently motived to help you with any query and requirement about your real estate property urgency. Here at Surana Realtors, you will get your one-step stop for your every consulting service about real estate. We deal with property selling, buying, and even helping you if you’re not investing, you could just simply rent a property. We can make a deal for you with any leading real estate developers.</p>
        </div>
      </div>

      <About />
      <AboutTime />
      <JodhpurList />
        </div>
    </>
  )
}
