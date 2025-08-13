import React, { useEffect, useState } from 'react'
import { CardData } from '../assets/apis/ApiAssets'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'
import { Link } from 'react-router'
import axios from 'axios'

export default function Home() {
    // const [dashboardList, setDashboardList] = useState([])
    const [localitiesList, setLocalitiesList] = useState([])
    const [propertiesList, setPropertiesList] = useState([])
    const [propertyTyeList, setPropertyTyeList] = useState([])
    const [customersList, setCustomersList] = useState([])
    const [contactUsList, setContactUsList] = useState([])
    const [contactUsId, setContactUsId] = useState([])
    const [openModel, setOpenModel] = useState(false)
    const [contactUsData, setContactUsData] = useState([])
    // const [prevLocalitiesList, setPrevLocalitiesList] = useState([])

    // const previousLocalities = 10;

    // const growthLocalities = previousLocalities
    //     ? (((localitiesList - previousLocalities) / previousLocalities) * 100).toFixed(2)
    //     : 0;

    let VITE_APIPATH = import.meta.env.VITE_APIPATH
    let getdashboardData = () => {
        axios.get(`${VITE_APIPATH}dashboard/view`)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData.data.properties);
                // setDashboardList(finalData.data)
                setLocalitiesList(finalData.data.localities.length)
                setLocalitiesList(finalData.data.localities.length)
                setPropertiesList(finalData.data.properties.length)
                setPropertyTyeList(finalData.data.propertyTye.length)
                setCustomersList(finalData.data.customers.length)
                setContactUsList(finalData.data.contactUs)
            })
    }

    useEffect(() => {
        getdashboardData()
    }, [])

    useEffect(() => {
        axios.get(`${VITE_APIPATH}dashboard/contactus-single-view/${contactUsId}`)
            .then((res) => res.data)
            .then((finalData) => {
                setContactUsData(finalData.data);
                // setDashboardList(finalData.data)
                // setLocalitiesList(finalData.data.localities.length)
                // setLocalitiesList(finalData.data.localities.length)
                // setPropertiesList(finalData.data.properties.length)
                // setPropertyTyeList(finalData.data.propertyTye.length)
                // setCustomersList(finalData.data.customers.length)
                // setContactUsList(finalData.data.contactUs)
            })
    }, [contactUsId])
    return (
        <>
            <div className='max-w-[1000px] m-auto mt-2'>
                <div className=" lg:px-10 px-2 mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
                    <div
                        className={`p-4 bg-[#fff] text-[#000] shadow-md rounded-[8px]    `}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className=" md:text-[25px] text-[20px] text-[#000] font-[700]">
                                {propertiesList > 0 ? propertiesList : "0"}
                                <span className="md:text-[17px] text-[14px] text-[#000] font-[600]">
                                    {" "}
                                    {/* item */}
                                    ( 20.57% )
                                    {/* {growthLocalities >= 0 ? '+' : ''}
                                    {growthLocalities}% */}
                                </span>
                            </h1>
                            {/* <PiDotsThreeOutlineVerticalFill className="text-[#000] cursor-pointer" /> */}
                        </div>

                        <h1 className=" md:text-[20px] text-[17px] text-[#000] font-[500]">
                            Total Properties
                        </h1>
                    </div>
                    <div
                        className={`p-4 bg-[#fff] text-[#000] shadow-md rounded-[8px]   grow xl:grow-0`}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className=" md:text-[25px] text-[20px] text-[#000] font-[700]">
                                {localitiesList > 0 ? localitiesList : "0"}
                                <span className="md:text-[17px] text-[14px] text-[#000] font-[600]">
                                    {" "}
                                    ( 20.57% )
                                </span>
                            </h1>
                            {/* <PiDotsThreeOutlineVerticalFill className="text-[#000] cursor-pointer" /> */}
                        </div>

                        <h1 className=" md:text-[20px] text-[17px] text-[#000] font-[500]">
                            Total Localities
                        </h1>
                    </div>
                    <div
                        className={`p-4 bg-[#fff] text-[#000] shadow-md rounded-[8px]    grow xl:grow-0`}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className=" md:text-[25px] text-[20px] text-[#000] font-[700]">
                                {propertyTyeList > 0 ? propertyTyeList : "0"}
                                <span className="md:text-[17px] text-[14px] text-[#000] font-[600]">
                                    {" "}
                                    ( 20.57% )
                                </span>
                            </h1>
                            {/* <PiDotsThreeOutlineVerticalFill className="text-[#000] cursor-pointer" /> */}
                        </div>

                        <h1 className=" md:text-[20px] text-[17px] text-[#000] font-[500]">
                            Property Types
                        </h1>
                    </div>
                    <div
                        className={`p-4 bg-[#fff] text-[#000] shadow-md rounded-[8px]    grow xl:grow-0`}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className=" md:text-[25px] text-[20px] text-[#000] font-[700]">
                                {customersList > 0 ? customersList : "0"}
                                <span className="md:text-[17px] text-[14px] text-[#000] font-[600]">
                                    {" "}
                                    ( 20.57% )
                                </span>
                            </h1>
                            {/* <PiDotsThreeOutlineVerticalFill className="text-[#000] cursor-pointer" /> */}
                        </div>

                        <h1 className=" md:text-[20px] text-[17px] text-[#000] font-[500]">
                            Happy Customers
                        </h1>
                    </div>
                </div>
            </div>

            <div className='max-w-[900px] m-auto mt-4 lg:px-0 px-4'>
                {/* <div className='flex'> */}

                <div className='max-w-[600px]  bg-[#fff] mt-4 p-4 rounded-2xl sm:overflow-hidden overflow-x-scroll'>
                    <div>
                        <h1 className='text-[20px] font-semibold mb-2'>Add Localitiess</h1>

                    </div>
                    <table className='w-full'>
                        <thead className='bg-[#F1F1F1] border-b border-[#00000026]'>
                            <tr>
                                {/* <th><input type="checkbox" className='ml-1' /></th> */}
                                <th className='p-3'>No.</th>
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Email</th>
                                {/* <th className='p-3'>Description</th> */}
                                <th className='p-3'>Active</th>
                                {/* <th className='p-3'>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {contactUsList.map((items, index) => (
                                <tr>
                                    {/* <th><input type="checkbox" className='ml-1' /></th> */}
                                    <th className='p-3 text-center'>{index + 1}</th>
                                    <th className='p-3 text-center text-nowrap'>{items.contactName}</th>
                                    <td className='p-3 text-center'>{items.contactEmail}</td>
                                    {/* <td className='p-3 text-center '>description</td> */}
                                    <td className='p-3 text-center'>
                                        <button onClick={() => { setContactUsId(items._id), setOpenModel(true) }} className="bg-[#fff]  text-[#0015ff] border border-[#0015ff] py-1 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                                            View
                                        </button>
                                    </td>
                                    {/* <td className=" p-3 text-center ">
                                        <div className='flex justify-center'>
                                            <Link to={`/add-localities`}>
                                                <button className="bg-[#F1F1F1] text-[#000] border border-[#00000025] p-3 rounded-l-[10px] cursor-pointer">
                                                    FaRegEdit
                                                </button>
                                            </Link>
                                            <button  className="bg-[#F1F1F1] text-[#f00] border border-[#00000025] p-3 rounded-r-[10px] cursor-pointer">
                                                RiDeleteBin6Line
                                            </button>
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* <div className='max-w-[600px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>
                        <table className='w-full '>
                            <thead className='bg-[#F1F1F1] border-b border-[#00000026]'>
                                <tr>
                                    <th className='p-3'>No.</th>
                                    <th className='p-3'>Name</th>
                                    <th className='p-3'>Email</th>
                                    <th className='p-3'>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactUsList.map((items, index) => (
                                    <tr>
                                        <th className='p-3 text-center'>{index + 1}</th>
                                        <th className='p-3 text-center'>{items.contactName}</th>
                                        <td className='p-3 text-center'>{items.contactEmail}</td>
                                        <td className='p-3 text-center '>description</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                {/* </div> */}


            </div>
            {openModel &&
                <div className='w-full h-full fixed top-0 left-0 z-50 '>
                    <div onClick={() => setOpenModel(false)} className='absolute w-full h-full bg-[#00000053] -z-10'></div>
                    <div className='flex items-center justify-between'>
                        <div className='max-w-[600px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>
                            <h1 className='text-[20px] font-bold '>Inquiry Now</h1>
                            {contactUsData.map((items, index) => (
                                <div>
                                    <ul>
                                        <li>Name: {items.contactName}</li>
                                        <li>Email: {items.contactEmail}</li>
                                        <li>Concate: {items.contactPhone}</li>
                                        <li>Message: {items.contactMessage}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
