"use client"
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const contextData = createContext()


export default function MainContext({ children }) {
    const [accountSetting, setAccountSetting] = useState([])
    let APIBASEURL = process.env.NEXT_PUBLIC_APIBASEURL

    useEffect(() => {
        axios.get(`${APIBASEURL}global/accountSetting-view`)
            .then((res) => res.data)
            .then((finalData) => {
                setAccountSetting(finalData.data)
                // setAccountSetting(finalData.data[0].LogoImage)
                console.log(finalData.data);

            })
    }, [])

    const [property, setProperty] = useState([])
    const [pStaticPath, setPStaticPath] = useState("")

    useEffect(() => {
        axios.get(`${APIBASEURL}home/homeProduct-view`)
            .then((res) => res.data)
            .then((finalData) => {
                setProperty(finalData.data)
                setPStaticPath(finalData.staticPath)
            })
    }, [])

    let obj = {
        accountSetting,
        property,
        pStaticPath
    }
    return <contextData.Provider value={obj}>{children}</contextData.Provider>


}
