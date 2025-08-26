import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function View_PropertyTypes() {

    let VITE_APIPATH = import.meta.env.VITE_APIPATH

    const [propertyType, setPropertyType] = useState([])
    const [staticPath, setStaticPath] = useState("")


    let getPropertyTypes = () => {
        axios.get(`${VITE_APIPATH}property-Type/view`)
            .then((res) => res.data)
            .then((finalData) => {
                console.log(finalData.data);
                setPropertyType(finalData.data)
                setStaticPath(finalData.staticPath)
            })
    }

    let deletePropertyType = (id) => {
        axios.delete(`${VITE_APIPATH}property-Type/delete/${id}`)
            .then((res) => res.data)
            .then((finalData) => {
                if (finalData.status) {
                    toast.success(finalData.msg)
                    getPropertyTypes()
                } else {
                    toast.error(finalData.msg)
                }
            })
    }

    useEffect(() => {
        getPropertyTypes()
    }, [])

    return (
        <>
            <ToastContainer />

            <div className='max-w-[1000px] m-auto mt-2'>
                <h1 className='text-[30px] font-bold '>View Localitiess</h1>
                <div className='max-w-[900px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>
                    <div className="flex items-center justify-between flex-wrap mb-2 ">
                        <div className='flex h-[35px] items-center w-[300px]'>
                            <div className='h-full p-2 border border-[#00000019] bg-[#F1F1F1] rounded-l-[5px]'><IoSearch /></div>
                            <input type="text" className='bg-[#F1F1F1] w-full h-full p-2 border border-[#00000019] rounded-r-[5px] outline-none' placeholder='Enter City' />
                        </div>
                        <div className='flex'>
                            <button className="bg-[#456fca] text-[#fff] font-semibold border border-[#00000025] p-2 rounded-l-[10px] cursor-pointer">
                                Change Status
                            </button>
                            <button className="bg-[#F1F1F1] text-[#f00] border border-[#00000025] p-2 rounded-r-[10px] cursor-pointer">
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                    <table className='w-full '>
                        <thead className='bg-[#F1F1F1] border-b border-[#00000026]'>
                            <tr>
                                <th><input type="checkbox" className='ml-1' /></th>
                                <th className='p-3'>No.</th>
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Image</th>
                                <th className='p-3'>Active</th>
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {propertyType.map((items, index) => (
                                <tr>
                                    <th><input type="checkbox" className='ml-1' /></th>
                                    <th className='p-3 text-center'>{index + 1}</th>
                                    <th className='p-3 text-center'>{items.propertyTypeName}</th>
                                    <td className='p-3 text-center'>
                                        <div className='flex justify-center'>
                                            <img src={items.propertyTypeImage} className='rounded-[5px]' width={60} alt="" />
                                        </div>
                                    </td>
                                    <td className='p-3 text-center'>
                                        <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                                            Active
                                        </button>
                                    </td>
                                    <td className=" p-3 text-center ">
                                        <div className='flex justify-center'>
                                            <Link to={`/add-property-types/${items._id}`}>
                                                <button className="bg-[#F1F1F1] text-[#000] border border-[#00000025] p-3 rounded-l-[10px] cursor-pointer">
                                                    <FaRegEdit />
                                                </button>
                                            </Link>
                                            <button onClick={() => deletePropertyType(items._id)} className="bg-[#F1F1F1] text-[#f00] border border-[#00000025] p-3 rounded-r-[10px] cursor-pointer">
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
