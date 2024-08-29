import heroImage from '../assets/heroImage.png'
import CountUp from 'react-countup';
import NavBar from "../components/NavBar"
import FeaturedProperties from "../components/FeaturedProperties"
import { FaHome, FaUnlock, FaBuilding, FaLightbulb } from 'react-icons/fa';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/FAQ';
import Cta from '../components/CTA';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

export const StatsCard = ({ number, label }) => {
  return (
    <div className="bg-[#191919] text-white px-3 py-2 rounded-lg shadow-md">
      <h3 className="text-3xl font-bold">
        <CountUp start={0} end={number} duration={2.5} />
        +
      </h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

export const FeatureCard = ({ icon, title }) => {
  return (
    <div className="bg-nav-primary text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 hover:bg-zinc-800 transition duration-300 ease-in-out">
      <div className="text-yellow-primary text-3xl">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
    </div>
  );
};

const features = [
  { icon: <FaHome />, title: 'Find Your Dream Home' },
  { icon: <FaUnlock />, title: 'Unlock Property Value' },
  { icon: <FaBuilding />, title: 'Effortless Property Management' },
  { icon: <FaLightbulb />, title: 'Smart Investments. Informed Decisions' },
];

const Home = () => {
  return (
    <>
        <NavBar />
        <div className="bg-nav-secondary">
          <div className="bg-nav-secondary sm:min-h-screen flex flex-col-reverse md:flex-row justify-between px-4 py-4 md:px-0 md:py-0">
            <div className="md:pl-12 md:pt-10 md:pr-2 mt-5 md:mt-0">
              <h1 className='font-urbanist font-semibold text-white text-6xl'>Discover Your Dream Property with GoldFern.</h1>
              <p className='font-urbanist text-white text-lg font-medium mt-6'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
              <div className="flex flex-col md:flex-row gap-2 font-urbanist font-semibold mt-7">
                <button className='px-3 py-2 border-[#262626] border-2  rounded text-white'>Learn More</button>
                <button className='bg-yellow-primary px-3 py-2 text-white rounded'>Browse Properties</button>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 mt-10 mb-">
                <StatsCard number={200} label="Happy Customers" />
                <StatsCard number={10000} label="Properties For Clients" />
                <StatsCard number={16} label="Years of Experience" />
            </div>
            </div>          
            <img src={heroImage} alt="heroImage" className='rounded-lg  md:rounded-none md:w-1/2 h-5/6 '/>
          </div>
          <div className="bg-nav-secondary mx-10 py-2 border-[#262626] border-4 shadow-md rounded-lg">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 px-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
              ))}
            </div>
          </div> 
          <FeaturedProperties />
          <Testimonials />
          <Faqs />
          <Cta />
          <Footer />
        </div>       
    </>
  )
}

StatsCard.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string,
};

FeatureCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default Home

