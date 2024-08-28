import { Link } from "react-router-dom"
import Properties from "../pages/Properties"

const Cta = () => {
  return (
    <div
        className=" bg-cover bg-center bg-['url()] w-full py-10 px-10 flex flex-col md:flex-row  items-center justify-center"
        style={{ backgroundImage: "url(/public/images/cta-banner.png)" }}
    >
         <div className="md:w-4/5">
            <h1 className='text-white font-urbanist text-4xl font-semibold'>Start Your Real Estate Journey Today</h1>
            <div className="flex justify-between">
                <p className='font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5'>Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>                
        </div>
        <Link to="/properties">
          <button className='md:w-auto  md:px-3 w-full py-2 bg-yellow-primary  rounded text-white mt-5'>
              Explore Properties
          </button>
        </Link>
    </div>
  )
}

export default Cta