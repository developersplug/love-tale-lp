import React from 'react'
// import herosec from '../../assets/herosec.jpg';
import './Home.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (<>


    <div className="hero flex  flex-col items-center justify-center w-[100%] ">
      <div className='text-white text-xl flex items-center mx-auto text-center md:gap-8 gap-6 md:my-6 my-3 '>
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
      </div>
      <h className='md:mx-[20%] mx-[10%] text-center md:text-[50px] text-[35px] leading-none text-white font-medium'>Dating for Growns Ups <br/> Make a Real Connection </h>
      <p className='md:mx-auto  mx-[10%] text-center md:text-xl text-[20px] text-white font-medium my-6 '>Start meeting singles who are ready to commit today.</p>
      <button className='bg-gradient-to-r from-[#FFA1C9] to-[#F94892] md:px-5 px-3 text-[18px] md:py-3 py-2 rounded-full md:my-3 my-2 font-medium text-white'
      onClick={() => window.location.href = 'https://abcdefg-c2895.web.app/'} >Get Started</button>
    </div>
   
   
  </>
  )
}

export default Home
