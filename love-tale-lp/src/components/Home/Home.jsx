import React from 'react'
// import herosec from '../../assets/herosec.jpg';
import './Home.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import CircleFrame from '../../assets/CircleFrame.svg'




const Home = () => {
  return (<>


    <div className="hero flex  flex-col items-center justify-center relative">
      <div className='text-white text-2xl flex items-center mx-auto text-center gap-8'>
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
      </div>
      <h className='mx-auto text-center text-3xl text-white font-bold'>Lorem ipsum dolor sit amet consectetur.</h>
      <p className='mx-auto text-center text-xl text-white '>Lorem ipsum dolor sit amet.</p>
      <button className='bg-[#f47377] px-5 py-3 rounded-full my-3'>Get Started</button>
    </div>
    {/**Bottom div */}
    <div className='bg-[#f47377] flex items-center justify-between p-3 absolute bottom-0 z-10 w-full'>
      <div className='absolute'>
        <img src={CircleFrame} alt="" className='w-[200px] h-[200px] rounded-full ' />
      </div>
      <div className='mx-auto text-center'>
        <h className=' text-[23px]  text-white font-bold'>Start Your Love Story</h>
        <p className=' text-[18px] text-white '>Love Tale:Find Love with our dating site</p>
      </div>
      <button className='bg-gray-50 px-5 py-3 rounded-full my-3 text-[#f47377]'>Register Now</button>
    </div>
  </>
  )
}

export default Home
