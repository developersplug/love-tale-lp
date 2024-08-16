import React from 'react'
// import herosec from '../../assets/herosec.jpg';
import './Home.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (<>


    <div className="hero flex  flex-col items-center justify-center ">
      <div className='text-white text-xl flex items-center mx-auto text-center gap-8 my-6'>
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
      </div>
      <h className='mx-[30%] text-center text-[50px] text-white font-medium'>Lorem ipsum dolor sit amet consectetur.</h>
      <p className='mx-auto text-center text-xl text-white font-medium  '>Lorem ipsum dolor sit ipsum dolor sit ipsum dolor sit ipsum dolor sit</p>
      <button className='bg-[#f47377] px-5 py-3 rounded-full my-3 font-medium text-white'>Get Started</button>
    </div>
    {/**Bottom div */}
   
  </>
  )
}

export default Home
