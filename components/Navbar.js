"use client"
import Image from "next/image"
import icraLogo from '../public/icra_logo.png';
import nitpLogo from '../public/nitp_logo.png';
import { useState } from "react";

function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <div className='px-6 sm:px-20 justify-between lg:px-36 xl:px-46 pt-4 lg:pb-4 flex gap-2'>
      <div className=''>
          <Image src={icraLogo} alt=""
          className='object-fill p-0 m-0 cursor-pointer w-20 lg:w-24'/>
      </div>
      <div className=' flex items-center'>
        <p className='font-semibold md:tracking-wide text-xs sm:text-sm lg:text-lg text-center'>
          BCE-NIT PATNA CENTENARY YEAR CELEBRATION 1924-2024
        </p>
      </div>
      <div>
          <Image src={nitpLogo} alt=""
          className='object-fill p-0 m-0 cursor-pointer w-20 lg:w-24'/>
      </div>
    </div>
  )
}

export default Navbar
