import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function View_Properties() {

  let VITE_APIPATH = import.meta.env.VITE_APIPATH

  const [properties, setProperties] = useState([])
  const [staticPath, setStaticPath] = useState("")
  const [propertiesId, setPropertiesId] = useState([])
  const [openModel, setOpenModel] = useState(false)
  const [propertiesData, setPropertiesData] = useState([])

  // console.log("GET URL:", `${VITE_APIPATH}customers/view`);
  let getProperties = () => {
    axios.get(`${VITE_APIPATH}properties/view`)
      .then((res) => res.data)
      .then((finalData) => {
        console.log(finalData.data);
        setProperties(finalData.data)
        setStaticPath(finalData.staticPath)
      })
  }

  // let deletePropertyType = (id) => {
  //   axios.delete(`${VITE_APIPATH}properties/delete/${id}`)
  //     .then((res) => res.data)
  //     .then((finalData) => {
  //       if (finalData.status) {
  //         toast.success(finalData.msg)
  //         getCustomers()
  //       } else {
  //         toast.error(finalData.msg)
  //       }
  //     })
  // }

  useEffect(() => {
    getProperties()
  }, [])

  useEffect(() => {
    axios.get(`${VITE_APIPATH}properties/view/${propertiesId}`)
      .then((res) => res.data)
      .then((finalData) => {
        setPropertiesData(finalData.data);
        // setDashboardList(finalData.data)
        // setLocalitiesList(finalData.data.localities.length)
        // setLocalitiesList(finalData.data.localities.length)
        // setPropertiesList(finalData.data.properties.length)
        // setPropertyTyeList(finalData.data.propertyTye.length)
        // setCustomersList(finalData.data.customers.length)
        // setContactUsList(finalData.data.contactUs)
      })
  }, [propertiesId])

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
                <th className='p-3 w-[20%]'>Details</th>
                <th className='p-3'>Image</th>
                <th className='p-3'>Active</th>
                <th className='p-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((items, index) => (
                <tr>
                  <th><input type="checkbox" className='ml-1' /></th>
                  <th className='p-3 text-center'>{index + 1}</th>
                  <th className='p-3 text-center'>{items.propertyTitle}</th>
                  <th className='p-3 text-center '>
                    <button onClick={() => { setPropertiesId(items._id), setOpenModel(true) }} className="bg-[#fff]  text-[#0015ff] border border-[#0015ff] py-1 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                      View
                    </button></th>
                  <td className='p-3 text-center'>
                    <div className='flex justify-center h-[60px] overflow-hidden '>
                      <img src={items.singleImage} className='rounded-[5px] object-cover' width={60} alt="" />
                    </div>
                  </td>
                  <td className='p-3 text-center'>
                    <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                      Active
                    </button>
                  </td>
                  <td className=" p-3 text-center ">
                    <div className='flex justify-center'>
                      <Link to={`/add-properties/${items._id}`}>
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

      {openModel &&
        <div className='w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center'>
          <div onClick={() => setOpenModel(false)} className='absolute w-full h-full bg-[#00000053] -z-10'></div>
          <div className='flex items-center justify-between'>
            <div className='max-w-[600px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>
              <h1 className='text-[20px] font-bold '>Inquiry Now</h1>
              {propertiesData.map((items, index) => (
                <div key={index} className='flex gap-8'>
                  <ul>
                    <li className=''><span className='font-semibold mr-1'> Name: </span>{items.propertyTitle}</li>
                    <li className=''><span className='font-semibold mr-1'> Email: </span>{items.email}</li>
                    <li className=''><span className='font-semibold mr-1'> Concate: </span>{items.number}</li>
                    <li className=''><span className='font-semibold mr-1'> property Type: </span>{items.propertyType.propertyTypeName}</li>
                    <li className=''><span className='font-semibold mr-1'> locality: </span>{items.locality.name}</li>
                    <li className=''><span className='font-semibold mr-1'> property Status: </span>{items.propertyStatus == 1 ? "For Sale" : "For Rent"}</li>
                    <li className=''><span className='font-semibold mr-1'> price: </span>{items.price}</li>
                    <li className=''><span className='font-semibold mr-1'> area: </span>{items.area}</li>
                    <li className=''><span className='font-semibold mr-1'> exactAddress: </span>{items.exactAddress}</li>
                    <li className=''><div className='flex flex-col'> <span className='font-semibold mr-1'> description: </span> <span className='indent-4'>{items.description}</span></div></li>
                  </ul>
                  <div>
                    <div className='flex justify-center  overflow-hidden '>
                      <img src={items.singleImage} className='rounded-[5px] object-cover' alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-2 h-[60px] overflow-hidden mt-2 rounded-[5px]'>
                      {items.multipleImages.map((imgs, index) => (
                        <img src={imgs} className='object-cover ' width={100} alt="" />
                      ))}
                      {/* <div className='w-full h-full flex justify-center items-center text-[#081cff] border border-[#081cff] rounded-[5px] cursor-pointer'>See All</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}
