import React, { useState } from 'react'
import { BsFillHouseGearFill } from 'react-icons/bs'
import { GrTarget } from 'react-icons/gr'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdDashboard, MdKeyboardArrowDown } from 'react-icons/md'
import { RiUserLocationFill } from 'react-icons/ri'
import { TbDashboardFilled, TbMoodCrazyHappyFilled } from 'react-icons/tb'
import { VscGroupByRefType } from 'react-icons/vsc'
import { Link } from 'react-router'

export default function SideBar({ sideBar, navsideBar, setNavSideBar }) {
    const [sideFaq, setSideFaq] = useState(0);

    // console.log(sideFaq);


    return (
        <>
            {/* <div
                className={`fixed  bg-[#00000075] h-[100vh] w-full z-10`}
            ></div>
            <div
                className={` fixed md:relative z-20 md:left-0 `}
            > */}
            <div
                className={`fixed ${navsideBar ? "" : "hidden"
                    } bg-[#00000075] h-[100vh] w-full z-10`}
                onClick={() => setNavSideBar()}
            ></div>
            <div
                className={` fixed md:relative z-20 md:left-0 ${sideBar ? "" : "hidden"
                    } ${navsideBar ? "left-0" : "right-[1000px]"}`}
            >
                <div className="p-4 h-[100vh] bg-[#fff] min-w-[300px] flex justify-center  ">
                    <div className='flex flex-col justify-between'>
                        <div className="w-full">
                            <Link to="/dashboard">
                                <div className="flex justify-center">
                                    <img src="/images/Urbannes.png" width={200} alt="" />
                                </div>
                            </Link>

                            <hr className="border-[#000000c2] mt-4 w-[100%]" />

                            <div className="p-1   my-3 rounded-[5px]">
                                <ul className='flex flex-col gap-1'>
                                    <Link to="/dashboard">
                                        <li className="flex items-center gap-2 p-2 text-[18px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6]">
                                            <MdDashboard className="opacity-70 group-hover:opacity-100" />
                                            <span className="font-[500]">Dashboard</span>
                                        </li>
                                    </Link>
                                    <div>
                                        <li className={`flex justify-between items-center gap-2 p-2 text-[17px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6] cursor-pointer`} onClick={() => setSideFaq(sideFaq == 1 ? null : 1)}>
                                            <span className='flex items-center gap-2'>
                                                <RiUserLocationFill className="opacity-70 group-hover:opacity-100" />
                                                <span className="font-[500]">Manage Localities</span>
                                            </span>
                                            <MdKeyboardArrowDown className="text-2xl" />
                                        </li>
                                        <div className={`${sideFaq == 1 ? "" : "hidden"} pl-4`}>
                                            <Link to={`/add-localities`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">Add</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={`/view-localities`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">View</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <li className="flex items-center gap-2 p-2 text-[18px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6]">
                                    <BsFillHouseGearFill className="opacity-70 group-hover:opacity-100" />
                                    <span className="font-[500]">Manage Properties</span>
                                </li> */}
                                        <li className={`flex justify-between items-center gap-2 p-2 text-[17px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6] cursor-pointer`} onClick={() => setSideFaq(sideFaq == 2 ? null : 2)}>
                                            <span className='flex items-center gap-2'>
                                                <BsFillHouseGearFill className="opacity-70 group-hover:opacity-100" />
                                                <span className="font-[500]">Manage Properties</span>
                                            </span>
                                            <MdKeyboardArrowDown className="text-2xl" />
                                        </li>
                                        <div className={`${sideFaq == 2 ? "" : "hidden"} pl-4`}>
                                            <Link to={`/add-properties`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">Add</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={`/view-properties`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">View</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <li className="flex items-center gap-2 p-2 text-[18px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6]">
                                    <VscGroupByRefType className="opacity-70 group-hover:opacity-100" />
                                    <span className="font-[500]">Manage Property Types</span>
                                </li> */}
                                        <li className="flex justify-between items-center gap-2 p-2 text-[17px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6] cursor-pointer" onClick={() => setSideFaq(sideFaq == 3 ? null : 3)}>
                                            <span className='flex items-center gap-2'>
                                                <VscGroupByRefType className="opacity-70 group-hover:opacity-100" />
                                                <span className="font-[500]">Manage Property Types</span>
                                            </span>
                                            <MdKeyboardArrowDown className="text-2xl" />
                                        </li>
                                        <div className={`${sideFaq == 3 ? "" : "hidden"} pl-4`}>
                                            {/* {item.ans.map((items, indexs) => ( */}
                                            <Link to={`/add-property-types`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">Add</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={`/view-property-types`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">View</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            {/* ))} */}
                                        </div>
                                    </div>
                                    <div>
                                        {/* <li className="flex items-center gap-2 p-2 text-[18px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6]">
                                    <TbMoodCrazyHappyFilled className="opacity-70 group-hover:opacity-100" />
                                    <span className="font-[500]">Happy Customers</span>
                                </li> */}
                                        <li className={`flex justify-between items-center gap-2 p-2 text-[17px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6] cursor-pointer`} onClick={() => setSideFaq(sideFaq == 4 ? null : 4)}>
                                            <span className='flex items-center gap-2'>
                                                <TbMoodCrazyHappyFilled className="opacity-70 group-hover:opacity-100" />
                                                <span className="font-[500]">Manage Customers</span>
                                            </span>
                                            <MdKeyboardArrowDown className="text-2xl" />
                                        </li>
                                        <div className={`${sideFaq == 4 ? "" : "hidden"} pl-4`}>
                                            <Link to={`/add-customers`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">Add</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={`/view-customers`} >
                                                <div
                                                    className={`p-2 hover:bg-[#F3F4F6] group rounded-[5px] `}
                                                // onClick={() => setNavSideBar()}
                                                >
                                                    <div className="flex justify-between items-center text-[14px] cursor-pointer">
                                                        <span className="flex items-center  gap-2">
                                                            <GrTarget />
                                                            <span className="font-[500]">View</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div key={index}> */}
                                    {/* <div
                                className="p-1 hover:bg-[#F3F4F6] group rounded-[5px]"
                                onClick={() => setSideFaq(item.id)}
                            >
                                <div className="flex justify-between items-center text-[17px] cursor-pointer">
                                    <span className="flex items-center gap-2">
                                        icon
                                        <span className="font-[500]">heading</span>
                                    </span>
                                    <MdKeyboardArrowDown className="text-2xl" />
                                </div>
                            </div> */}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Link to="/account-setting">
                                <li className="flex items-center gap-2 p-2 text-[18px] text-[#000] rounded-2xl group hover:bg-[#F3F4F6]" onClick={() => setSideFaq(sideFaq == 5 ? null : 5)}>
                                    <IoSettingsSharp className={`${sideFaq == 5 && "rotate-170"} transition-all duration-700 opacity-70 group-hover:opacity-100`} />
                                    <span className="font-[500]">Account Setting</span>
                                </li>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}
