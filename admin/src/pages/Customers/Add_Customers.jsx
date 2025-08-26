import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify'

export default function Add_Customers() {
    const [imageTarget, setImageTarget] = useState("");
    const [customersList, setCustomersList] = useState({
        customersName: "",
        customersMessage: "",
        customerImage: ""
    })

    let navigate = useNavigate()


    let VITE_APIPATH = import.meta.env.VITE_APIPATH

    let { id } = useParams()
    console.log(id);


    let CustomersData = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        if (id) {
            axios.put(`${VITE_APIPATH}customers/update/${id}`, formData)
                .then((res) => res.data)
                .then((finalData) => {
                    if (finalData.status) {
                        toast.success(finalData.msg)
                        setTimeout(() => {
                            navigate("/view-customers")
                        }, 2000);
                    } else {
                        toast.error(finalData.msg)
                    }
                })
        } else {
            axios.post(`${VITE_APIPATH}customers/insert`, formData)
                .then((res) => res.data)
                .then((finalData) => {
                    if (finalData.status) {
                        toast.success(finalData.msg)
                        setTimeout(() => {
                            navigate("/view-customers")
                        }, 2000);
                    } else {
                        toast.error(finalData.msg)
                    }
                })
        }
    }

    useEffect(() => {
        setCustomersList({
            customersName: "",
            customersMessage: "",
        })
        if (id) {
            axios.get(`${VITE_APIPATH}customers/view/${id}`)
                .then((res) => res.data)
                .then((finalData) => {
                    setCustomersList({
                        customersName: finalData.data[0].customersName,
                        customersMessage: finalData.data[0].customersMessage,
                    })
                    setImageTarget(finalData.data[0].customerImage)
                    // console.log(finalData.data);
                    // setPropertyType(finalData.data)
                    // setStaticPath(finalData.staticPath)
                })
        } else {
            setImageTarget("")
        }
    }, [id])


    return (
        <>
            <ToastContainer />
            <div className='max-w-[1000px] m-auto mt-2'>
                <h1 className='text-[30px] font-bold '>Add Custimers</h1>
                <div className='max-w-[500px] m-auto bg-[#fff] mt-4 p-4 rounded-2xl'>


                    {/* <h1 className='text-[20px] font-bold '>Add Localitiess</h1> */}
                    <form action="" onSubmit={CustomersData}>
                        <div className='flex flex-col text-[#000] mb-4'>
                            <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Customer Name</label>
                            <input
                                type="text"
                                name='customersName'
                                value={customersList.customersName}
                                onChange={(e) => {
                                    let obj = { ...customersList }
                                    obj['customersName'] = e.target.value
                                    setCustomersList(obj)
                                }}
                                autoFocus required
                                className='bg-[#F1F1F1] h-[35px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                placeholder='Enter Name' />
                        </div>
                        <div className='flex flex-col text-[#000] mb-4'>
                            <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Message</label>
                            <textarea
                                name='customersMessage'
                                value={customersList.customersMessage}
                                onChange={(e) => {
                                    let obj = { ...customersList }
                                    obj['customersMessage'] = e.target.value
                                    setCustomersList(obj)
                                }}
                                required
                                className='bg-[#F1F1F1] h-[140px] p-2 border border-[#00000019] rounded-[5px] outline-none'
                                placeholder='Add Message' />
                        </div>
                        <div className='flex flex-col text-[#000] mb-4'>
                            <label htmlFor="" className='text-[18px] text-[#000000d8] mb-1'>Upload Your Image</label>
                            <input
                                type="file"
                                name='customerImage'
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
                        <div className='w-full flex justify-center'>
                            <button className='px-[50px] py-2 bg-[#5A8DFF] text-[#fff] font-semibold rounded-[5px] cursor-pointer hover:px-[60px] transition-all duration-300'>{id ? "Update Now" : "Add Now}"} </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
