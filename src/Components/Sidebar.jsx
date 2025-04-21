import React from 'react'
import { NavLink } from "react-router-dom";



function Sidebar() {
  return (
    <div className='fixed left-0 z-40 w-[20vw] min-h-screen hidden md:block border-r-2 border-black'>
        <h2 className='font-bold size text-[30px] text-center'>GameStore</h2>
        <ul className='flex flex-col gap-2 p-2 text-center text-[20px]'>

        <li><NavLink to="/home" className={({ isActive }) => "block w-full px-4 py-2 hover:bg-gray-200 rounded-full" + (isActive ? " font-bold" : "")} >Home</NavLink></li>
        <li><NavLink to="/library" className={({ isActive }) => "block w-full px-4 py-2 hover:bg-gray-200 rounded-full"  + (isActive ? " font-bold" : "")} >Library</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => "block w-full px-4 py-2 hover:bg-gray-200 rounded-full"  + (isActive ? " font-bold" : "")} >Cart</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => "block w-full px-4 py-2 hover:bg-gray-200 rounded-full"  + (isActive ? " font-bold" : "")} >Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar  
