import Cta from "../components/CTA"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import about from '../assets/about.jpg'
import { FeatureCard, StatsCard } from "./Home"
import { FaStar } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { housesData } from "../components/data"
import { BsTelephoneInboundFill } from "react-icons/bs";



const AboutUs = () => {

  const features = [
    { icon: <FaStar />, title: 'Trust is the cornerstone of every successful real estate transaction.' },
    { icon: <BsMortarboardFill />, title: 'We set the bar high for ourselves. From the properties we list to the services we provide.' },
    { icon: <MdWork />, title: 'We are dedicated to providing you with the highest level of service, professionalism, and support.' },
    { icon: <HiMiniUserGroup />, title: 'Your dreams and needs are at the center of our universe. We listen, understand.' },
  ];

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
    <div className="bg-nav-secondary">
        <NavBar />
        <div className="">
          <div className="container mx-auto px-10 py-8 md:flex items-center gap-5">
            <div className="py-10">
              <h2 className="text-white font-urbanist text-4xl font-semibold'">Our Journey</h2>
              <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
              </p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 mt-10 mb-">
                  <StatsCard number={200} label="Happy Customers" />
                  <StatsCard number={10000} label="Properties For Clients" />
                  <StatsCard number={16} label="Years of Experience" />
              </div>
            </div>
            <div className="">
              <img src={about} alt="" className="rounded-md"/>
            </div>

          </div>
          <div className="container mx-auto px-10 py-8 items-center gap-5">
            <div className="py-10">
              <h2 className="text-white font-urbanist text-4xl font-semibold'">Our Values</h2>
              <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
              </p>
            </div>
            <div className="bg-nav-secondary py-2 border-[#262626] border-4 shadow-md rounded-lg">
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-2">
                {features.map((feature, index) => (
                  <FeatureCard key={index} icon={feature.icon} title={feature.title} />
                ))}
              </div>
            </div> 
          </div>
          <div className="container mx-auto px-10 py-8 items-center gap-5">
            <div className="py-10">
              <h2 className="text-white font-urbanist text-4xl font-semibold'">Meet the Team</h2>
              <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
                At Gold Fern, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
              </p>
            </div>
            <Slider {...settings}>
            {housesData.map(property => (
                <div key={property.id} className="p-2">
                    <div className="bg-nav-secondary border-[#262626] border-2 p-6 rounded-lg">
                        <img
                            className="rounded-md mb-4 h-3/5"
                            src={property.agent.image || 'https://via.placeholder.com/300'}
                            alt={property.agent.name + '\'s image' || 'Property'}
                        />
                        <h3 className="text-xl font-bold mb-1 text-white">{property.agent.name || 'Agent\'s Name'}</h3>
                        <p className="text-white">{property.agent.role || 'Agent'}</p>                        
                        <div className="flex items-center text-white text-sm gap-3 mt-2">
                          <BsTelephoneInboundFill />
                            <div className=' text-gray-300 text-base font-normal'>
                                {/* <p className="text-white font-semibold text-xl mt-1">Phone</p> */}
        
                                {property.agent.phone || '000'}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
          </div>
        </div>
        <Cta />
        <Footer />
    </div>
  )
}

export default AboutUs