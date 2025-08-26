"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { contextData } from '../context/MainContext'
// import { toast, ToastContainer } from 'react-toastify'


export default function page() {
  let { accountSetting } = useContext(contextData)


  const [contactUsData, setContactUsData] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactMessage: "",
  })

  let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL



  let contactUsHandler = (e) => {
    e.preventDefault()

    // console.log(contactUsData);

    axios.post(`${APIBASEURL}contact-us/insert`, contactUsData)
      .then((res) => res.data)
      .then((finalData) => {
      })
  }


  return (
    <>
      {/* <ToastContainer /> */}

      <div className='bg-[#F8F8FC] text-[#000]'>
        <div className='max-w-[1200px] mx-auto p-2 '>
          <p className='flex items-center text-[15px] text-[#555]'>
            <Link href={"/"} >Home</Link>
            <MdOutlineKeyboardArrowRight className='text-[18px]' /> Contact Us
          </p>
          <div className='mt-2'>
            <h1 className='text-[35px]'>Contact Us</h1>
          </div>

          <div className='mt-4 bg-[#fff] px-4 py-8 rounded-2xl'>
            <div className='text-center'>
              <h1 className='text-[30px]'>Get in touch with us & let’s talk</h1>
              {accountSetting.map((items, index) => (
                <p className='text-[17px] text-[#666] mt-1'>You can reach us anytime <a href="" className='text-[#324CF6]'> {items.Email} </a></p>
              ))}
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
              <div>
                <div>
                  <h1 className='text-[25px]'>Address</h1>
                  {/* <p className='text-[16px] text-[#666] mt-1'>
                  2nd floor, D S Tower, 4th, Chopasani Rd, opposite old Kohinoor, Jodhpur, Rajasthan 342001
                  </p> */}
                  {accountSetting.map((items, index) => (
                    <p className='text-[16px] text-[#666] mt-1'>
                      {/* 2nd floor, D S Tower, 4th, Chopasani Rd, opposite old Kohinoor, Jodhpur, Rajasthan 342001 */}
                      {/* <p className='text-justify'>{items.WebsiteDescription}</p> */}
                      {items.Address}
                    </p>
                  ))}
                </div>
                <div className='mt-4'>

                  <h1 className='text-[25px]'>Contact No:</h1>
                  {accountSetting.map((items, index) => (
                    <p className='text-[16px] text-[#666] mt-1'>
                      {/* +91-75970-53111
                      , +91- 94141-87100 */}
                      {items.Contact}
                    </p>
                  ))}
                </div>
                <div className='mt-4 over'>
                  {accountSetting.map((items, index) => (
                    <iframe src={items.Map} className='w-full border-0 rounded-2xl' height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  ))}
                </div>
              </div>
              <div>
                <form onSubmit={contactUsHandler} action="">
                  <h1 className='text-[25px] mb-4'>Inquiry Nows</h1>
                  <div className='flex flex-col mb-6'>
                    <label className='text-[18px] text-[#000000a9] mb-2'>Name</label>
                    <input type="text"
                      name='contactName'
                      value={contactUsData.contactName}
                      onChange={(e) => {
                        let obj = { ...contactUsData }
                        obj['contactName'] = e.target.value
                        setContactUsData(obj)
                      }}
                      className='h-11 py-2 px-4 border border-[#0000001e] outline-none rounded-[8px]'
                      placeholder='Your name' />
                  </div>
                  <div className='flex flex-col mb-6'>
                    <label className='text-[18px] text-[#000000a9] mb-2'>Email</label>
                    <input type="email"
                      name='contactEmail'
                      value={contactUsData.contactEmail}
                      onChange={(e) => {
                        let obj = { ...contactUsData }
                        obj['contactEmail'] = e.target.value
                        setContactUsData(obj)
                      }}
                      className='h-11 py-2 px-4 border border-[#0000001e] outline-none rounded-[8px]'
                      placeholder='Your Email' />
                  </div>
                  <div className='flex flex-col mb-6'>
                    <label className='text-[18px] text-[#000000a9] mb-2'>Phone number</label>
                    <div className='flex items-center h-11 border border-[#0000001e] rounded-[8px]'>
                      <div className='flex items-center gap-1 p-2 text-[#000000a9] border-r border-[#0000001e] cursor-pointer'>+91  <IoIosArrowDown /></div>
                      <input type="tel"
                        name='contactPhone'
                        value={contactUsData.contactPhone}
                        onChange={(e) => {
                          let obj = { ...contactUsData }
                          obj['contactPhone'] = e.target.value
                          setContactUsData(obj)
                        }}
                        className='w-full py-2 px-4 outline-none'
                        placeholder='Your Email' />
                    </div>
                  </div>
                  <div className='flex flex-col mb-6'>
                    <label className='text-[18px] text-[#000000a9] mb-2'>How can we help?</label>
                    <textarea
                      name='contactMessage'
                      value={contactUsData.contactMessage}
                      onChange={(e) => {
                        let obj = { ...contactUsData }
                        obj['contactMessage'] = e.target.value
                        setContactUsData(obj)
                      }}
                      className='h-30 py-2 px-4 border border-[#0000001e] outline-none rounded-[8px]'
                      placeholder='Your message' />
                  </div>
                  <button className='w-full h-[45px] text-[18px] rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                    <span className='flex items-center justify-center gap-1'>
                      Send Message
                      <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />

                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
