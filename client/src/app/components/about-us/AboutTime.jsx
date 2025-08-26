"use client"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { timeData1, timeData2, timeData3, timeData4 } from '@/app/assets/assets';
import axios from 'axios';

export default function AboutTime() {
    const [timeBtn, TimeBtn] = useState(1)
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

    let settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-8 p-2 '>
                <div>
                    <div>
                        <ul className='sm:flex grid grid-cols-2 gap-4'>
                            <li onClick={() => TimeBtn(1)} className={`sm:text-[18px] text-[16px] px-4 py-2 rounded-[10px] hover:bg-[#DD3846] hover:text-[#fff] ${timeBtn == 1 ? "bg-[#DD3846] text-[#fff]" : "text-[#000]"} transition-all duration-300 cursor-pointer`}>1987-1999</li>
                            <li onClick={() => TimeBtn(2)} className={`sm:text-[18px] text-[16px] px-4 py-2 rounded-[10px] hover:bg-[#DD3846] hover:text-[#fff] ${timeBtn == 2 ? "bg-[#DD3846] text-[#fff]" : "text-[#000]"} transition-all duration-300 cursor-pointer`}>2000-2010</li>
                            <li onClick={() => TimeBtn(3)} className={`sm:text-[18px] text-[16px] px-4 py-2 rounded-[10px] hover:bg-[#DD3846] hover:text-[#fff] ${timeBtn == 3 ? "bg-[#DD3846] text-[#fff]" : "text-[#000]"} transition-all duration-300 cursor-pointer`}>2011-2019</li>
                            <li onClick={() => TimeBtn(4)} className={`sm:text-[18px] text-[16px] px-4 py-2 rounded-[10px] hover:bg-[#DD3846] hover:text-[#fff] ${timeBtn == 4 ? "bg-[#DD3846] text-[#fff]" : "text-[#000]"} transition-all duration-300 cursor-pointer`}>2020-2021</li>
                        </ul>
                    </div>

                    <div className='border border-[#0000002a] p-8 mt-4 rounded-2xl'>
                        {timeBtn == 1 &&
                            <Slider {...settings}>
                                {timeData1.map((items, index) => (
                                    <div key={index} className='text-center p-4 cursor-grab'>
                                        <h1 className='text-[35px] text-[#444] font-semibold'>{items.time}</h1>
                                        <p className='text-[#666]'>{items.description}</p>
                                    </div>
                                ))}
                            </Slider>
                        }
                        {timeBtn == 2 &&
                            <Slider {...settings}>
                                {timeData2.map((items, index) => (
                                    <div key={index} className='text-center p-4 cursor-grab'>
                                        <h1 className='text-[35px] text-[#444] font-semibold'>{items.time}</h1>
                                        <p className='text-[#666]'>{items.description}</p>
                                    </div>
                                ))}
                            </Slider>
                        }
                        {timeBtn == 3 &&
                            <Slider {...settings}>
                                {timeData3.map((items, index) => (
                                    <div key={index} className='text-center p-4 cursor-grab'>
                                        <h1 className='text-[35px] text-[#444] font-semibold'>{items.time}</h1>
                                        <p className='text-[#666]'>{items.description}</p>
                                    </div>
                                ))}
                            </Slider>
                        }
                        {timeBtn == 4 &&
                            <Slider {...settings}>
                                {timeData4.map((items, index) => (
                                    <div key={index} className='text-center p-4 cursor-grab'>
                                        <h1 className='text-[35px] text-[#444] font-semibold'>{items.time}</h1>
                                        <p className='text-[#666]'>{items.description}</p>
                                    </div>
                                ))}
                            </Slider>
                        }
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='text-[30px]'>Jodhpur's No.l Real Estate Broker</h1>
                    <p className='text-[#666] mt-2'>Over the last three decades and three generations, our family is into the real estate brokerage business. Mn Dileep Surana is considered as a brand in the pool of realtors. In all these years, ahead of our business growth, revenues etc., we have focused on: -Customer Satisfaction, Creating prosperity, Legitimate deals. Our customers have got the best real estate company of Jodhpur and got tremendous rise in their real estate property in Jodhpur, purchased through us.</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-[30px]'>Our Coverage</h1>
                    <p className='text-[#666] mt-2'>We deal in the sale, purchase, leasing, renting, joint development agreements, development agreements of all sorts of properties (i.e., commercial, residential, industrial, agricultural, warehousing etc.</p>

                    <div className='my-8 flex justify-center gap-4'>
                        {propertyType.map((items, index) => (
                            <div key={index} className='px-6 py-3 bg-gradient-to-tl from-[#fde5e7] from-10% to-[#fff] to-40% flex items-center gap-4 border border-[#0000002a] hover:border-[#F2707B] shadow-md rounded-2xl cursor-pointer'>
                                <img src="/residentail-icon.svg" alt="" />
                                <h2 className='text-[20px]'>{items.propertyTypeName}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
