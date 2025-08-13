import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import SideBar from './SideBar'

export default function MainLayout() {
    const [sideBar, setSideBar] = useState(true);
    const [navsideBar, setNavSideBar] = useState(false);
    return (
        <>
            <div className='flex'>
                <SideBar
                    sideBar={sideBar}
                    navsideBar={navsideBar}
                    setNavSideBar={setNavSideBar}
                />
                <div className="w-full bg-[#F1F1F1] h-[100vh] overflow-y-scroll md:px-4 px-0 relative">
                    <Header
                        sideBar={sideBar}
                        setSideBar={setSideBar}
                        setNavSideBar={setNavSideBar}
                        navsideBar={navsideBar} />
                    {/* <div className="min-h-[465px] border-l"> */}
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
