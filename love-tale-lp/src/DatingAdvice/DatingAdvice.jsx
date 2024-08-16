import React from 'react'
import herosec from '../assets/herosec.jpg';


const DatingAdvice = () => {
    return (
        <div className='w-full'>
            <h1 className='mx-auto text-center text-black text-[25px] my-16'>The No.1 Trusted Dating <span className='underline underline-offset-2 decoration-pink-500 '>Site</span></h1>
            <div className='bg-gray-100 h-[400px] w-[90%] mx-auto flex items-center '>
                {/*Left div video */}
                <div className='flex-1 h-[400px]'>
                    <img src={herosec} alt="img" className='w-full h-[100%] object-cover' />
                </div>
                {/**RIGHT DIV */}
                <div className='flex-1 p-2 mx-auto text-center'>
                    <h2 className='text-[25px] font-bold text-black'>Explore Dating <span className='underline underline-offset-2 decoration-pink-500'>Advice</span></h2>
                    <p className='text-black font-medium'>Be calm.Be kind.Be Yourself</p>
                    <p className='bg-gray-50 text-gray-500 text-[12px] w-64 mx-auto text-center mt-8 mb-2 ' style={{
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '8px',
                    }}
                    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quod sequi excepturi quasi magnam quis quaerat voluptas. </p>
                    <div className='flex flex-col gap-3 my-2 '>
                        <button className='w-[80%] p-1 rounded-xl bg-[#f47377] font-bold text-white mx-auto text-center'>Men</button>
                        <button className='w-[80%]  p-1 rounded-xl bg-[#f47377] font-bold text-white mx-auto text-center'>Women</button>
                        <button className='w-[80%]  p-1 rounded-xl bg-[#f47377] font-bold text-white mx-auto text-center'>Other</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatingAdvice
