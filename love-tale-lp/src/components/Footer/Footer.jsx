import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import LOGO02 from '../../assets/LOGO02.svg';


const Footer = () => {
  return (
    <div className='w-[90%] mx-auto flex items-center h-[100px] '>
    <img src={LOGO02} alt="logo" className='w-[50px] h-[50px]' />
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
