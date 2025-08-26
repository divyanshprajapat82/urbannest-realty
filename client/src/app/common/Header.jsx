"use client"
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { contextData } from '../context/MainContext';




export default function Header() {
    const [navBar, setNavBar] = useState(false)
    // const [navButton, setNavButton] = useState(1)
    let pathName = usePathname()
    let { accountSetting } = useContext(contextData)

    console.log(accountSetting);


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
            <div className='sticky top-0 z-[999]'>
                <div className='w-full sm:px-6 px-4 py-2.5 bg-[#fff] text-[#000] relative border-b border-[#00000014]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='lg:hidden block'>
                                <button onClick={() => setNavBar(true)} className='px-3 py-2 text-[#000] sm:text-[30px] text-[25px] rounded-[6px] flex items-center gap-2 cursor-pointer'> <FaBars /></button>
                            </div>
                            <div className='cursor-pointer'>
                                {/* <img src="/images/surana-logo.png" alt="surana-logo" /> */}
                                {accountSetting.map((items, index) => (

                                    <img src={items.LogoImage} className='sm:w-[160px] w-[120px]' alt="surana-logo" />
                                    // <img src="/images/Urbannes.png" className='sm:w-[160px] w-[120px]' alt="surana-logo" />
                                ))}
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <ul className='flex items-center gap-7'>
                                <Link href={"/"}> <li className={`cursor-pointer ${pathName == "/" && "bg-[#FFF5F6] text-[#E75C46]"}  px-2 py-1 rounded-[6px] hover:bg-[#FFF5F6] hover:text-[#E75C46] transition-all duration-300`}>Home</li></Link>
                                <Link href={"/about-us"}><li className={`cursor-pointer ${pathName == "/about-us" && "bg-[#FFF5F6] text-[#E75C46]"} px-2 py-1 rounded-[6px]  hover:bg-[#FFF5F6] hover:text-[#E75C46] transition-all duration-300`}>About us</li></Link>

                                <li className={`relative  ${(pathName == "/pricing" || pathName == "/real-estate-brokerage-service") && "bg-[#FFF5F6] text-[#E75C46]"} cursor-pointer px-2 py-1 rounded-[6px] group hover:bg-[#FFF5F6] flex items-center gap-2 hover:text-[#E75C46] transition-all duration-300`}>
                                    Over Services <IoIosArrowDown className='group-hover:rotate-180 transition-all duration-300' />
                                    <div className='absolute top-full hidden text-nowrap bg-[#fff] group-hover:block transition-all pt-4'>
                                        <ul className='p-2 border border-[#00000028] rounded-[6px]'>
                                            <Link href={"/pricing"}><li className={`${pathName == "/pricing" && "bg-[#FFF5F6] text-[#E75C46]"} px-3 py-1 mb-1 text-[#444] hover:bg-[#FFF5F6] hover:text-[#E75C46] rounded-[6px]`}>Real Estate Property Listing Service</li></Link>
                                            <Link href={"/real-estate-brokerage-service"}><li className={`${pathName == "/real-estate-brokerage-service" && "bg-[#FFF5F6] text-[#E75C46]"} px-3 py-1 text-[#444] hover:bg-[#FFF5F6] hover:text-[#E75C46] rounded-[6px]`}>Real Estate Brokerage Service</li></Link>
                                        </ul>
                                    </div>
                                </li>

                                <li className={`relative  ${(pathName == "/property-listing/residential" || pathName == "/property-listing/commercial" || pathName == "/property-listing/industrial" || pathName == "/property-listing/agricultural") && "bg-[#FFF5F6] text-[#E75C46]"} cursor-pointer px-2 py-1 rounded-[6px] group hover:bg-[#FFF5F6] flex items-center gap-2 hover:text-[#E75C46] transition-all duration-300`}>
                                    Properties For <IoIosArrowDown className='group-hover:rotate-180 transition-all duration-300' />
                                    <div className='absolute top-full hidden text-nowrap bg-[#fff] group-hover:block transition-all pt-4'>
                                        <ul className='p-2 border border-[#00000028] rounded-[6px]'>
                                            {/* <Link href={"/pricing"}><li className={`${pathName == "/pricing" && "bg-[#FFF5F6] text-[#E75C46]"} px-3 py-1 mb-1 text-[#444] hover:bg-[#FFF5F6] hover:text-[#E75C46] rounded-[6px]`}>Real Estate Property Listing Service</li></Link>
                                            <Link href={"/real-estate-brokerage-service"}><li className={`${pathName == "/real-estate-brokerage-service" && "bg-[#FFF5F6] text-[#E75C46]"} px-3 py-1 text-[#444] hover:bg-[#FFF5F6] hover:text-[#E75C46] rounded-[6px]`}>Real Estate Brokerage Service</li></Link> */}

                                            {propertyType.map((items, index) => (
                                                <Link key={index} href={`/property-listing/${items.slug}`}><li className={`${pathName == `/property-listing/${items.slug}` && "bg-[#FFF5F6] text-[#E75C46]"} px-3 py-1 mb-1 text-[#444] hover:bg-[#FFF5F6] hover:text-[#E75C46] rounded-[6px]`}>{items.propertyTypeName}</li></Link>
                                            ))}
                                        </ul>
                                    </div></li>

                                {/* <li className='cursor-pointer px-2 py-1 rounded-[6px] flex items-center gap-2 group hover:bg-[#FFF5F6] hover:text-[#E75C46] transition-all duration-300'>Properties For <IoIosArrowDown className='group-hover:rotate-180 transition-all duration-300' /></li> */}
                                <Link href={"/listed-properties"}> <li className={`${pathName == "/listed-properties" && "bg-[#FFF5F6] text-[#E75C46]"} cursor-pointer px-2 py-1 rounded-[6px] hover:bg-[#FFF5F6] hover:text-[#E75C46] transition-all duration-300`}>Listed Properties</li> </Link>
                                <Link href={"/contect-us"}> <li className={`${pathName == "/contect-us" && "bg-[#FFF5F6] text-[#E75C46]"} cursor-pointer px-2 py-1 rounded-[6px] hover:bg-[#FFF5F6] hover:text-[#E75C46] transition-all duration-300`}>Contact us</li> </Link>
                                <Link href={"/property-post"}><button className='px-6 py-2 bg-[#2A2354] text-[#fff] rounded-[6px] flex items-center gap-2 cursor-pointer'>Post property <FaArrowRightLong /></button> </Link>
                            </ul>
                        </div>
                        <div className='lg:hidden block'>
                            <button className='sm:px-6 px-4 py-2 bg-[#2A2354] sm:text-[16px] text-[14px] text-[#fff] rounded-[6px] flex items-center gap-2 cursor-pointer'>Post property <FaArrowRightLong /></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`fixed top-0 ${navBar ? "left-0" : "left-[-5000px]"} transition-all duration-500 w-full h-full z-[9999]`}>
                <div className={`${navBar ? "block" : "hidden"}`}>
                    <div onClick={() => setNavBar(false)} className='fixed top-0 left-0 w-full h-full bg-[#0000002f] z-[-9999]'></div>
                </div>
                <div className='max-w-[300px] h-full bg-[#fff] p-4'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='cursor-pointer'>

                                {accountSetting.map((items, index) => (
                                    <img src={items.LogoImage} width={100} alt="surana-logo" />
                                    // <img src={items.LogoImage} className='sm:w-[160px] w-[120px]' alt="surana-logo" />
                                    // <img src="/images/Urbannes.png" className='sm:w-[160px] w-[120px]' alt="surana-logo" />
                                ))}
                            </div>
                            <div className=''>
                                <button onClick={() => setNavBar(false)} className='px-3 py-2 text-[#000] text-[25px] rounded-[6px] flex items-center gap-2 cursor-pointer'> <IoClose /></button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <ul className='flex flex-col gap-5 text-[#000]'>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] '>About us</li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] flex items-center justify-between gap-2 '>Over Services <MdOutlineKeyboardArrowRight /></li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] flex items-center justify-between gap-2 '>Properties For <MdOutlineKeyboardArrowRight /></li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] '>Listed Properties</li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] '>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
