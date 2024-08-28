import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { PiCastleTurretFill } from "react-icons/pi";
import {housesData } from '../components/data'
import { Link } from "react-router-dom";


// Function to shuffle an array
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };


const FeaturedProperties = () => {
    const randomProperties = shuffleArray([...housesData]).slice(0, 6);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

  return (
        <div className="mt-14 px-10">
            <div className="">
                <h1 className='text-white font-urbanist text-4xl font-semibold'>Featured Properties</h1>
                <div className="flex justify-between">
                    <p className='font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through GoldFern. Click &quot;View Details&quot; for more information.</p>
                    <button className='px-3 hidden py-2 border-[#262626] border-2  rounded text-white'>
                        View Properties
                    </button>
                </div>                
            </div>
            <div className="container mx-auto py-10">
            <Slider {...settings}>
            {randomProperties.map(property => (
                <div key={property.id} className="p-2">
                    <div className="bg-nav-secondary border-[#262626] border-2 p-6 rounded-lg">
                        <img
                            className="h-56 rounded-md mb-4 w-full"
                            src={property.image || 'https://via.placeholder.com/300'}
                            alt={property.name || 'Property'}
                        />
                        <h3 className="text-xl font-bold mb-2 text-white">{property.name || 'Property Name'}</h3>
                        <p className="text-white">{property.description || 'Property Description'}</p>
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
                        <div className="flex mt-4 px-3 gap-9">
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
            ))}
        </Slider>
    </div>
        </div>
  )
}

export default FeaturedProperties