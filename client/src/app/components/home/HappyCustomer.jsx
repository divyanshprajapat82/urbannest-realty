"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { TbPhoneCall } from "react-icons/tb";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HappyCustomer() {

    const [happyCustomer, setHappyCustomer] = useState([])
    const [happyCustomerImg, setHappyCustomerImg] = useState([])
    const [staticPath, setStaticPath] = useState("")
    const [imageClick, setImageClick] = useState("")


    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getHappyCustomer = () => {
        axios.get(`${APIBASEURL}home/happyCustomer-view`, {
            // params: {
            //     imageClick
            // }
            params: { imageClick }
        })
            .then((res) => res.data)
            .then((finalData) => {
                setHappyCustomer(finalData.data)
                setStaticPath(finalData.staticPath)
            })
    }

    let getHappyCustomerImg = () => {
        axios.get(`${APIBASEURL}home/happyCustomerImg-view`)
            .then((res) => res.data)
            .then((finalData) => {
                setHappyCustomerImg(finalData.data)
                setStaticPath(finalData.staticPath)
            })
    }

    useEffect(() => {
        getHappyCustomerImg()
    }, [])

    useEffect(() => {
        getHappyCustomer()
    }, [imageClick])

    let settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-[1200px] mx-auto p-2 '>
                <h1 className='text-center text-[35px]'>Happy Customer</h1>
            </div>
            {/* <div className="logoSliderWrapper">
                <div className="homeLogoSlide">
                    <img src="/images/Kalpa.webp" alt="Logo 1" />
                    <img src="/images/Darshan.webp" alt="Logo 2" />
                    <img src="/images/ashapurna.webp" alt="Logo 3" />
                    <img src="/images/mangaldeep.webp" alt="Logo 4" />
                    <img src="/images/ola.webp" alt="Logo 5" />
                    <img src="/images/metro.webp" alt="Logo 6" />
                    <img src="/images/Kalpa.webp" alt="Logo 1" />
                    <img src="/images/Darshan.webp" alt="Logo 2" />
                    <img src="/images/ashapurna.webp" alt="Logo 3" />
                    <img src="/images/mangaldeep.webp" alt="Logo 4" />
                    <img src="/images/ola.webp" alt="Logo 5" />
                    <img src="/images/metro.webp" alt="Logo 6" />
                </div>
            </div> */}

            <div className='lg:max-w-[1100px] md:max-w-[800px] max-w-[400px] mx-auto mt-3 p-6 bg-[#FFF7E9] rounded-2xl'>
                <div className='flex items-center justify-between md:flex-row flex-col gap-2'>
                    <div className='flex items-center  md:flex-row flex-col gap-2'>
                        <img src="/images/house_illustration.webp" alt="" />
                        <div className='md:block hidden'>
                            <h1 className='lg:text-[25px] text-[22px]'>Let’s Get In Touch.</h1>
                            <p className='text-[#666]'>Reach Out to Us for Collaboration & Support!</p>
                        </div>
                        <div className='md:hidden block text-center'>
                            <h1 className='lg:text-[25px] text-[22px]'>Let’s Get In Touch.</h1>
                            <p className='text-[#666] mt-2'>Reach Out to Us for Collaboration & Support!</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='lg:block hidden'>
                            <h1 className='lg:text-[25px] text-[22px] text-[#000] flex items-center gap-2 cursor-pointer'><TbPhoneCall className='text-[30px]' /> 91-9414187100</h1>
                        </div>
                        <button className=' w-[180px] h-[50px] text-[18px] rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                            <span className='flex items-center justify-center gap-1'>
                                Contect Us
                                <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />

                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto mt-6 mb-8 p-2 '>
                <h1 className='text-[35px]'>Our happy customers say about us</h1>
                <p className='text-[17px] text-[#666] mt-1 mb-4'>Their Words, Our Work — Surana Realstore Builds Trust.</p>

                <div className='relative'>
                    {happyCustomer.map((items, index) => (
                        <div key={index} className='flex gap-8 mt-8'>
                            <div className='md:block hidden'>
                                <div className='relative w-[300px] h-[300px] border border-[#0000003e] shadow-md bg-[#fff] rounded-2xl overflow-hidden'>
                                    <img src={items.customerImage} className='h-full' alt="" />
                                    <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#000000] to-transparent'>
                                        <h2 className='absolute bottom-5 left-5 text-[20px] text-[#fff]'>
                                            {items.customersName}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h1 className='lg:text-[26px] md:text-[22px] sm:text-[20px] text-[18px] text-[#444] line-clamp-5'>{items.customersMessage}</h1>
                            </div>
                        </div>
                    ))}
                    {/* <div className='flex gap-10 absolute bottom-0 left-[330px]'> */}
                    {/* <div className=' bottom-0 ml-[45px] mt-[-100px]'> */}
                    {/* <div className=' bottom-0 ml-[-230px] mt-[-100px]'> */}
                    {/* <div className='relative left-[-140px] bottom-0  mt-[-100px]'> */}
                    <div className='flex justify-end'>
                        <div className='lg:w-[70%] md:w-[60%] w-[100%] bottom-0 text-ri md:mt-[-100px] mt-2 overflow-hidden'>
                            <Slider {...settings} key={happyCustomerImg.length}>
                                {happyCustomerImg.map((items, index) => (
                                    <div>
                                        <div key={index} onClick={() => setImageClick(items.customerImage)} className='w-[100px] h-[100px] bg-[#fff] border border-[#0000003e] shadow-md rounded-2xl overflow-hidden cursor-pointer'>
                                            <img src={items.customerImage} className='h-full' alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* <div className='w-[100px] h-[100px] bg-[#fff] rounded-2xl overflow-hidden cursor-pointer'> */}
                {/* <img src="/images/HC2.webp" className='h-full' alt="" /> */}
                {/* </div> */}
                {/* <div className='w-[100px] h-[100px] bg-[#fff] rounded-2xl overflow-hidden cursor-pointer'> */}
                {/* <img src="/images/HC3.webp" className='h-full' alt="" /> */}
                {/* </div> */}

                {/* <div className='flex gap-8 mt-4'>
                    <div>
                        <div className='w-[300px] h-[300px] bg-[#fff] rounded-2xl overflow-hidden'>
                            <img src="/images/HC2.webp" className='h-full' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-[26px] text-[#444]'>When you work with Surana Realtors, you need not worry about anything. It’s a one-stop solution for all your real estate related services. Their expertise, ethics and passion to work covers every aspect of your requirement. </h1>

                        <div className='flex gap-10'>
                            <div className='w-[100px] h-[100px] bg-[#fff] rounded-2xl overflow-hidden cursor-pointer'>
                                <img src="/images/HC1.webp" className='h-full' alt="" />
                            </div>
                            <div className='w-[100px] h-[100px] bg-[#fff] rounded-2xl overflow-hidden cursor-pointer'>
                                <img src="/images/HC2.webp" className='h-full' alt="" />
                            </div>
                            <div className='w-[100px] h-[100px] bg-[#fff] rounded-2xl overflow-hidden cursor-pointer'>
                                <img src="/images/HC3.webp" className='h-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
