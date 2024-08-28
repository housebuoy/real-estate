import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import RenderProperties from "../components/RenderProperties"
import SearchTool from "../components/SearchTool"
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Properties = () => {

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

    // const [sharedFilteredProps, setSharedFilteredProps] = useState('housesData');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedPropertySize, setSelectedPropertySize] = useState('');
    const [selectedBuildYear, setSelectedBuildYear] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [submitState, setSubmitState] = useState('');

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
  
    
  return (
    <div className="bg-nav-secondary">
        <NavBar />
        <div className="py-5 px-10">
            <div className="">
                <SearchTool 
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedPropertySize={selectedPropertySize}
                  setSelectedPropertySize={setSelectedPropertySize}
                  selectedBuildYear={selectedBuildYear}
                  setSelectedBuildYear={setSelectedBuildYear}
                  searchQuery ={searchQuery}
                  setSearchQuery ={setSearchQuery}
                />
            </div>
            <RenderProperties                 
              selectedCountry={selectedCountry}
              selectedType={selectedType}
              selectedPriceRange={selectedPriceRange}
              selectedPropertySize={selectedPropertySize}
              selectedBuildYear={selectedBuildYear}
              searchQuery ={searchQuery}
            />
        </div>
        <div className="container mx-auto px-10 py-8">
          <div className="py-10">
            <h2 className="text-white font-urbanist text-4xl font-semibold'">Let&apos;s Make it Happen</h2>
            <p className="font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5">
                Ready to take the first step toward your dream property? Fill out the form below, 
                and our real estate wizards will work their magic to find your perfect match. 
                Don&apos;t wait; let&apos;s embark on this exciting journey together.
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
                    <label className="text-white mb-2">Preferred Location</label>
                    <select
                        name="location"
                        className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Location</option>
                        {/* Add more options as needed */}
                        <option>Select Location</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Austrailia</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>Brazil</option>
                        <option>Japan</option>
                        <option>South Africa</option>
                        <option>France</option>
                        <option>Italy</option>
                        <option>India</option>
                        <option>Mexico</option>
                        <option>Spain</option>
                        <option>Liberia</option>
                        <option>Ghana</option>
                        <option>New Zealand</option>
                            {/* ... */}
                    </select>
                </div>
                <div>
                    <label className="text-white mb-2">Property Type</label>
                    <select
                        name="propertyType"
                        required
                        className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                        value={formData.propertyType}
                        onChange={handleChange}
                    >
                        <option value="">Select Property Type</option>
                        <option>Apartment</option>
                        <option>Condos</option>
                        <option>Villa</option>
                        <option>Townhouses</option>
                        <option>Duplexes</option>
                        <option>Lofts</option>
                        <option>Studios</option>
                        {/* ... */}
                    </select>
                </div>
                <div>
                    <label className="text-white mb-2">No. of Bathrooms</label>
                    <input
                        type="number"
                        name="numBathrooms"
                        className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                        placeholder="Enter no. of Bathrooms"
                        value={formData.numBathrooms}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-white mb-2">No. of Bedrooms</label>
                    <input
                        type="number"
                        name="numBedrooms"
                        className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                        placeholder="Enter no. of Bedrooms"
                        value={formData.numBedrooms}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="text-white mb-2">Budget</label>
                    <select
                        name="budget"
                        className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Budget</option>
                        <option>Under $100,000</option>
                        <option>$100,000 - $250,000</option>
                        <option>$250,000 - $500,000</option>
                        <option>$500,000 - $750,000</option>
                        <option>$750,000 - $1,000,000</option>
                        <option>$1,000,000 - $1,500,000</option>
                        <option>$1,500,000 - $2,000,000</option>
                        <option>$2,000,000 - $3,000,000</option>
                        <option>Over $3,000,000</option>
                        {/* ... */}
                    </select>
                </div>
            </div>
            <div className="col-span-4">
                <label className="text-white mb-2">Additional Info</label>
                <textarea
                    name="message"
                    placeholder="Enter your Message here."
                    className="w-full px-4 py-2 bg-nav-secondary text-white rounded-lg focus:outline-none"
                    value={formData.message}
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
            <button type="submit" className="bg-yellow-primary w-full py-3 text-white rounded-lg text-lg font-semibold">
                Send Your Message
            </button>
        </form>
</div>

        <Footer />
    </div>

  )
}

export default Properties