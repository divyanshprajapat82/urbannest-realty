import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';

export default function Account_Setting() {
    const [accountSItems, setAccountSItems] = useState({
        WebsiteTitle: "",
        name: "",
        Email: "",
        Contact: "",
        WebsiteDescription: "",
        FacebookLink: "",
        InstagramLink: "",
        TwitterLink: "",
        LinkedInLink: "",
        Address: "",
        Map: "",
        LogoImage: ""
    })
    const [imageTarget, setImageTarget] = useState("");
    const [updateData, setUpdateData] = useState([]);
    // const [staticPath, setStaticPath] = useState("");



    let VITE_APIPATH = import.meta.env.VITE_APIPATH

    // console.log(updateData.length);



    let accountSettingData = (e) => {
        e.preventDefault()

        let formData = new FormData(e.target)

        if (updateData.length == 1) {
            axios.put(`${VITE_APIPATH}account-setting/updata`, formData)
                .then((res) => res.data)
                .then((finalData) => {
                    if (finalData.status) {
                        toast.success(finalData.msg)
                    } else {
                        toast.error(finalData.msg)
                    }
                })
        } else {
            axios.post(`${VITE_APIPATH}account-setting/insert`, formData)
                .then((res) => res.data)
                .then((finalData) => {
                    if (finalData.status) {
                        toast.success(finalData.msg)
                    } else {
                        toast.error(finalData.msg)
                    }
                })
        }
    }

    useEffect(() => {
        setAccountSItems({
            WebsiteTitle: "",
            name: "",
            Email: "",
            Contact: "",
            WebsiteDescription: "",
            FacebookLink: "",
            InstagramLink: "",
            TwitterLink: "",
            LinkedInLink: "",
            Address: "",
            Map: "",
            LogoImage: ""
        })

        axios.get(`${VITE_APIPATH}account-setting/view`)
            .then((res) => res.data)
            .then((finalData) => {
                setAccountSItems({
                    WebsiteTitle: finalData.data[0].WebsiteTitle,
                    name: finalData.data[0].name,
                    Email: finalData.data[0].Email,
                    Contact: finalData.data[0].Contact,
                    WebsiteDescription: finalData.data[0].WebsiteDescription,
                    FacebookLink: finalData.data[0].FacebookLink,
                    InstagramLink: finalData.data[0].InstagramLink,
                    TwitterLink: finalData.data[0].TwitterLink,
                    LinkedInLink: finalData.data[0].LinkedInLink,
                    Address: finalData.data[0].Address,
                    Map: finalData.data[0].Map,
                    // LogoImage: finalData.data[0].LogoImage
                })

                console.log(finalData);
                // setStaticPath(finalData.staticPath)
                setUpdateData(finalData.data)
                setImageTarget(finalData.data[0].LogoImage)
                // console.log(finalData.data[0].LogoImage);


            })
    }, [])

    return (
        <>
            <ToastContainer />

            <div className='max-w-[1000px] m-auto mt-2'>
                <h1 className='text-[30px] font-bold '>Account Setting</h1>
                <div className='max-w-[800px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>


                    {/* <h1 className='text-[20px] font-bold '>Add Localitiess</h1> */}
                    <div>
                        <form action="" onSubmit={accountSettingData} >
                            <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Website Title</label>
                                    <input
                                        type="text"
                                        name='WebsiteTitle'
                                        value={accountSItems.WebsiteTitle}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['WebsiteTitle'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        autoFocus required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Website Title' />
                                </div>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        value={accountSItems.name}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['name'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Your Name' />
                                </div>
                            </div>
                            <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Email Id</label>
                                    <input
                                        type="text"
                                        name='Email'
                                        value={accountSItems.Email}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['Email'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Email Id' />
                                </div>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Contact No</label>
                                    <input
                                        type="tel"
                                        name='Contact'
                                        value={accountSItems.Contact}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['Contact'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Contact No' />
                                </div>
                            </div>
                            <div className='flex flex-col text-[#000] mb-4'>
                                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Website Description</label>
                                <textarea
                                    name='WebsiteDescription'
                                    value={accountSItems.WebsiteDescription}
                                    onChange={(e) => {
                                        let obj = { ...accountSItems }
                                        obj['WebsiteDescription'] = e.target.value
                                        setAccountSItems(obj)
                                    }}
                                    className='bg-[#F1F1F1] h-[140px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                    placeholder='Add Website Description' />
                            </div>
                            <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] flex items-center gap-2 text-[#000000d8] mb-1'><FaFacebookSquare /> Facebook Link</label>
                                    <input
                                        type="text"
                                        name='FacebookLink'
                                        value={accountSItems.FacebookLink}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['FacebookLink'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Facebook Link' />
                                </div>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] flex items-center gap-2 text-[#000000d8] mb-1'><FaInstagramSquare /> Instagram Link</label>
                                    <input
                                        type="text"
                                        name='InstagramLink'
                                        value={accountSItems.InstagramLink}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['InstagramLink'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Instagram Link' />
                                </div>
                            </div>
                            <div className='flex gap-x-4 w-full sm:flex-nowrap flex-wrap'>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] flex items-center gap-2 text-[#000000d8] mb-1'><FaTwitterSquare /> Twitter Link</label>
                                    <input
                                        type="text"
                                        name='TwitterLink'
                                        value={accountSItems.TwitterLink}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['TwitterLink'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Facebook Link' />
                                </div>
                                <div className='w-full flex flex-col text-[#000] mb-4'>
                                    <label htmlFor="" className='text-[18px] flex items-center gap-2 text-[#000000d8] mb-1'><FaLinkedin /> LinkedIn Link</label>
                                    <input
                                        type="text"
                                        name='LinkedInLink'
                                        value={accountSItems.LinkedInLink}
                                        onChange={(e) => {
                                            let obj = { ...accountSItems }
                                            obj['LinkedInLink'] = e.target.value
                                            setAccountSItems(obj)
                                        }}
                                        required
                                        className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                        placeholder='Enter Instagram Link' />
                                </div>
                            </div>
                            <div className='flex flex-col text-[#000] mb-4'>
                                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Address</label>
                                <textarea
                                    name='Address'
                                    value={accountSItems.Address}
                                    onChange={(e) => {
                                        let obj = { ...accountSItems }
                                        obj['Address'] = e.target.value
                                        setAccountSItems(obj)
                                    }}
                                    className='bg-[#F1F1F1] h-[80px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                    placeholder='Add Address' />
                            </div>
                            <div className='w-full flex flex-col text-[#000] mb-4'>
                                <label htmlFor="" className='text-[18px] flex items-center gap-2 text-[#000000d8] mb-1'><FaMapLocationDot /> Map</label>
                                <input
                                    type="text"
                                    name='Map'
                                    value={accountSItems.Map}
                                    onChange={(e) => {
                                        let obj = { ...accountSItems }
                                        obj['Map'] = e.target.value
                                        setAccountSItems(obj)
                                    }}
                                    required
                                    className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                    placeholder='Enter Instagram Link' />
                            </div>

                            <div className='flex flex-col text-[#000] mb-4'>
                                <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Upload Logo</label>
                                <input
                                    type="file"
                                    name='LogoImage'
                                    id="logo-file"
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
                                                    ) : "Upload Logo"}
                                                </h1>
                                                <label htmlFor="logo-file" className='px-10 py-2 bg-[#4A7CE8] text-[#fff] font-semibold rounded-[5px] hover:px-12 hover:py-2.5 transition-all duration-300 cursor-pointer'>
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
        </>
    )
}
