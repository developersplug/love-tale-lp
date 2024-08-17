import React from 'react'
import CircleFrame from '../../assets/CircleFrame.svg'

const Register = () => {
  return (
    <>
    
      <div className='bg-gradient-to-tl from-[#FFA1C9] to-[#F94892] flex items-center justify-between md:p-3 p-2  bottom-0 z-10 h-[130px] w-full'>
        <div>
          <img src={CircleFrame} alt="" className='md:w-[200px] w-[150px]  md:h-[200px] h-[100px] rounded-full ' />
        </div>
        <div className='mx-auto text-center'>
          <h className=' md:text-[23px] text-[14px]  text-white md:font-bold font-medium'>Start Your Love Story</h>
          <p className=' md:text-[18px] text-[12px] text-white '>Love Tale:Find Love with our dating site</p>
        </div>
        <button className='bg-gray-50 md:px-5 px-3 md:text-[18px] text-[12px] whitespace-nowrap md:py-3 py-2 rounded-full my-3 text-[#f47377]'>Register Now</button>
      </div>
      </>
    
  )
}

export default Register
