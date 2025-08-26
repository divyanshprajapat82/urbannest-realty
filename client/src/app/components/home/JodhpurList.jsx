"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function JodhpurList() {

    const [jodhpurLocalities, setJodhpurLocalities] = useState([])

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getJodhpurLocalities = () => {
        axios.get(`${APIBASEURL}home/jodhpurLocalities-view`)
            .then((res) => res.data)
            .then((finalData) => {
                setJodhpurLocalities(finalData.data)
                // console.log(finalData.data);

            })
    }

    useEffect(() => {
        getJodhpurLocalities()
    }, [])
    return (
        <>
            <div className='bg-[#FFF5F6] px-4 py-8 border-t border-[#ec12123a]'>
                <div className='max-w-[1100px] m-auto'>
                    <h1 className='text-center text-[35px]'>List of Localities in Jodhpur</h1>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-8 text-[18px] text-[#555]'>
                        {jodhpurLocalities.map((items, index) => (
                            <h2 className='text-[#555] hover:text-[#dd3846a9] transition-all duration-300 cursor-pointer'>{items.name}, {items.city}</h2>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
