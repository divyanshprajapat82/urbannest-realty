"use client"
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function page() {
    let { slug } = useParams()

    const [filterProperties, setFilterProperties] = useState([])
    const [staticPath, setStaticPath] = useState([])
    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    const [imgTarget, setImgTarget] = useState()


    if (slug) {
        useEffect(() => {


            // let getPropertyType = () => {
            axios.get(`${APIBASEURL}global/property-details/${slug}`)
                .then((res) => res.data)
                .then((finalData) => {
                    console.log(finalData);
                    setFilterProperties(finalData.data)
                    console.log(finalData.data[0].locality.name);
                    setImgTarget(finalData.data[0].singleImage)
                    setStaticPath(finalData.staticPath)
                })
            // }
        }, [])
    }

    return (
        <>
            <div className='bg-[#F8F8FC] text-[#000]'>
                <div className='max-w-[1200px] mx-auto p-2 '>
                    {filterProperties.map((items, index) => (
                        <div>
                            <div>
                                <p className='flex items-center text-[15px] text-[#555]'>
                                    <Link href={"/"} >Home</Link>
                                    <MdOutlineKeyboardArrowRight className='text-[18px]' /> {items.propertyTitle}
                                </p>
                                {/* <p className='flex items-center gap-1'><CiLocationOn className='mb-0.5' />{items.locality.name}</p> */}
                                {/* <p>{items.name}</p> */}

                                <div className='w-full mt-2'>
                                    <div>
                                        <h1 className='sm:text-[25px] text-[22px] text-[#666]'>{items.propertyTitle}</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[15px] text-[#666] flex items-center gap-1'><CiLocationOn className='mb-0.5' /> {items.locality.name}</p>
                                        <p className='text-[15px] text-[#666]'>Price <span className='sm:text-[30px] text-[25px] text-[#DD3846] font-bold ml-1'>₹{items.price} cr</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 flex md:flex-row flex-col gap-6'>
                                <div className='lg:w-[70%] md:w-[60%] w-[100%]'>
                                    <div className='bg-[#fff] rounded-2xl overflow-hidden'>
                                        <div>
                                            <img src={imgTarget} alt="" className='w-full' />
                                            {items.multipleImages.length > 0 &&
                                                <div className='flex gap-2 mt-1'>
                                                    <img src={items.singleImage} onClick={() => setImgTarget(items.singleImage)} className={`${imgTarget == items.singleImage && "border-[2px] border-[#DD3846]"} hover:border-[2px] border-[#DD3846] cursor-pointer`} width={100} alt="" />
                                                    {items.multipleImages.map((imgs, index) => (
                                                        <img src={imgs} onClick={() => setImgTarget(imgs)} width={100} className={`${imgTarget == imgs && "border-[2px] border-[#DD3846]"} hover:border-[2px] border-[#DD3846] cursor-pointer`} alt="" />
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                        <div className='grid grid-cols-2 p-4'>
                                            <div className='text-center'>
                                                <p className='text-[#666]'>Size</p>
                                                <h2>{items.area} Sq yardss</h2>
                                            </div>
                                            <div className='text-center'>
                                                <p className='text-[#666]'>Exact Address</p>
                                                <h2>{items.exactAddress}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-[#fff] flex rounded-2xl overflow-hidden p-4 mt-4'>
                                        <div className='text-center'>
                                            <p className='text-[#222]'>Property type</p>
                                            <h2 className='bg-[#EAE9EE] text-[15px] text-[#444] rounded-2xl px-2 py-1 mt-2'>{items.propertyType.propertyTypeName} </h2>
                                        </div>
                                    </div>
                                    <div className='bg-[#fff] flex rounded-2xl overflow-hidden p-4 mt-4'>
                                        <div className='w-full'>
                                            <div className='flex justify-between items-center'>
                                                <p className='text-[20px] text-[#222]'>Property Location</p>
                                                <button className=''></button>
                                            </div>
                                            <p className='text-[#666] mt-2'>{items.locality.name}</p>
                                            {/* <h2 className='bg-[#EAE9EE] text-[15px] text-[#444] rounded-2xl px-2 py-1 mt-2'>{items.propertyType.propertyTypeName} </h2> */}
                                            <iframe src={items.locationMap}
                                                // height="450" 
                                                className='w-full h-[400px] mt-2'
                                                style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>

                                <div className='lg:w-[30%] md:w-[40%] w-[100%]'>
                                    <div className='sticky top-25'>
                                        <form action="" className='bg-[#fff] border border-[#00000017] rounded-2xl p-6'>
                                            <h1 className='text-[20px] text-[#444] mb-4'>Are you interested?</h1>
                                            <div className='flex gap-4 mb-4'>
                                                <h2>I am</h2>
                                                <div>
                                                    <input type="radio" checked id='buyer' name='iam' value="Buyer" className='mr-1 bg-[#FDC5CA] accent-[#DD3846] cursor-pointer' />
                                                    <label htmlFor="buyer" className='cursor-pointer text-[17px] text-[#444]'>Buyer</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id='seller' name='iam' value="seller" className='mr-1 bg-[#FDC5CA] accent-[#DD3846] cursor-pointer' />
                                                    <label htmlFor="seller" className='cursor-pointer text-[17px] text-[#444]'>Seller</label>
                                                </div>
                                            </div>
                                            <input type="text" className='w-full p-2 border-b border-[#00000043] outline-none' placeholder='Your name' />
                                            <div className='flex items-center border-b border-[#00000043] px-2 my-4'>
                                                <p>+91</p>
                                                <input type="tel" className='w-full p-2  outline-none ' />
                                            </div>
                                            <input type="email" className='w-full p-2 border-b border-[#00000043] outline-none' placeholder='Your email' />
                                            <button className='w-full h-[50px] text-[18px] mt-5 rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                                                <span className='flex items-center justify-center gap-1'>
                                                    Search
                                                    <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />
                                                </span>
                                            </button>
                                        </form>
                                        <div className='bg-[#fff] border border-[#00000017] rounded-2xl p-6'>
                                            {filterProperties.map((items, index) => (
                                                <a href={`tel:${items.number}`}>
                                                    <button className='w-full text-[20px] flex items-center justify-center gap-2'>
                                                        <span className='text-[#569E53] p-1 border border-[#569E53] rounded-full cursor-pointer'>
                                                            <IoCall />
                                                        </span>
                                                        {items.number}
                                                    </button>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}
