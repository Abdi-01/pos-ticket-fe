import React from 'react';
import Navbar from './Navbar';
import {FaHome} from 'react-icons/fa';
import {GiPriceTag} from 'react-icons/gi';
import {AiFillSetting} from 'react-icons/ai';
import {MdAccountCircle} from 'react-icons/md'
import {TbReportMoney} from 'react-icons/tb'
import {Link} from'react-router-dom';

function Sidenavbar() {
  return (
    <div>
      
        <div className='h-full bg-gray-600 px-2 z-10'>
            <h1 className='font-bold text-xl pb-2'>General</h1>
            <div className='flex flex-col gap-y-4 text-orange-400 '>
            <button className='flex gap-2 pl-4 hover:text-white'>
                <FaHome className='text-2xl' /> <Link to='/Dashboard' className='text-lg'>Dashboard</Link>
            </button>
            <button className='flex gap-2 pl-4 hover:text-white'>
                <MdAccountCircle className='text-2xl' /> <Link to='/Account' className='text-lg'>Account</Link>
            </button>
            <button className='flex gap-2 pl-4 hover:text-white'>
                <GiPriceTag className='text-2xl' /> <Link to='/AdminProduct' className='text-lg'>Product</Link>
            </button>
            <button className='flex gap-2 pl-4 hover:text-white'>
                <TbReportMoney className='text-2xl' /> <Link to='/Report'  className='text-lg'>Report</Link >
            </button>
            </div>
            <h1 className='font-bold text-xl py-2'>Setting</h1>
            <button className='flex gap-2 pl-4 text-orange-400 hover:text-white'>
                <AiFillSetting className='text-2xl' /> <h1 className='text-lg'>Log out</h1>
            </button>

        </div>
    </div>
  )
}

export default Sidenavbar
