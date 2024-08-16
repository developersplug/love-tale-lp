import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-[90%] mx-auto flex items-center h-[100px] '>
        <h2  className='text-[25px] text-[#f47377] font-bold'>Love Tale</h2>
        <p className='mx-auto text-center'>Copyright © 2024 Love Tale.All Rights Reserved.</p>
        <div className='text-black text-2xl flex items-center  text-center gap-2'>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
      
    </div>
  )
}

export default Footer
