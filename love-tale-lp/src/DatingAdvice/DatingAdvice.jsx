import React from 'react'
import herosec from '../assets/herosec.jpg';


const DatingAdvice = () => {
    return (
        <div className='w-full '>
            <h1 className='mx-auto text-center text-black text-[25px] my-16 font-medium'>The No.1 Trusted Dating <span className='underline underline-offset-2 decoration-pink-500 '>Site</span></h1>
            <div className='bg-gray-100 h-[400px] max-w-[90%] w-[100%] mx-auto md:flex grid grid-cols-1 md:my-auto mb-60 items-center '>
                {/*Left div video */}
                <div className='flex-1 h-[400px]'>
                    <img src={herosec} alt="img" className='w-full h-[100%] object-cover' />
                </div>
                {/**RIGHT DIV */}
                <div className='flex-1 p-2 mx-auto text-center'>
                    <h2 className='text-[25px] font-bold text-black tracking-wide'>Explore Dating <span className='underline underline-offset-2 decoration-pink-500'>Advice</span></h2>
                    <p className='text-black font-medium tracking-tight'>Be calm.Be kind.Be Yourself</p>
                    <p className='bg-gray-50 text-gray-500 text-[12px] w-64 mx-auto text-center mt-8 md:mb-2 mb-4 ' style={{
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '8px',
                    }}
                    >Hello,I'm Sarah and I'm the first dating App for the Love Tale.<span className='tracking-tight font-medium'>What are your preferances?</span></p>
                    <div className='flex flex-col gap-3 my-4 '>
                        <button className='w-[80%] p-1 rounded-xl bg-gradient-to-tl from-[#FFA1C9] to-[#F94892] font-bold text-white mx-auto text-center my-1'>Men</button>
                        <button className='w-[80%]  p-1 rounded-xl bg-gradient-to-br from-[#FFA1C9] to-[#F94892] font-bold text-white mx-auto text-center my-1'>Women</button>
                        <button className='w-[80%]  p-1 rounded-xl bg-gradient-to-tl from-[#FFA1C9] to-[#F94892] font-bold text-white mx-auto text-center my-1'>Other</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatingAdvice
