import React from 'react'
import logo from '../assets/images/logo.png'
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='sticky top-0 z-50 flex gap-2 w-full justify-center items-center p-2 mt-2 mb-0 bg-white'>
      <Link to="/home"><img src = {logo} width = {50} height={50} className='flex m-3'></img></Link>
      <div className='flex bg-slate-200 gap-3 rounded-full p-2 mt-2 w-full items-center align-middle'>
        <HiOutlineSearch />
        <input type="text" placeholder='Search' className='search bg-transparent outline-0 w-full' />
      </div>
    </div>
  )
}

export default Header
