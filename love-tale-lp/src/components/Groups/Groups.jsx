import React from 'react'
import img from '../../assets/img.jpg';
import girl1 from '../../assets/girl1.jpg';
import boy from '../../assets/boy.jpeg';
const Groups = () => {

    const cardItems = [
        {
            image: img,
            Name: 'Maisha Reid',
            Expert: 'Marketing',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nisi.',
        },
        {
            image: girl1,
            Name: 'Bella Williams',
            Expert: 'General Manager',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nisi.',
        },
        {
            image: boy,
            Name: 'Carter Bridges',
            Expert: 'SEO Expert',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nisi.',
        },
        {
            image: img,
            Name: 'Maisha Reid',
            Expert: 'Marketing',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nisi.',
        },
    ]
    return (
        <>
            <br />
            <div className='w-full mt-20'>
                <div className='flex flex-col items-center justify-center gap-1 my-4'>
                    <h3 className='text-[15px] text-pink-400'>Our Groups</h3>
                    <h2 className='text-[23px]'>Start your <span className='underline underline-offset-2 decoration-pink-500'>Search</span> Here</h2>
                </div>
                <div className='w-[90%] mx-auto p-2 flex items-center gap-1 justify-center my-2'>
                    {
                        cardItems.map((item, idx) => (
                            <div className='w-[20%] flex flex-col items-center justify-center ' key={idx}>

                                <div className='w-full h-[200px]' >
                                    <img src={item.image} alt="img" className='w-full h-full object-cover' />
                                </div>
                                <div className='flex items-center justify-center flex-col p-3'>

                                    <h3 className='my-2 text-xl'>{item.Name}</h3>
                                    <h5 className='text-[10px]'>{item.Expert}</h5>
                                    <p className='mx-auto text-center my-2 text-[14px]'>{item.description}</p>
                                </div>
                            </div >
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default Groups
