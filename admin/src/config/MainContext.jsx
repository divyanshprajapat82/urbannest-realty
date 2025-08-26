import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export let loginContext = createContext()

export function MainContext({ children }) {
    let VITE_APIPATH = import.meta.env.VITE_APIPATH

    const [adminID, setAdminID] = useState(localStorage.getItem("ADMINID") ?? "")
    const [adminData, setAdminData] = useState([])
    const [adminStaticPath, setAdminStaticPath] = useState([])

    useEffect(() => {
        localStorage.setItem("ADMINID", adminID)
    }, [adminID])

    useEffect(() => {
        axios.get(`${VITE_APIPATH}auth/view`)
            .then((res) => res.data)
            .then((finalData) => {
                setAdminData(finalData.data[0]);
                setAdminStaticPath(finalData.staticPath);
                console.log(finalData.data[0]);
            })
    }, [])
    // adminData, adminStaticPath

    let obj = {
        adminID,
        setAdminID,
        adminData,
        adminStaticPath
    }

    return (
        <loginContext.Provider value={obj}>
            {children}
        </loginContext.Provider>
    )
}
