"use client"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
import Link from 'next/link';




export default function ImpactfulProperties() {
    const [homeProduct, setHomeProduct] = useState([])
    const [staticPath, setStaticPath] = useState("")

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getHomeProduct = () => {
        axios.get(`${APIBASEURL}home/homeProduct-view`)
            // axios.get(`http://localhost:8000/web/home/homeProduct-view`)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData);
                setHomeProduct(finalData.data)
                setStaticPath(finalData.staticPath)
            })
    }

    useEffect(() => {
        getHomeProduct()
    }, [])

    let settings = {
        dots: true,
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
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-[1200px] mx-auto p-2 '>
                <h1 className='text-center text-[35px]'>Our Most Impactful Properties</h1>
                <p className='text-center text-[18px] text-[#666] mt-1'>Driving Change Through Innovation and Excellence.</p>

                <div className='mt-4 overflow-hidden'>
                    <Slider {...settings}>
                        {homeProduct.map((items, index) => (
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
                    </Slider>
                </div>
            </div>
        </>
    )
}
