import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.svg';


const Header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 160);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    return (
        <div className={`w-[100%]  text-[#fff] fixed top-0 py-[4px] justify-between left-0  flex items-center z-20 ${sticky ? 'dark': '' } `}>
            <div className='flex gap-4 m-3'>
                <img src={logo} alt="logo" className='w-[50px] h-[50px]' />
                {/* <h2 className='text-[25px] text-red-400 font-bold'></h2> */}
                <ul className='flex gap-4 items-center text-white'>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/safety'>Safety</Link>
                    </li>
                    <li>
                        <Link to='/learn'>Learn</Link>
                    </li>
                    <li>
                        <Link to='/downloads'>Downloads</Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-4 m-2'>
                <button className='text-white'>English</button>
                <button className='bg-[#f47377] px-3 py-2 rounded-full'>Login</button>
            </div>

        </div>
    )
}

export default Header
