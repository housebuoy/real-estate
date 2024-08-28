import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const data = [
    {
        id: 1,
        heading: 'How do I search for properties on goldFern?',
        body: "Use our user-friendly search tools to find properties that match your criteria.",
    },
    {
        id: 2,
        heading: 'What documents do I need to sell my property through goldFern?',
        body: "Find out about the necessary documentation for listing your property with us.",
    },
    {
        id: 3,
        heading: 'How can I contact an Estatein agent?',
        body: "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
        id: 4,
        heading: 'What is the process of buying a property through goldFern?',
        body: "Understand the steps involved in purchasing a property with our platform.",
    },
    {
        id: 5,
        heading: 'Are there any fees for using goldFern?',
        body: "Learn about any potential costs associated with using our services.",
    },
    {
        id: 6,
        heading: 'How do I list my property on goldFern?',
        body: "Get a step-by-step guide on how to list your property for sale on our platform.",
    },
];



const Faqs = () => {
    const randomClient = shuffleArray([...data])

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
                <h1 className='text-white font-urbanist text-4xl font-semibold'>Frequently Asked Questions</h1>
                <div className="flex justify-between">
                    <p className='font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5'>Find answers to common questions about GoldFern&apos; services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.</p>
                </div>                
            </div>
            <div className="container mx-auto py-5">
            <Slider {...settings}>
            {randomClient.map(property => (
                <div key={property.id} className="p-2 flex flex-row">
                    <div className="bg-nav-secondary border-[#262626] border-2 p-6 rounded-lg md:h-60  ">
                        <h3 className="text-xl font-bold mb-4 text-white">{property.heading || 'Property Name'}</h3>
                        <p className="text-white">{property.body || 'Property Description'}</p>
                        <button className='px-3 py-2 border-[#262626] border-2  rounded text-white mt-5'>
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
        </div>
  )
}

export default Faqs