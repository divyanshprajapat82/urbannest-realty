import { useState } from "react";
import "./App.css";
// import Header from "./common/Header";
// import SideBar from "./common/SideBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./common/MainLayout";
import Home from "./pages/Home";
// import Localities from "./pages/Localities";
// import Properties from "./pages/Properties";
// import PropertyTypes from "./pages/PropertyTypes";
import Customers from "./pages/Customers";
import View_Localities from "./pages/Localities/View_Localities";
import Add_Localities from "./pages/Localities/Add_Localities";
import Account_Setting from "./pages/Account_Setting";
import Add_Properties from "./pages/Properties/Add_Properties";
import View_Properties from "./pages/Properties/View_Properties";
import View_PropertyTypes from "./pages/PropertyTypes/View_PropertyTypes";
import Add_PropertyTypes from "./pages/PropertyTypes/Add_PropertyTypes";
import Add_Customers from "./pages/Customers/Add_Customers";
import View_Customers from "./pages/Customers/View_Customers";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import FrontPage from "./common/Login";
// import ResetPassword from "./common/ResetPassword";

function App() {
  return (
    <>
      {/* <FrontPage /> */}
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account-setting" element={<Account_Setting />} />
              <Route path="/add-localities" element={<Add_Localities />} />
              <Route path="/add-localities/:id" element={<Add_Localities />} />
              <Route path="/view-localities" element={<View_Localities />} />
              {/* <Route path="/localities" element={<Localities />} /> */}
              <Route path="/add-properties" element={<Add_Properties />} />
              <Route path="/add-properties/:id" element={<Add_Properties />} />
              <Route path="/view-properties" element={<View_Properties />} />
              <Route path="/add-property-types" element={<Add_PropertyTypes />} />
              <Route path="/add-property-types/:id" element={<Add_PropertyTypes />} />
              <Route path="/view-property-types" element={<View_PropertyTypes />} />
              <Route path="/add-customers" element={<Add_Customers />} />
              <Route path="/add-customers/:id" element={<Add_Customers />} />
              <Route path="/view-customers" element={<View_Customers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <div className="flex">
        <SideBar sideBar={sideBar} />
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      </div> */}
    </>
  );
}

export default App;
