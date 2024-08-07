"use client"
import Image from "next/image"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <div className='px-6 sm:px-20 justify-between lg:px-36 xl:px-46 py-4 flex gap-2'>
      <div className='flex justify-between items-center'>
          <Image src="/icra_logo.jpg" alt=""
          width={80}
          height={80}
          className='object-fill p-0 m-0 cursor-pointer lg:w-24'/>
      </div>
      <div className=' flex items-center'>
        <p className='font-semibold tracking-wide text-sm lg:text-lg text-center'>
          BCE-NIT PATNA CENTENARY YEAR CELEBRATION 1924-2024
        </p>
      </div>
      <div>
          <Image src='/nitp_logo.png' alt=""
          width={80}
          height={80}
          className='object-fill p-0 m-0 cursor-pointer lg:w-24'/>
      </div>
    </div>
  )
}

export default Navbar
