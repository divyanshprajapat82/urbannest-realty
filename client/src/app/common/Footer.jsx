"use client"
import React, { useContext } from 'react'
import { contextData } from '../context/MainContext'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

export default function Footer() {
    let { accountSetting } = useContext(contextData)

    console.log(accountSetting);

    return (
        <div className='bg-[#DD3846] px-4 py-10'>
            <div className='max-w-[1100px] m-auto'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-[#fff] gap-8'>
                    <ul className='pr-5'>
                        <h4 className='text-[18px] mb-4'>About Surana Realtors</h4>
                        {accountSetting.map((items, index) => (
                            <p className='text-justify'>{items.WebsiteDescription}</p>
                        ))}
                        {accountSetting.map((items, index) => (
                            <ul className='flex gap-2 mt-2'>
                                <a href={`${items.FacebookLink}`} target='_blank'><li className='border rounded-full p-1.5 text-[#fff] hover:text-[#DD3846] hover:bg-[#fff] transition-all duration-300'><FaFacebookF /></li></a>
                                <a href={`${items.InstagramLink}`} target='_blank'><li className='border rounded-full p-1.5 text-[#fff] hover:text-[#DD3846] hover:bg-[#fff] transition-all duration-300'><FaInstagram /></li></a>
                                <a href={`${items.LinkedInLink}`} target='_blank'><li className='border rounded-full p-1.5 text-[#fff] hover:text-[#DD3846] hover:bg-[#fff] transition-all duration-300'><FaLinkedinIn /></li></a>
                                <a href={`${items.TwitterLink}`} target='_blank'><li className='border rounded-full p-1.5 text-[#fff] hover:text-[#DD3846] hover:bg-[#fff] transition-all duration-300'><FaTwitter /></li></a>
                            </ul>
                        ))}
                    </ul>
                    <ul className='sm:ml-10 ml-0'>
                        <h4 className='text-[18px] mb-4'>Property For</h4>
                        <div className='flex flex-col gap-2'>
                            <li className='cursor-pointer'>Residential</li>
                            <li className='cursor-pointer'>Commercial</li>
                            <li className='cursor-pointer'>Industrial</li>
                            <li className='cursor-pointer'>Agricultural</li>
                        </div>
                    </ul>
                    <ul>
                        <h4 className='text-[18px] mb-4'>Quick Link</h4>
                        <div className='flex flex-col gap-2'>
                            <li className='cursor-pointer'>Rent A Property</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Terms & Conditions</li>
                            <li className='cursor-pointer'>Privacy Policy</li>
                        </div>
                    </ul>
                    <ul>
                        <h4 className='text-[18px] mb-4'>Newsletter</h4>
                        <input type="text" className='p-3 w-full bg-[#fff] text-[#000] outline-none rounded-[8px]' placeholder='Enter Your email address' />
                        <button className='w-full bg-[#2A2354] p-3 rounded-[8px] mt-2'>Subscribe Now</button>
                    </ul>
                </div>
                <hr className='border-t border-[#ffffff48] mt-8' />

                <h2 className='text-[#fff] text-center mt-8'>© Surana Realtors - All rights reserved | Design and Developed by:WsCube Tech</h2>
            </div>
        </div >
    )
}
