import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar"
import { housesData } from '../components/data';
import Footer from '../components/Footer';
import { IoBed } from "react-icons/io5";
import { FaBath, FaRulerCombined, FaUser } from "react-icons/fa";
import { PiCastleTurretFill } from "react-icons/pi";
import { BsCalendarDateFill, BsTelephoneInboundFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { GiTowerFlag } from "react-icons/gi";
import { useState } from 'react';
import Cta from '../components/CTA';
import emailjs from 'emailjs-com';


const PropertiesDetails = () => {
    


    const { id } = useParams();
    const property = housesData.find(item => item.id === Number(id));
    // console.log(property)

      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        country: '',
        propertyType: property.type,
        numBathrooms: property.bathrooms,
        numBedrooms: property.bedrooms,
        budget: property.price,
        message: ''
    });

      const [submitState, setSubmitState] = useState('');

    if (!property) {
        return <div className='h-screen bg-nav-secondary text-white'>Property not found</div>;
      }
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Your form submission logic here
  
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitState('Email sent successfully:', result.text)
          // Reset form
          setFormData({
              firstName: '',
              lastName: '',
              email: '',
              location: '',
              propertyType: property.type,
              numBathrooms: property.bathrooms,
              numBedrooms: property.bedrooms,
              budget: property.price,
              message: ''
          });
      })
      .catch((error) => {
          console.error('Error sending email:', error.text);
          setSubmitState('Error sending email:', error.text)
      });
  
      };


  return (
    <div className='bg-nav-secondary font-urbanist'>
        <NavBar />
        <div className="bg-nav-secondary text-white px-16 py-10">
            <div className="bg-nav-secondary md:flex-row flex flex-col items-start md:items-center  w-full gap-x-8 mb-5">
                <h1 className='text-xl font-bold mb-2 text-white'>{property.name}</h1>
                <div className="flex justify-between w-4/5">
                    <button className='flex items-center justify-center gap-2 px-3 py-1 my-2 border-[#262626] border-2 rounded-full text-white text-xs'>
                        <IoLocation />
                        {property.country || 'Villa'}
                    </button>
                    <div className='text-white font-semibold text-xl'>
                        <p className="text-gray-300 text-base font-normal">Price</p>
                        {property.price || '$0'}
                    </div>
                </div>
            </div>
            <img
                className="h-96  rounded-md mb-4 w-full"
                src={property.imageLg || 'https://via.placeholder.com/300'}
                alt={property.name || 'Property'}
            />
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-nav-primary w-full md:w-1/2 px-5 rounded-lg py-5">
                    <h3 className="text-xl font-bold mb-2 text-white">Description</h3>
                    <p className="text-gray-400">{property.description || 'Property Description'}</p>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <IoBed className='text-xl'/>
                            <p>{property.bedrooms + '-Bedroom' || 'Bedroom'}</p>
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <FaBath className='text-xl'/>
                            {property.bathrooms + '-Bathroom' || 'Bathroom'}
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <PiCastleTurretFill className='text-xl'/>
                            {property.type || 'Villa'}
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <GiTowerFlag className='text-xl'/>
                            {property.country || 'Villa'}
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <BsCalendarDateFill className='text-xl'/>
                            {property.year + ' Built' || 'Villa'}
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <FaRulerCombined className='text-xl'/>
                            {property.surface || 'Villa'}
                        </button>
                    </div>
                </div>

                <div className="bg-nav-primary w-full md:w-1/2 px-5 rounded-lg py-5 flex flex-col gap-5">
                    <img src={property.agent.image} alt="" className='h-32 w-32'/>
                    {/* <div className="">
                        <h3 className="text-xl font-bold mb-2 text-white">{property.agent.name}</h3>
                    </div> */}
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py- border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <FaUser className='text-xl'/>
                            {property.agent.name || 'name'}
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <BsTelephoneInboundFill className='text-xl'/>
                            <p>{property.agent.phone || 'Bedroom'}</p>
                        </button>
                        <button className='flex flex-col items-start justify-center gap-1 px-3 py-3 border-[#262626] border-2 rounded-md text-white text-lg font-bold'>
                            <FaBath className='text-xl'/>
                            {property.bathrooms + '-Bathroom' || 'Bathroom'}
                        </button>
                    </div> 
                </div>
            </div>
            <div className="mt-10 md:flex md:gap-10 lg:gap-x-10 font-urbanist">
                <div className="md:w-2/5 lg:w-3/5">
                    <h2 className="text-white font-urbanist text-4xl font-semibold'">Let&apos;s Make it Happen</h2>
                    <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
                        Ready to take the first step toward your dream property? Fill out the form below, 
                        and our real estate wizards will work their magic to find your perfect match. 
                        Don&apos;t wait; let&apos;s embark on this exciting journey together.
                    </p>
                </div>
                <form action="" onSubmit={handleSubmit} className="mt-10 md:mt-0 bg-nav-primary p-8 rounded-lg shadow-lg ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label className="text-white mb-2 font-semibold">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"  
                                    value={formData.firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    required />
                        </div>
                        <div>
                            <label className="text-white mb-2 font-semibold">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none" 
                                    value={formData.lastName}
                                    name="lastName"
                                    onChange={handleChange}
                                    required/>
                        </div>
                        <div>
                            <label className="text-white mb-2 font-semibold">Email</label>
                            <input type="email" placeholder="Enter Email" className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none" 
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                                required/>
                        </div>
                        <div>
                            <label className="text-white mb-2 font-semibold">Country</label>
                            <input type="text" placeholder="Enter Country of Origin" className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none" 
                                value={formData.location}
                                name='location'
                                onChange={handleChange}
                                required/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="text-white mb-2 font-semibold">Selected Property</label>
                        <p className="flex items-center justify-between w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none">
                            {property.name}
                            <IoLocation />                        </p>
                    </div>
                    <div className="mt-4">
                        <label className="text-white mb-2">Additional Info</label>
                        <textarea placeholder="Enter your Message here." className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                            value={formData.message}
                            name="message"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" required className="form-checkbox text-yellow-primary" />
                        <label className="ml-2 text-gray-400">
                            I agree with <a href="#" className="text-yellow-primary">Terms of Use</a> and <a href="#" className="text-yellow-primary">Privacy Policy</a>
                        </label>
                    </div>
                    {submitState && <p className="text-red-500">{submitState}</p>}
                    <button className="bg-yellow-primary w-full py-3 text-white rounded-lg text-lg font-semibold">
                        Send Your Message
                    </button>
                </form>
            </div>
        </div>
        <Cta />
        <Footer />
    </div>
  )
}

export default PropertiesDetails