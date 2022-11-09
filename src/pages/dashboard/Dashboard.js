import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/shared/SideBar';
import "./Dashboard.css";

const Dashboard = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <Header/>
            <div className='flex gap-3'>
                <div className={`${isOpen? "absolute left-[0]":"absolute left-[-270px]"} sideBar lg:static`}>
                    <SideBar/>
                </div>
                <div className={`${isOpen? "pl-[270px]":""} w-full mt-2 ml-3`}>
                    <button onClick={()=>setOpen(!isOpen)} className="lg:hidden"> 
                    {
                        isOpen? <FaArrowAltCircleRight className='w-10 h-10 text-gray-500 mt-5 ml-5 sideOpenBtn'/>:<FaArrowAltCircleLeft className='w-10 h-10 text-gray-500 mt-5 ml-5 sideOpenBtn'/>
                    }
                     </button>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;