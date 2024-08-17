import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Artboard6 from '../../assets/Artboard6.svg'
const Availability = () => {
  return (
    <div className='w-[90%] bg-gray-100 mt-20 mx-auto'>
      <div className='flex  '>
        {/**Left div */}
        <div className='flex-1 flex flex-col p-4 items-center justify-center'>
          <h2 className='font-medium md:text-[40px] text-[30px] tracking-tight md:tracking-normal mx-auto text-center'>Our <span className='underline underline-offset-2 decoration-pink-500'>30 Million</span> Downloads</h2>
          <p className='md:mx-[5%]  text-center md:text-[15px] text-[12px] my-3'>Download Lovetale online dating aap and you're always ready to check out profiles near you & chat with real commited singles ready for a real relationship.It puts at the power of eAmo in the palm of your hand for a faster dating experience.</p>
          <div className='flex gap-3 my-4'>
            <div className='flex items-center justify-center gap-1 bg-black rounded-md p-1 '>
              <FaApple className='md:text-2xl text-xl text-white' />
              <p className='md:text-[15px] text-[13px] leading-[1.2] text-white'>
                Download on<br /> <span className='md:text-[18px] text-[14px] font-medium'>APP Store</span>
              </p>
            </div>
            <div className='flex items-center justify-center gap-1 bg-black rounded-md p-1'>
              <FaGooglePlay className='md:text-2xl text-xl text-white' />
              <p className='md:text-[15px] text-[13px] leading-[1.2] text-white'>Download on <br /> <span className='md:text-[18px] text-[14px] font-medium '> Google Play </span></p>
            </div>
          </div>
        </div>
        {/**Right div */}
        <div className='flex-1'>
          <img src={Artboard6} alt="img" className='w-full h-[100%]' />

        </div>
      </div>
    </div>
  )
}

export default Availability
