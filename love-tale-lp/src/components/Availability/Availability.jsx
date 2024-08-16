import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Artboard6 from '../../assets/Artboard6.svg'
const Availability = () => {
  return (
    <div className='w-[90%] bg-gray-200 mt-20 mx-auto'>
      <div className='flex  '>
        {/**Left div */}
        <div className='flex-1 flex flex-col p-4 items-center justify-center'>
          <h2 className='font-bold text-[20px]'>Our <span>30 Million</span> Downloads</h2>
          <p className='mx-[20%] text-center text-[15px] my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente omnis corporis error ab totam aliquam placeat. Corporis consequuntur illo necessitatibus?</p>
          <div className='flex gap-3 my-4'>
            <div className='flex items-center justify-center gap-1 bg-black rounded-md p-1 '>
              <FaApple className='text-2xl text-white' />
              <p className='text-[15px] leading-[1.2] text-white'>
                Download on<br /> <span className='text-[18px] font-bold'>APP Store</span>
              </p>
            </div>
            <div className='flex items-center justify-center gap-1 bg-black rounded-md p-1'>
              <FaGooglePlay className='text-2xl text-white' />
              <p className='text-[15px] leading-[1.2] text-white'>Download on <br /> <span className='text-[18px] font-bold'> Google Play </span></p>
            </div>
          </div>
        </div>
        {/**Right div */}
        <div className='flex-1'>
          <img src={Artboard6} alt="" className='w-full' />

        </div>
      </div>
    </div>
  )
}

export default Availability
