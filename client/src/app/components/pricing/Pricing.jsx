"use client"
import { pricing } from '@/app/assets/assets'
import React from 'react'
import CountUp from 'react-countup'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function Pricing() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto mt-8 p-2'>
        <h1 className='text-center text-[25px]'>Pricing Plans</h1>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-4'>
          {pricing.map((items, index) => (
            <div key={index} className='border border-[#00000021] bg-[#fff] p-8 group rounded-2xl'>
              <h2 className='text-[#DD3846] text-[40px] font-semibold'>
                <CountUp
                  end={items.price}
                  duration={1.5}
                  enableScrollSpy
                />
                +</h2>
              <p className='mt-[-8px] text-[#444]'>Per Property</p>

              <div className='bg-[#EAE9EE] px-2 py-4 text-[17px] mt-6 rounded-2xl text-center'>
                {items.forPrice}
              </div>

              <ul className='mt-6 flex flex-col gap-4'>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> 6 months listing on website</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> Clientele database integration</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> Online and offline marketing</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> Channel partner optimization</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> 10 days property on featured home page</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> Direct customer integration</li>
                <li className='flex items-center gap-2 text-[16px]'><IoMdCheckmarkCircleOutline /> Property pricing and valuation</li>
              </ul>
            </div>
          ))}
        </div>

        <div className='bg-[#EAE9EE] px-4 py-6 text-[15px] mt-6 rounded-2xl text-center'>
          <ul className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2'>
            <li>Bank Account Number - 777705210303</li>
            <li>IFSC Code - ICIC0000167</li>
            <li>Name - Surana Realtors Private Limited</li>
            <li>UPI ID - 7597053111@ICICI</li>
          </ul>
        </div>
      </div>
    </>
  )
}
