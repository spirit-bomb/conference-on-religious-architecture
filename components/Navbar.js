"use client"
import Image from "next/image"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <div className='px-2 sm:px-20 lg:justify-between lg:px-36 xl:px-46 py-4 lg:flex'>
      <div className='flex justify-between items-center'>
        <span>
          <Image src="/icra_logo.jpg" alt=""
          width={90}
          height={90}
          className='object-fill p-0 m-0 cursor-pointer'/>
        </span>
        <span className='text-3xl lg:hidden'>
          <FontAwesomeIcon  icon={faBars} className=' cursor-pointer'
          onClick={()=>setOpen(!open)}></FontAwesomeIcon>
        </span>
      </div>

      <div className={`lg:flex lg:flex-col lg:justify-end lg:z-auto w-full lg:w-auto
       transition-opacity ease-linear duration-1000 ${open?'':'hidden'} `}>
        <div className='hidden lg:flex lg:justify-end gap-2 lg:items-center lg:pb-4'>
          <input type="text" placeholder="Search Conferences"
          className='px-2 border py-1.5 w-60'/>
          <button className='bg-[#f8faf9] border-[#f8faf9] hover:bg-slate-200 rounded-md border py-2 px-3'>
            <FontAwesomeIcon icon={faSearch} className='w-5 items-center' />
          </button>
        </div>
        <div className='flex gap-5 lg:gap-6 text-base flex-col lg:flex-row items-center'>
        <Link href="#" >Conferences</Link>
        <Link href="#" >Disciplines</Link>
        <Link href="#" >Committees</Link>
        <Link href="#" >Support</Link>
        <Link href="#" >Login</Link>
        <Link href="#" >Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
