import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { loginContext } from '../config/MainContext';
import axios from 'axios';

export default function Profile() {
  const [imageTarget, setImageTarget] = useState("");
  let { adminData } = useContext(loginContext)
  const [profileList, setProfileList] = useState({
    adminName: "",
    adminPhone: "",
    adminImage: ""
  })
  let VITE_APIPATH = import.meta.env.VITE_APIPATH
  // console.log(adminData[0].adminEmail);

  let profileData = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    axios.put(`${VITE_APIPATH}auth/profile`, formData)
      .then((res) => res.data)
      .then((finalData) => {
        if (finalData.status) {
          toast.success(finalData.msg)
        } else {
          toast.error(finalData.msg)
        }
      })
  }

  useEffect(() => {

    setProfileList({
      adminName: "",
      adminPhone: "",
      adminImage: ""
    })

    axios.get(`${VITE_APIPATH}auth/view`)
      .then((res) => res.data)
      .then((finalData) => {
        // setAdminData(finalData.data[0]);
        console.log(finalData.data[0]);
        setProfileList({
          adminName: finalData.data[0].adminName,
          adminPhone: finalData.data[0].adminPhone,
          // adminImage: finalData.data[0].adminImage
        })
        setImageTarget(finalData.data[0].adminImage)
      })
  }, [])

  return (
    <>
      <ToastContainer />
      <div className='max-w-[1000px] m-auto mt-2'>
        <h1 className='text-[30px] font-bold '>Profile</h1>
        <div className='max-w-[1000px] m-auto  mt-4 p-4 rounded-2xl'>


          {/* <h1 className='text-[20px] font-bold '>Add Localitiess</h1> */}
          <form action="" onSubmit={profileData} >
            <div className='flex md:flex-nowrap flex-wrap gap-2'>
              <div className='w-[700px] h-full bg-[#fff]  p-4 rounded-2xl'>
                {/* <img src="/images/images/User_Profile.jpeg" alt="" /> */}
                <div className='flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Upload Your Image</label>
                  <input
                    type="file"
                    name='adminImage'
                    id="logo-file"
                    accept="image/*"
                    // required={updateData.length === 0}
                    // required
                    // value={imageTarget.LogoImage}
                    onChange={e => {
                      // let obj = { ...imageTarget }
                      // obj['LogoImage'] = e.target.value
                      // setAccountSItems(obj)
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setImageTarget(reader.result);
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                  <label htmlFor="">
                    <div>
                      <div className='h-[200px] p-4 bg-[#F4F7FF] border-2 border-dashed border-[#666efb] rounded-2xl'>
                        <div className='flex flex-col justify-center h-full items-center gap-4'>
                          <h1 className='text-[30px] text-[#666efb] font-bold'>
                            {imageTarget ? (
                              <img
                                src={imageTarget}
                                alt="Logo Preview"
                                className="w-24 h-24 object-cover object-center rounded-full border border-[#00000019] mt-3"
                              />
                            ) : "Upload Image"}
                          </h1>
                          <label htmlFor="logo-file" className='px-10 py-2 bg-[#4A7CE8] text-[#fff] font-semibold rounded-[5px] hover:px-12 hover:py-2.5 transition-all duration-300 cursor-pointer'>
                            Upload
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className='w-full bg-[#fff]  p-4 rounded-2xl'>
                <div className='flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Your Name</label>
                  <input
                    type="text"
                    name='adminName'
                    value={profileList.adminName}
                    onChange={(e) => {
                      let obj = { ...profileList }
                      obj['adminName'] = e.target.value
                      setProfileList(obj)
                    }}
                    autoFocus required
                    className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Name' />
                </div>
                <div className='flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Email</label>
                  <input
                    type="email"
                    name='adminEmail'
                    value={adminData.adminEmail}
                    // value={localitiesItems.city}
                    // onChange={(e) => {
                    //   let obj = { ...localitiesItems }
                    //   obj['city'] = e.target.value
                    //   setLocalitiesItems(obj)
                    // }}
                    disabled
                    className='bg-[#f1f1f1c5] text-[#00000088] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter email' />
                </div>
                <div className='flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Phone Number</label>
                  <input
                    type="tel"
                    name='adminPhone'
                    value={profileList.adminPhone}
                    onChange={(e) => {
                      let obj = { ...profileList }
                      obj['adminPhone'] = e.target.value
                      setProfileList(obj)
                    }}
                    className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Phone Number' />
                </div>
                {/* <div className='flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Description</label>
                  <textarea
                    name='description'
                    // value={localitiesItems.description}
                    // onChange={(e) => {
                    //   let obj = { ...localitiesItems }
                    //   obj['description'] = e.target.value
                    //   setLocalitiesItems(obj)
                    // }}
                    className='bg-[#F1F1F1] h-[140px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Add Description' />
                </div> */}
                <div className='w-full flex justify-center'>
                  <button className='px-[50px] py-2 bg-[#5A8DFF] text-[#fff] font-semibold rounded-[5px] cursor-pointer hover:px-[60px] transition-all duration-300'>Add Now </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
