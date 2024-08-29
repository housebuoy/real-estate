import Cta from "../components/CTA"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import about from '../assets/austin-distel-jpHw8ndwJ_Q-unsplash.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { housesData } from "../components/data"
import { BsTelephoneInboundFill } from "react-icons/bs";
import { useState } from "react"
import emailjs from 'emailjs-com';


const Contact = () => {

  const [submitState, setSubmitState] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    propertyType: '',
    numBathrooms: '',
    numBedrooms: '',
    budget: '',
    message: ''
});

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
          propertyType: '',
          numBathrooms: '',
          numBedrooms: '',
          budget: '',
          message: ''
      });
  })
  .catch((error) => {
      console.error('Error sending email:', error.text);
      setSubmitState('Error sending email:', error.text)
  });

  };

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
            <div className="py-10 md:w-1/2">
              <h2 className="text-white font-urbanist text-5xl font-bold">Let&apos;s Connect</h2>
              <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
                We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.
              </p>
            </div>
            <div className="md:w-3/5 md:flex justify-end ">
              <img src={about} alt="" className="rounded-md w-full"/>
            </div>

          </div>
          <div className="container mx-auto px-10 py-8 items-center gap-5">
            <div className="py-10">
              <h2 className="text-white font-urbanist text-4xl font-semibold'">Get in touch with Gold Fern</h2>
              <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
              Welcome to Gold Fern&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.
              </p>
            </div>
            <form className="bg-nav-primary p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-col gap-6 mb-6">
        <div>
            <label className="text-white mb-2">First Name</label>
            <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label className="text-white mb-2">Last Name</label>
            <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label className="text-white block mb-2">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label className="text-white mb-2">Phone Number</label>
            <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>
    </div>
    <div className="col-span-4 mb-6">
        <label className="text-white mb-2">Subject</label>
        <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
            required
        />
    </div>
    <div className="col-span-4 mb-6">
        <label className="text-white mb-2">Message</label>
        <textarea
            name="message"
            placeholder="Enter your Message here."
            className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
        ></textarea>
    </div>
    <div className="flex items-center mb-6">
        <input type="checkbox" required className="form-checkbox text-yellow-primary" />
        <label className="ml-2 text-gray-400">
            I agree with <a href="#" className="text-yellow-primary">Terms of Use</a> and <a href="#" className="text-yellow-primary">Privacy Policy</a>
        </label>
    </div>
    {submitState && <p className="text-red-500">{submitState}</p>}
    <button type="submit" className="bg-yellow-primary w-full py-3 text-white rounded-lg text-lg font-semibold">
        Send Your Message
    </button>
</form>

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

export default Contact