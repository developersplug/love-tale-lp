import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.svg';
import { IoMenu } from "react-icons/io5";


const Header = () => {
    const [sticky, setSticky] = useState(false);
    // State to control the visibility of the menu items
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 240);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`w-[100%]  text-[#fff] fixed top-0 py-[4px] justify-between left-0  flex items-center z-20 ${sticky ? 'dark' : ''} `}>
            <div className='flex gap-4 m-3 items-center'>

                <img src={logo} alt="logo" className='w-[50px] h-[50px]' />
                {/* <h2 className='text-[25px] text-red-400 font-bold'></h2> */}
                <ul className={`
                        fixed top-16 left-0 h-[200px] w-64 
                        ${isMenuOpen ? 'bg-gradient-to-tl from-[#FFA1C9] to-[#F94892]' : ''}  text-white 
                        transform ${isMenuOpen ? 'translate-x-0' : 'hidden translate-x-full'} 
                        transition-transform duration-300 ease-in-out 
                        flex flex-col items-center justify-center gap-4 
                        md:static md:flex md:flex-row md:h-auto md:w-auto 
                        md:bg-transparent md:translate-x-0 md:transition-none
                        md:gap-4 md:items-center md:text-white
`}>
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
                <IoMenu className="text-xl cursor-pointer md:hidden"
                    onClick={toggleMenu} />
            </div>
            <div className='flex gap-4 m-2'>
                <button className='text-white'>English</button>
                <button className='bg-gradient-to-r from-[#543C6D] to-[#c98593] px-4 py-2 rounded-full'
                 onClick={() => window.location.href = 'https://abcdefg-c2895.web.app/'} 
                >Login</button>
            </div>

        </div>
    )
}

export default Header
