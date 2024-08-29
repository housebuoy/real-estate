import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/estatelogo.png'
import { TbSend } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-dark text-white p-6 lg:">
        <div className="lg:flex justify-between">
            <div className="mb-10">
                <img src={logo} alt="logo" className='h-14 mb-4' />
                <form action="" className='w-full border-[#262626] border-2 rounded py-2 px-3 flex'>
                    <input type="text" placeholder='Enter your email' name="" id="" className='w-full bg-inherit py-2 px-3 font-urbanist font-medium outline-none'/>
                    <button>
                        <TbSend className='text-2xl'/>
                    </button>
                </form>
            </div>
            <div className="grid lg:flex lg:gap-16 lg:pr-20 grid-cols-2 md:flex-row justify-between gap-y-6 gap-x-5 ">
                <div className="flex-1 border-r border-b lg:border-0 lg:pt-0 lg:pb-0 border-gray-700 pb-3">
                    <NavLink to="/" className='text-white font-urbanist font-semibold text-lg mb-4'>Home</NavLink>
                    <ul className="space-y-2">
                        <li>Hero Section</li>
                        <li>Features</li>
                        <li>Properties</li>
                        <li>Testimonials</li>
                        <li>FAQ&apos;s</li>
                    </ul>
                </div>
                <div className="flex-1 border-b border-l lg:border-0 lg:pb-0 lg:pl-0 border-gray-700 pb-3 pl-6">
                    <NavLink to="/about" className='text-white font-urbanist font-semibold text-lg mb-40'>About Us</NavLink>
                    <ul className="space-y-2">
                        <li>Our Story</li>
                        <li>Our Works</li>
                        <li>How It Works</li>
                        <li>Our Team</li>
                        <li>Our Clients</li>
                    </ul>
                </div>
                <div className="flex-1 pt-3 border-t lg:border-0 border-r lg:pt-0 lg:pr-0 border-gray-700 pr-6">
                    <NavLink to="/properties" className='text-white font-urbanist font-semibold text-lg mb-4'>Properties</NavLink>
                    <ul className="space-y-2">
                        <li>Portfolio</li>
                        <li>Categories</li>
                    </ul>
                </div>
                <div className="flex-1 border-t border-l lg:border-0 lg:pt-0 lg:pl-0 border-gray-700 pt-3 pl-6">
                    <NavLink to="/service" className='text-white font-urbanist font-semibold text-lg mb-4'>Service</NavLink>
                    <ul className="space-y-2">
                        <li>Valuation Mastery</li>
                        <li>Strategic Marketing</li>
                        <li>Negotiation Wizardry</li>
                        <li>Closing Success</li>
                        <li>Property Management</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-nav-primary mt-6 rounded-md px-6 py-6 flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-2">
                <Link to='' className=' rounded-full w-16 h-16'>
                    <div className="bg-nav-secondary rounded-full w-16 h-16  flex items-center justify-center">
                        <FaFacebookF className='text-3xl'/>
                    </div>
                </Link>
                <Link to='' className=' rounded-full w-16 h-16'>
                    <div className="bg-nav-secondary rounded-full w-16 h-16  flex items-center justify-center">
                        <FaLinkedinIn className='text-3xl'/>
                    </div>
                </Link>
                <a href='https://www.instagram.com/goldfern_?igsh=YWhpdzIxOTRlYWY4' className=' rounded-full w-16 h-16'>
                    <div className="bg-nav-secondary rounded-full w-16 h-16  flex items-center justify-center">
                        <FaInstagram className='text-3xl'/>
                    </div>
                </a>
                <a href='https://www.instagram.com/goldfern_?igsh=YWhpdzIxOTRlYWY4' className=' rounded-full w-16 h-16'>
                    <div className="bg-nav-secondary rounded-full w-16 h-16  flex items-center justify-center">
                        <FaYoutube className='text-3xl'/>
                    </div>
                </a>
            </div>
            <div className="mt-4 font-urbanist text-center">
                <p>@2024 goldFern. All Rights Reserved.</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </footer>
);

export default Footer;
