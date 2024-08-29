import { useState } from 'react';
import logo from '../assets/estatelogo.png'
import { AiOutlineAlignRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <>
      <nav className="bg-nav-primary w-full sticky top-0 z-50 shadow-md">
        <div className="h-24 flex justify-between items-center bg-nav-primary px-6 lg:px-14 m-0">
          <NavLink to="/">
            <img src={logo} alt="" className='h-14 md:h-20'/>
          </NavLink>
          <ul className='hidden md:flex font-urbanist gap-10 text-white font-medium text-lg'>
            <li>
              <NavLink exact to="/" 
                className={({ isActive }) =>
                  isActive ?
                    'bg-[#141414] text-white px-3 py-2 rounded'
                      : 
                    'bg-opacity-0  text-white px-3 py-2 rounded hover:bg-zinc-800'
                }>Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/about" 
                className={({ isActive }) =>
                  isActive ?
                    'bg-[#141414] text-white px-3 py-2 rounded'
                      : 
                    'bg-opacity-0 text-white px-3 py-2 rounded hover:bg-zinc-800 '
                }>About Us
              </NavLink>
            </li>
            <li>
            <NavLink to="/properties" 
                className={({ isActive }) =>
                  isActive ?
                    'bg-[#141414] text-white px-3 py-2 rounded'
                      : 
                    'bg-opacity-0 text-white px-3 py-2 rounded hover:bg-zinc-800 '
                }>Properties
              </NavLink>
            </li>
            <li>
            <NavLink to="/ContactUs" 
                className={({ isActive }) =>
                  isActive ?
                    'bg-[#141414] text-white px-3 py-2 rounded'
                      : 
                    'bg-opacity-0 text-white px-3 py-2 rounded hover:bg-zinc-800 '
                }>Contact Us
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleMenu} className='md:hidden'>
            <AiOutlineAlignRight className='text-white text-4xl'/>
          </button>      
        </div>  
        <div className={`bg-nav-primary md:flex flex flex-col items-end px-6 pb-2  md:items-center m-0 md:space-x-6 ${isOpen ? "block" : "hidden"} md:hidden`}>
          <NavLink to="/" className='text-white font-urbanist font-semibold text-2xl  block mt-4 md:mt-0'>Home</NavLink>
          <NavLink to="/about" className='text-white font-urbanist font-semibold text-2xl  block mt-4 md:mt-0'>About</NavLink>
          <NavLink to="/properties" className='text-white font-urbanist font-semibold text-2xl  block mt-4 md:mt-0'>Properties</NavLink>
          <NavLink to="/ContactUs" className='text-white font-urbanist font-semibold text-2xl  block mt-4 md:mt-0'>Contact Us</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Footer
