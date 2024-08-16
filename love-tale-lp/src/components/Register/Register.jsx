import React from 'react'
import CircleFrame from '../../assets/CircleFrame.svg'

const Register = () => {
  return (
    <div>
      <div className='bg-[#f47377] flex items-center justify-between p-3  bottom-0 z-10 w-full'>
      <div className='absolute'>
        <img src={CircleFrame} alt="" className='w-[200px] h-[200px] rounded-full ' />
      </div>
      <div className='mx-auto text-center'>
        <h className=' text-[23px]  text-white font-bold'>Start Your Love Story</h>
        <p className=' text-[18px] text-white '>Love Tale:Find Love with our dating site</p>
      </div>
      <button className='bg-gray-50 px-5 py-3 rounded-full my-3 text-[#f47377]'>Register Now</button>
    </div>
    </div>
  )
}

export default Register
