
import { FiSearch } from 'react-icons/fi';
import { IoLocation } from "react-icons/io5";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaRulerCombined, FaCalendarAlt, FaFilter } from "react-icons/fa";
import {housesData } from '../components/data'
import PropTypes from 'prop-types';
import { useState } from 'react';


const SearchTool = ({
    selectedCountry,
    setSelectedCountry,
    selectedType,
    setSelectedType,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedPropertySize,
    setSelectedPropertySize,
    selectedBuildYear,
    setSelectedBuildYear,
    searchQuery,
    setSearchQuery

}) => {
    const [showFilters, setShowFilters] = useState(false);
    // Grouping logic for the price range, property size, and build year
    const groupedPriceRanges = ['Under $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'];
    const groupedPropertySizes = ['Under 1000 sqft', '1000 - 2000 sqft', 'Over 2000 sqft'];
    const groupedBuildYears = ['2010 - 2019', '2020 - 2029'];

  return (
    <div className=' font-urbanist font-medium sm:py-6 py-3 bg-nav-primary rounded-md'>
        <div className="max-w-5xl mx-auto flex items-center space-x-4 ">
            {/* Search input */}
            <div className="flex-grow">
                <input
                    type="text"
                    placeholder="Search For A Property"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 rounded-lg bg-nav-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-primary"
                />
            </div>
            {/* Search button */}
            <button className="flex items-center px-6 py-3 rounded-lg bg-yellow-primary text-white font-semibold">
                <FiSearch className="mr-2 text-2xl sm:text-base" />
                <p className='hidden sm:block'>Find Property</p>
            </button>
            {/* Filter icon button for small screens */}
            <div className="flex justify-end mt-2 sm:hidden bg-nav-secondary px-6 py-5">
                <button
                    className=" flex items-center  rounded-lg text-white text-lg"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FaFilter />
                </button>
        </div>
        </div>

        

        {/* Filter options */}
        <div className={`${showFilters ? 'block' : 'hidden'} grid grid-cols-2 gap-y-3 gap-x-2 sm:flex  justify-between items-center mt-4 text-white px-2 font-light text-sm `}>
            <div className="flex items-center bg-nav-secondary px-4 py-3 rounded-lg sm:w-1/5">
                <span className="mr-2"><IoLocation /></span>
                <select
                    className="bg-inherit w-full focus:outline-none"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option value="">Select Country</option>
                    {[...new Set(housesData.map(property => property.country))].map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            <div className="flex items-center bg-nav-secondary px-4 py-3 rounded-lg sm:w-1/5">
                <span className="mr-2"><FaHouseChimneyWindow /></span>
                <select
                    className="bg-inherit w-full focus:outline-none"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    {[...new Set(housesData.map(property => property.type))].map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="flex items-center bg-nav-secondary px-4 py-3 rounded-lg sm:w-1/5">
                <span className="mr-2"><MdOutlinePriceChange /></span>
                <select className="bg-inherit w-full focus:outline-none" 
                    onChange={(e) => setSelectedPriceRange(e.target.value)} value={selectedPriceRange}>
                    <option value="">Select Price Range</option>
                        {groupedPriceRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                        ))}
                </select>
            </div>

            <div className="flex items-center bg-nav-secondary px-4 py-3 rounded-lg sm:w-1/5">
                <span className="mr-2"><FaRulerCombined /></span>
                <select className="bg-inherit w-full focus:outline-none" 
                    onChange={(e) => setSelectedPropertySize(e.target.value)} value={selectedPropertySize}>
                    <option value="">Select Property Size</option>
                        {groupedPropertySizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
            </div>

            <div className="flex items-center bg-nav-secondary px-4 py-3 rounded-lg sm:w-1/5">
                <span className="mr-2"><FaCalendarAlt /></span>
                <select className="bg-inherit w-full focus:outline-none"
                 onChange={(e) => setSelectedBuildYear(e.target.value)} value={selectedBuildYear}>
                    <option value="">Select Build Year</option>
                    {groupedBuildYears.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>
  )
}

SearchTool.propTypes = {
    selectedCountry: PropTypes.string.isRequired,
    setSelectedCountry: PropTypes.func.isRequired,
    selectedType: PropTypes.string.isRequired,
    setSelectedType: PropTypes.func.isRequired,
    selectedPriceRange: PropTypes.string.isRequired,
    setSelectedPriceRange: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    selectedPropertySize: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSelectedPropertySize: PropTypes.func.isRequired,
    selectedBuildYear: PropTypes.string.isRequired,
    setSelectedBuildYear: PropTypes.func.isRequired,
    groupedPriceRanges: PropTypes.arrayOf(PropTypes.string).isRequired,
    groupedPropertySizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    groupedBuildYears: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchTool