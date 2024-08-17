import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-[90%] mx-auto flex items-center h-[100px] '>
        <h2  className='md:text-[25px] text-[20px] text-[#f47377] font-bold whitespace-nowrap'>Love Tale</h2>
        <p className='mx-auto md:text-[22px] text-[12px]  text-center'>Copyright © 2024 Love Tale.All Rights Reserved.</p>
        <div className='text-black md:text-2xl text-xl flex items-center  text-center md:gap-2 gap-1'>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
      
    </div>
  )
}

export default Footer
