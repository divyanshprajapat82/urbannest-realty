import React, { useContext, useEffect } from 'react'
import { FaBars, FaLock } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { IoIosArrowDropdown } from 'react-icons/io'
import { RiProfileFill } from 'react-icons/ri'
import { loginContext } from '../config/MainContext'
import { Link, useNavigate } from 'react-router'

export default function Header({ setSideBar,
  sideBar,
  setNavSideBar, }) {

  let { adminID, setAdminID, adminData, adminStaticPath } = useContext(loginContext)

  let navigate = useNavigate()

  useEffect(() => {
    if (adminID == "") {
      navigate("/")
    }
  }, [adminID])
  return (
    <>
      <div className="w-[100%] sticky top-0 bg-[#fff] z-9">
        <div className="flex justify-between mb-1 py-2 md:px-[40px] px-4">
          <h1 className="flex items-center gap-3 text-[20px]">
            <FaBars
              className="cursor-pointer opacity-60 hidden md:block"
              onClick={() => setSideBar(!sideBar)}
            />
            <FaBars
              className="cursor-pointer opacity-60 md:hidden block"
              onClick={() => setNavSideBar(true)}
            />
            <span className='sm:block hidden'>Dashboard</span>
          </h1>
          <div className="group relative cursor-pointer z-50">
            <div className="flex items-center gap-3">
              <img
                // src="/images/images/User_Profile.jpeg"
                src={adminData.adminImage}
                className="rounded-full w-11 h-11 object-cover"
                alt=""
              />
              <div>
                <h2 className='text-[18px]'>{adminData.adminName}</h2>
                <p>Admin</p>
              </div>
              <IoIosArrowDropdown className='text-[22px] text-[#000000a8] transition-transform duration-200 group-hover:rotate-180' />
            </div>

            {/* Hover Dropdown Menu */}
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-md border border-gray-200 z-50 transition-all duration-200 ease-in-out transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                {/* Profile Section */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={adminData.adminImage}
                      className="rounded-full w-10 h-10 object-cover"
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{adminData.adminName}</h3>
                      <p className="text-sm text-gray-500">{adminData.adminEmail}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <Link to="/profile">
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer transition-colors duration-150">
                      <FaCircleUser className="text-lg" />
                      <span className="font-medium">Profile</span>
                    </div>
                  </Link>

                  <Link to={"/account-setting"}>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer transition-colors duration-150">
                      <RiProfileFill className="text-lg" />
                      <span className="font-medium">Company Profile</span>
                    </div>
                  </Link>

                  <hr className="border-gray-200 my-1" />

                  <div onClick={() => setAdminID("")} className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors duration-150">
                    <FaLock className="text-lg" />
                    <span className="font-medium">Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#00000029]" />
      </div>
    </>
  )
}
