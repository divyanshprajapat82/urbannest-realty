"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


export default function TopSection() {
    const [areaChecks, setAreaChecks] = useState(1)
    const [localitiesBtn, setLocalitiesBtn] = useState(false)

    const [localities, setLocalities] = useState([])

    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    let getJodhpurLocalities = () => {
        axios.get(`${APIBASEURL}home/localities-view`)
            .then((res) => res.data)
            .then((finalData) => {
                setLocalities(finalData.data)
                console.log(finalData.data);

            })
    }

    useEffect(() => {
        getJodhpurLocalities()
    }, [])
    return (
        <>
            <div className='bg-[#c8bbbc] bg-[linear-gradient(140deg,_rgba(251,_234,_235,_1)_0%,_rgba(255,_255,_255,_1)_25%,_rgba(255,_255,_255,_1)_100%)] md:mb-[-50px] sm:mb-[50px] mb-[90px]'>
                <div className='max-w-[1200px] mx-auto h-[100vh] p-2 '>
                    <div className='grid justify-between w-full md:grid-cols-2 grid-cols-1 relative md:top-[0] top-[-120px] '>
                        <div className='md:order-first order-last relative'>
                            <div className='md:block hidden'>
                                <h1 className='text-[35px]/[42px] text-[#000] md:mt-[80px] mt-[40px]'>The Most Trusted Real Estate Agent & Property Dealer in Jodhpur</h1>
{/* <<<<<<< HEAD */}
                                <p className='mt-4 text-[#000]'>Rajasthan's 1st local online property listing website.</p>
{/* ======= */}
                                <p className='mt-4'>Rajasthan's 1st local online property listing website.</p>
{/* >>>>>>> d9bb21a17bedee0d91d9fb818ce5a1ca73fe9d92 */}
                                <h2 className='text-[#DD3846] text-[28px] font-alkatra'>Property chaiye ? Yahin aaiye !</h2>
                            </div>
                            <div className='md:hidden block text-center '>
                                <h1 className='text-[35px]/[42px] text-[#000] md:mt-[80px] mt-[40px]'>The Most Trusted Real Estate Agent & Property Dealer in Jodhpur</h1>
{/* <<<<<<< HEAD */}
                                <p className='mt-4 text-[#000]'>Rajasthan's 1st local online property listing website.</p>
{/* ======= */}
                                <p className='mt-4'>Rajasthan's 1st local online property listing website.</p>
{/* >>>>>>> d9bb21a17bedee0d91d9fb818ce5a1ca73fe9d92 */}
                                <h2 className='text-[#DD3846] text-[28px] font-alkatra'>Property chaiye ? Yahin aaiye !</h2>
                            </div>

                            <div className='border border-[#00000036] p-6 lg:absolute relative md:mt-[50px] mt-[0px] bg-[#fff] lg:w-[900px] md:w-[700px] w-[100%]  rounded-2xl  z-50'>
                                <form action="">
                                    <div className='flex sm:text-[17px] text-[15px] overflow-hidden'>
                                        <label htmlFor="redio1" className={`flex items-center px-3 py-2  font-bold  rounded-[6px] cursor-pointer ${areaChecks == 1 ? "bg-[#2A2354] text-[#fff]" : "text-[#000]"}
                                `}
                                            onClick={() => setAreaChecks(1)}
                                        >
                                            <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer sm:block hidden" name="redio" value="All" id="redio1"
                                                defaultChecked
                                            />
                                            <label htmlFor="redio1" className='ml-1  cursor-pointer'>All</label>
                                        </label>
                                        <label htmlFor="redio2" className={`flex items-center px-3 py-2 ] font-bold rounded-[6px] cursor-pointer
                                    ${areaChecks == 2 ? "bg-[#2A2354] text-[#fff]" : "text-[#000]"}
                                `}
                                            onClick={() => setAreaChecks(2)}
                                        >
                                            <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer sm:block hidden" name="redio" value="Residential" id="redio2" />
                                            <label htmlFor="redio2" className='ml-1  cursor-pointer'>Residential</label>
                                        </label>
                                        <label htmlFor="redio3" className={`flex items-center px-3 py-2  font-bold rounded-[6px] cursor-pointer ${areaChecks == 3 ? "bg-[#2A2354] text-[#fff]" : "text-[#000]"}
                                `}
                                            onClick={() => setAreaChecks(3)}
                                        >
                                            <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer sm:block hidden" name="redio" value="Commercial" id="redio3" />
                                            <label htmlFor="redio3" className='ml-1  cursor-pointer'>Commercial</label>
                                        </label>
                                        <label htmlFor="redio4" className={`flex items-center px-3 py-2  font-bold rounded-[6px] cursor-pointer ${areaChecks == 4 ? "bg-[#2A2354] text-[#fff]" : "text-[#000]"}
                                `}
                                            onClick={() => setAreaChecks(4)}
                                        >
                                            <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer sm:block hidden" name="redio" value="Industrial" id="redio4" />
                                            <label htmlFor="redio4" className='ml-1  cursor-pointer'>Industrial</label>
                                        </label>
                                        <label htmlFor="redio5" className={`flex items-center px-3 py-2  font-bold rounded-[6px] cursor-pointer ${areaChecks == 5 ? "bg-[#2A2354] text-[#fff]" : "text-[#000]"}
                                `}
                                            onClick={() => setAreaChecks(5)}
                                        >
                                            <input type="radio" className="form-radio h-4 w-4 accent-[#fff]  cursor-pointer sm:block hidden" name="redio" value="Agricultural" id="redio5" />
                                            <label htmlFor="redio5" className='ml-1  cursor-pointer'>Agricultural</label>
                                        </label>
                                    </div>
                                    <div className=' flex gap-2 mt-2 h-[58px]'>
                                        <div onClick={() => setLocalitiesBtn(!localitiesBtn)} className='relative w-full p-3 h-full text-[#000] border border-[#0000002b] rounded-[6px] cursor-pointer'>
                                            <div className='flex items-center justify-between'>
                                                <p>Area</p>
                                                <div>
                                                    <MdKeyboardArrowUp />
                                                    <MdKeyboardArrowDown />
                                                </div>
                                            </div>
                                            {localitiesBtn &&
                                                <div className='absolute bottom-full left-0 w-full p-3 h-[300px] border bg-[#fff] border-[#0000002b] rounded-[6px] overflow-y-scroll'>
                                                    <input type="text" className='px-2 w-full h-[35px] border border-[#00000083] outline-none rounded-[4px] mb-2' placeholder='Search...' />
                                                    <ul className='flex flex-col gap-2'>
                                                        {localities.map((items, index) => (
                                                            <li>{items.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                        <button className=' w-[180px] h-full text-[18px] rounded-[6px] bg-[#DD3846] text-[#fff] cursor-pointer group'>
                                            <span className='flex items-center justify-center gap-1'>
                                                Search
                                                <FaArrowRight className='text-[0px]
                                            group-hover:text-[16px]
                                            transition-all duration-300
                                        ' />

                                            </span>
                                        </button>


                                    </div>
                                </form>
                                {/* </div> */}
                                {/* <form action="/action_page.php"> */}
                                {/* <p>Please select your favorite Web language:</p> */}
                                {/* <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html">HTML</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label for="css">CSS</label>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                            <label for="javascript">JavaScript</label>



                            <p>Please select your age:</p>
                            <input type="radio" id="age1" name="age" value="30" />
                            <label for="age1">0 - 30</label>
                            <input type="radio" id="age2" name="age" value="60" />
                            <label for="age2">31 - 60</label>
                            <input type="radio" id="age3" name="age" value="100" />
                            <label for="age3">61 - 100</label>
                            <input type="submit" value="Submit" /> */}
                                {/* </form> */}
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-center relative lg:top-[-120px] md:top-[-10px]'>
                                <div className='rounded-full overflow-hidden md:max-w-[600] max-w-[400]'>
                                    <img src="/images/Heroimage.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
