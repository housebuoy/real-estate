import { IoBed } from "react-icons/io5";
import { FaBath, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { PiCastleTurretFill } from "react-icons/pi";
import {housesData } from '../components/data'
import { IoLocation } from "react-icons/io5";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const RenderProperties = ({
    selectedCountry,
    selectedType,
    selectedPriceRange,
    selectedPropertySize,
    selectedBuildYear,
    searchQuery
}) => {
    const filteredProperties = housesData.filter(property => {
        const matchesCountry = selectedCountry === '' || property.country === selectedCountry;
        const matchesType = selectedType === '' || property.type === selectedType;
    
        const matchesPrice = selectedPriceRange === '' || 
            (selectedPriceRange === 'Under $500,000' && property.price < 500000) ||
            (selectedPriceRange === '$500,000 - $1,000,000' && property.price >= 500000 && property.price <= 1000000) ||
            (selectedPriceRange === 'Over $1,000,000' && property.price > 1000000);
    
        const matchesSize = selectedPropertySize === '' || 
            (selectedPropertySize === 'Under 1000 sqft' && property.size < 1000) ||
            (selectedPropertySize === '1000 - 2000 sqft' && property.size >= 1000 && property.size <= 2000) ||
            (selectedPropertySize === 'Over 2000 sqft' && property.size > 2000);
    
        const matchesYear = selectedBuildYear === '' || 
            (selectedBuildYear === '2010 - 2019' && property.year >= 2010 && property.year <= 2019) ||
            (selectedBuildYear === '2020 - 2029' && property.year >= 2020 && property.year <= 2029);

        const searchParams = (property.name && property.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (property.description && property.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (property.country && property.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (property.location && property.location.toLowerCase().includes(searchQuery.toLowerCase()))

        return matchesCountry && matchesType && matchesPrice && matchesSize && matchesYear && searchParams;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the filteredProperties array to get only the items for the current page
    const currentProperties = filteredProperties.slice(startIndex, endIndex);
     

  return (
        <div className="mt-14">
            <div className="">
                <h1 className='text-white font-urbanist text-4xl font-semibold'>Discover a World of Possibilities</h1>
                <div className="flex justify-between">
                    <p className='font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5'>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.</p>
                    <button className='px-3 hidden py-2 border-[#262626] border-2  rounded text-white'>
                        View Properties
                    </button>
                </div>                
            </div>
            <div className="container py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {currentProperties.length > 0 ? (
                        currentProperties.map(property => (
                        <div key={property.id} className="p-2">
                            <div className="bg-nav-secondary border-[#262626] border-2 p-6 rounded-lg">
                                <img
                                    className="h-56 rounded-md mb-4 w-full"
                                    src={property.image || 'https://via.placeholder.com/300'}
                                    alt={property.name || 'Property'}
                                />
                                <button className='flex items-center justify-center gap-2 px-3 py-1 my-2 border-[#262626] border-2 rounded-full text-white text-xs'>
                                    <IoLocation />
                                    {property.country || 'Villa'}
                                </button>
                                <h3 className="text-xl font-bold mb-2 text-white">{property.name || 'Property Name'}</h3>
                                <p className="text-gray-400">{property.description || 'Property Description'}</p>
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <button className='flex items-center justify-center gap-1 px-3 py-1 border-[#262626] border-2 rounded-full text-white text-[9px]'>
                                        <IoBed />
                                        {property.bedrooms + '-Bedroom' || 'Bedroom'}
                                    </button>
                                    <button className='flex items-center justify-center gap-2 px-3 py-1 border-[#262626] border-2 rounded-full text-white text-[9px]'>
                                        <FaBath />
                                        {property.bathrooms + '-Bathroom' || 'Bathroom'}
                                    </button>
                                    <button className='flex items-center justify-center gap-2 px-3 py-1 border-[#262626] border-2 rounded-full text-white text-[9px]'>
                                        <PiCastleTurretFill />
                                        {property.type || 'Villa'}
                                    </button>
                                </div>
                                <div className="flex mt-4 px-3 gap-9 items-end">
                                    <div className='text-white font-semibold text-xl'>
                                        <p className="text-gray-300 text-base font-normal">Price</p>
                                        {property.price || '$0'}
                                    </div>
                                    <Link to={`/properties/${property.id}`}>
                                        <button className='bg-yellow-primary px-6 md:px-10 py-2 text-white rounded'>View Details</button>
                                    </Link>                                    
                                </div>
                            </div>
                        </div>
                    ))) : (
                    <div className="text-center text-white font-bold mt-6 text-4xl bg-nav-primary py-10">
                        <p>Oops!!!</p>
                        No property found with the search parameter and filter
                    </div>
            )}
                </div>
                <div className="flex justify-end mt-2 gap-6">
                    {currentPage !== 1 && (
                        <div className="flex justify-end gap-6">
                            <button 
                                className="bg-yellow-primary px-2 py-2 text-white rounded"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                <FaChevronCircleLeft />
                            </button>
                        </div>
                    )}
                    {endIndex < filteredProperties.length && (
                        <div className="flex justify-end gap-6">
                            <button 
                                className="bg-yellow-primary px-2 py-2 text-white rounded"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                <FaChevronCircleRight />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )

}

RenderProperties.propTypes = {
    selectedCountry: PropTypes.string,
    setSelectedCountry: PropTypes.func,
    selectedType: PropTypes.string,
    setSelectedType: PropTypes.func,
    selectedPriceRange: PropTypes.string,
    setSelectedPriceRange: PropTypes.func,
    selectedPropertySize: PropTypes.string,
    setSelectedPropertySize: PropTypes.func,
    selectedBuildYear: PropTypes.string,
    searchQuery: PropTypes.string,
    setSelectedBuildYear: PropTypes.func,
    groupedPriceRanges: PropTypes.arrayOf(PropTypes.string),
    groupedPropertySizes: PropTypes.arrayOf(PropTypes.string),
    groupedBuildYears: PropTypes.arrayOf(PropTypes.string),
};


export default RenderProperties