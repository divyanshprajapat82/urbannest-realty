'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
  const [accountSItems, setAccountSItems] = useState({
    propertyTitle: "",
    number: "",
    email: "",
    propertyType: "",
    locality: "",
    price: "",
    area: "",
    description: "",
    exactAddress: "",
    locationMap: "",
    propertyStatus: "",
    LogoImage: ""
  })
  const [imageTarget, setImageTarget] = useState("");
  // const [imageTargets, setImageTargets] = useState([]);
  const [multiImageTargets, setMultiImageTargets] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [statusChecks, setStatusChecks] = useState(1)
  const [propertyType, setPropertyType] = useState([])
  const [localitiesList, setLocalitiesList] = useState([])



  // let VITE_APIPATH = import.meta.env.VITE_APIPATH
  let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL



  let accountSettingData = (e) => {
    e.preventDefault()

    let formData = new FormData(e.target)
    axios.post(`https://urbannest-realty.onrender.com/admin/properties/insert`, formData)
      .then((res) => res.data)
      .then((finalData) => {
        // if (finalData.status) {
        //   toast.success(finalData.msg)
        // } else {
        //   toast.error(finalData.msg)
        // }
      })
  }

  let getPropertyType = () => {
    axios.get(`https://urbannest-realty.onrender.com/admin/property-Type/view`)
      .then((res) => res.data)
      .then((finalData) => {
        setPropertyType(finalData.data)
      })
  }

  let getLocalities = () => {
    axios.get(`https://urbannest-realty.onrender.com/admin/localities/view`)
      .then((res) => res.data)
      .then((finalData) => {
        setLocalitiesList(finalData.data)
      })
  }

  useEffect(() => {
    getPropertyType()
    getLocalities()
  }, [])
  return (
    <div className='bg-[#F8F8FC] text-[#000]'>
      <div className='max-w-[1000px] m-auto mt-2'>
        <h1 className='text-[30px] font-bold '>Post Properties</h1>
        <div className='max-w-[800px] m-auto bg-[#fff] mt-4 p-6 rounded-2xl'>


          {/* <h1 className='text-[20px] font-bold '>Add Localitiess</h1> */}
          <div>
            <form action="" onSubmit={accountSettingData} >

              <h1 className='text-[18px] text-[#000000d8] mb-2'>Property For</h1>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap mb-4'>
                <label htmlFor="redio1" className={`flex items-center px-3 py-2  font-bold rounded-[6px] cursor-pointer 
                                ${statusChecks == 1 && "bg-[#2A2354] text-[#fff]"}
                                `}
                  onClick={() => setStatusChecks(1)}
                >
                  <input type="radio" defaultChecked className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer " name="propertyStatus" value="1" id="redio1" />
                  <label htmlFor="redio1" className='ml-1  cursor-pointer'>For Sale</label>
                </label>
                <label htmlFor="redio2" className={`flex items-center px-3 py-2  font-bold rounded-[6px] cursor-pointer 
                                ${statusChecks == 2 && "bg-[#2A2354] text-[#fff]"}
                                `}
                  onClick={() => setStatusChecks(2)}
                >
                  <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer " name="propertyStatus" value="2" id="redio2" />
                  <label htmlFor="redio2" className='ml-1  cursor-pointer'>For Rent</label>
                </label>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Property Title</label>
                  <input
                    type="text"
                    name='propertyTitle'
                    value={accountSItems.propertyTitle}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['propertyTitle'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    autoFocus required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Property Title' />
                </div>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Number</label>
                  <input
                    type="tel"
                    name='number'
                    value={accountSItems.number}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['number'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Number' />
                </div>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Email Id</label>
                  <input
                    type="email"
                    name='email'
                    value={accountSItems.email}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['email'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Email Id' />
                </div>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Property Type</label>

                  <select name="propertyType" id="" className='h-[40px] px-4 border border-[#00000019] rounded-[5px] outline-none'>
                    <option value="">Select Cetegory</option>
                    {propertyType.map((items, index) => (
                      <option key={index} value={items._id}>{items.propertyTypeName}</option>
                    ))}
                  </select>
                </div>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>locality</label>

                  <select name="locality" id="" className='h-[40px] px-4 border border-[#00000019] rounded-[5px] outline-none'>
                    <option value="">Select locality</option>
                    {localitiesList.map((items, index) => (
                      <option key={index} value={items._id}>{items.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Size (in sq. ft.)</label>
                  <input
                    type="number"
                    name='area'
                    value={accountSItems.area}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['area'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Size' />
                </div>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Price</label>
                  <input
                    type="number"
                    name='price'
                    value={accountSItems.price}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['price'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Contact No' />
                </div>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Exact Address</label>
                  <input
                    type="text"
                    name='exactAddress'
                    value={accountSItems.exactAddress}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['exactAddress'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Address' />
                </div>
              </div>
              <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                <div className='w-full flex flex-col text-[#000] mb-4'>
                  <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Google Location</label>
                  <input
                    type="text"
                    name='locationMap'
                    value={accountSItems.locationMap}
                    onChange={(e) => {
                      let obj = { ...accountSItems }
                      obj['locationMap'] = e.target.value
                      setAccountSItems(obj)
                    }}
                    required
                    className='h-[40px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                    placeholder='Enter Google Location' />
                </div>
              </div>
              <div className='flex flex-col text-[#000] mb-4'>
                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Description</label>
                <textarea
                  name='description'
                  value={accountSItems.description}
                  onChange={(e) => {
                    let obj = { ...accountSItems }
                    obj['description'] = e.target.value
                    setAccountSItems(obj)
                  }}
                  className='h-[300px] p-4 border border-[#00000019] rounded-[5px] outline-none'
                  placeholder='Add Description' />
              </div>

              <div className='flex flex-col text-[#000] mb-4'>
                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Add Front Image</label>
                <input
                  type="file"
                  name='singleImage'
                  id="single-Image"
                  accept="image/*"
                  required={updateData.length === 0}
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
                              className="w-70 h-24 object-cover rounded-[5px] border border-[#00000019] mt-3"
                            />
                          ) : "Add Front Image"}
                        </h1>
                        <label htmlFor="single-Image" className='px-10 py-2 bg-[#4A7CE8] text-[#fff] font-semibold rounded-[5px] hover:px-12 hover:py-2.5 transition-all duration-300 cursor-pointer'>
                          Upload
                        </label>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className='flex flex-col text-[#000] mb-4'>
                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Add More Images</label>
                <input
                  type="file"
                  name='multipleImages'
                  id="multiple-Images"
                  accept="image/*"
                  required={updateData.length === 0}
                  multiple
                  onChange={e => {
                    const files = Array.from(e.target.files);
                    const readers = files.map(file => {
                      return new Promise(resolve => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(file);
                      });
                    });
                    Promise.all(readers).then(images => setMultiImageTargets(images));
                  }}
                  className="hidden"
                />
                <label htmlFor="">
                  <div>
                    <div className='h-[200px] p-4 bg-[#F4F7FF] border-2 border-dashed border-[#666efb] rounded-2xl'>
                      <div className='flex flex-col justify-center h-full items-center gap-4'>
                        <h1 className='text-[30px] text-[#666efb] font-bold'>
                          {multiImageTargets.length > 0 ? (
                            <div className="flex flex-wrap gap-2 justify-center">
                              {multiImageTargets.map((img, idx) => (
                                <img
                                  key={idx}
                                  src={img}
                                  alt={`Preview ${idx + 1}`}
                                  className="w-32 h-24 object-cover rounded-[5px] border border-[#00000019] mt-3"
                                />
                              ))}
                            </div>
                          ) : "Add More Images"}
                        </h1>
                        <label htmlFor="multiple-Images" className='px-10 py-2 bg-[#4A7CE8] text-[#fff] font-semibold rounded-[5px] hover:px-12 hover:py-2.5 transition-all duration-300 cursor-pointer'>
                          Upload
                        </label>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* <img src="/images/images/productImg.png" alt="" /> */}
              {/* <div className='flex flex-col text-[#000] mb-6'>
                                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-3'>Profile Image</label>

                                <div className='border-2 border-dashed border-[#5A8DFF] rounded-xl p-6 bg-gradient-to-br from-[#f8faff] to-[#f0f4ff] hover:border-[#4a7ce8] transition-all duration-300'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='relative mb-4'>
                                            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg'>
                                                <img
                                                    src="https://via.placeholder.com/128x128?text=Profile+Image"
                                                    alt="Profile Preview"
                                                    className='w-full h-full object-cover' />
                                            </div>
                                            <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-[#5A8DFF] rounded-full flex items-center justify-center shadow-md'>
                                                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className='text-center mb-4'>
                                            <p className='text-[#5A8DFF] font-semibold text-lg mb-1'>Upload Profile Image</p>
                                            <p className='text-[#666] text-sm'>JPG, PNG or GIF (Max. 2MB)</p>
                                        </div>

                                        <div className='flex gap-3'>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className='hidden'
                                                id="image-upload" />
                                            <label
                                                htmlFor="image-upload"
                                                className='px-6 py-2 bg-[#5A8DFF] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#4a7ce8] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
                                                Choose File
                                            </label>
                                            <button
                                                type="button"
                                                className='px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

              <div className='w-full flex justify-center'>
                <button className='px-[50px] py-2 bg-[#5A8DFF] text-[#fff] font-semibold rounded-[5px] cursor-pointer hover:px-[60px] transition-all duration-300'>{updateData.length == 1 ? "Update Now" : "Add Now"} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
