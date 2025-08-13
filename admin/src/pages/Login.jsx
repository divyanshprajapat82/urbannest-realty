// import React from 'react'
// import { Link } from 'react-router'

// export default function Login() {
//     return (
//         <>
//             <div>

//             </div>
//         </>
//     )
// }


import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import { loginContext } from '../config/MainContext'

export default function Login() {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // })
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    // const [adminId, setAdminId] = useState("")

    let { adminID, setAdminID } = useContext(loginContext)

    let navigate = useNavigate()

    // const handleChange = (e) => {
    //     setFormData(prev => ({
    //         ...prev,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    let VITE_APIPATH = import.meta.env.VITE_APIPATH


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Login attempt:', formData)

        let obj = {
            adminEmail: e.target.email.value,
            adminPassword: e.target.password.value
        }

        axios.post(`${VITE_APIPATH}auth/login`, obj)
            .then((res) => res.data)
            .then((finalData) => {
                if (finalData.status) {
                    toast.success(finalData.msg)
                    setAdminID(finalData.adminId)
                    // navigate('/dashboard')
                } else {
                    toast.error(finalData.msg)
                    setError(finalData.msg)
                }
            })
        // Add your login logic here
    }

    useEffect(() => {
        if (adminID != "") {
            navigate('/dashboard')
        }
    }, [adminID])

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    {/* Header */}
                    <div className="text-center mb-7">
                        {/* <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">UN</span>
                    </div> */}
                        <div className="mx-auto w-[250px] flex items-center justify-center mb-2">
                            <img src="/images/Urbannes.png" alt="" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to your UrbanNest Realty account</p>
                    </div>

                    {/* Login Form */}
                    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        // value={formData.password}
                                        // onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                                    >
                                        {/* {showPassword ? '👁️' : '👁️‍🗨️'} */}
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>
                            </div>

                            <p className='text-[#f0301a] -mt-3 mb-2'>{error}</p>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Demo Credentials */}
                        {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-2 font-medium">Demo Credentials:</p>
                        <p className="text-xs text-gray-500">Email: admin@urbannest.com</p>
                        <p className="text-xs text-gray-500">Password: password123</p>
                    </div> */}
                    </div>

                    {/* Footer */}
                    {/* <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
                            Sign up here
                        </Link>
                    </p>
                </div> */}
                </div>
            </div>
        </>
    )
}