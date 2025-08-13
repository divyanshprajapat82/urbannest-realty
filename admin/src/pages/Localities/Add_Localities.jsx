import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function Add_Localities() {

  const [localitiesItems, setLocalitiesItems] = useState({
    name: "",
    city: "",
    description: ""
  })

  let { id } = useParams()
  // console.log(id);

  let VITE_APIPATH = import.meta.env.VITE_APIPATH





  let localitiesData = (e) => {
    e.preventDefault()
    // let formData = new FormData(e.target)
    // console.log(formData);


    if (id) {
      axios.put(`${VITE_APIPATH}localities/updata/${id}`, localitiesItems)
        .then((res) => res.data)
        .then((finalData) => {
          // alert(finalData.msg)
          if (finalData.status) {
            toast.success(finalData.msg)
          } else {
            toast.error(finalData.msg)
          }
        })
    } else {
      axios.post(`${VITE_APIPATH}localities/insert`, localitiesItems)
        .then((res) => res.data)
        .then((finalData) => {
          // alert(finalData.msg)
          if (finalData.status) {
            toast.success(finalData.msg)
          } else {
            toast.error(finalData.msg)
          }
        })
    }
  }

  useEffect(() => {
    setLocalitiesItems({
      name: "",
      city: "",
      description: ""
    })
    if (id) {
      axios.get(`${VITE_APIPATH}localities/view/${id}`)
        .then((res) => res.data)
        .then((finalData) => {
          setLocalitiesItems({
            name: finalData.data.name,
            city: finalData.data.city,
            description: finalData.data.description
          })
          // if (finalData.status) {
          //   toast.success(finalData.msg)
          //   getLocalities()
          // } else {
          //   toast.error(finalData.msg)
          // }
        })
    }
  }, [id])

  return (
    <>
      <ToastContainer />
      <div className='max-w-[1000px] m-auto mt-2'>
        <h1 className='text-[30px] font-bold '>Add Localitiess</h1>
        <div className='max-w-[500px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>


          {/* <h1 className='text-[20px] font-bold '>Add Localitiess</h1> */}
          <form action="" onSubmit={localitiesData}>
            <div className='flex flex-col text-[#000] mb-4'>
              <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Name</label>
              <input
                type="text"
                name='name'
                value={localitiesItems.name}
                onChange={(e) => {
                  let obj = { ...localitiesItems }
                  obj['name'] = e.target.value
                  setLocalitiesItems(obj)
                }}
                autoFocus required
                className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                placeholder='Enter Name' />
            </div>
            <div className='flex flex-col text-[#000] mb-4'>
              <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>City</label>
              <input
                type="text"
                name='city'
                value={localitiesItems.city}
                onChange={(e) => {
                  let obj = { ...localitiesItems }
                  obj['city'] = e.target.value
                  setLocalitiesItems(obj)
                }}
                className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                placeholder='Enter City' />
            </div>
            <div className='flex flex-col text-[#000] mb-4'>
              <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Description</label>
              <textarea
                name='description'
                value={localitiesItems.description}
                onChange={(e) => {
                  let obj = { ...localitiesItems }
                  obj['description'] = e.target.value
                  setLocalitiesItems(obj)
                }}
                className='bg-[#F1F1F1] h-[140px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                placeholder='Add Description' />
            </div>
            <div className='w-full flex justify-center'>
              <button className='px-[50px] py-2 bg-[#5A8DFF] text-[#fff] font-semibold rounded-[5px] cursor-pointer hover:px-[60px] transition-all duration-300'>{id ? "Update Now" : "Add Now"} </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
