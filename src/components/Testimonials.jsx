import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaStarSolid } from "react-icons/lia";
import { FaCircleUser } from "react-icons/fa6";

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
        userName: 'Emelie Thomson',
        location: 'USA, Florida',
        numberOfStars: 4,
        heading: 'Efficient and Reliable',
        body: "GoFern provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    },
    {
        id: 2,
        userName: 'Wade Warren',
        location: 'USA, California',
        numberOfStars: 5,
        heading: 'Exceptional Service!',
        body: "Our experience with GoldFern was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
        id: 3,
        userName: 'John Manso',
        location: 'Ghana, Accra',
        numberOfStars: 5,
        heading: 'Trusted Advisors',
        body: "The team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    },
    {
        id: 4,
        userName: 'Sophia Lee',
        location: 'USA, New York',
        numberOfStars: 5,
        heading: 'Seamless Process',
        body: "GoldFern made the home-buying process so easy and stress-free. We found our perfect home thanks to their expertise and support. Highly recommended!",
    },
    {
        id: 5,
        userName: 'Michael Johnson',
        location: 'USA, Texas',
        numberOfStars: 4,
        heading: 'Great Experience',
        body: "Our experience with GoFern was positive from start to finish. They provided valuable insights and were always available to answer our questions.",
    },
    {
        id: 6,
        userName: 'Linda Brown',
        location: 'Canada, Toronto',
        numberOfStars: 5,
        heading: 'Outstanding Service',
        body: "I can't thank the team enough for their dedication. They went above and beyond to ensure we found the right property. Their service is unmatched!",
    },
];


const Testimonials = () => {
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
                <h1 className='text-white font-urbanist text-4xl font-semibold'>Testimonials</h1>
                <div className="flex justify-between">
                    <p className='font-urbanist text-white text-base font-medium mt-2 w-full md:w-4/5'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>                
            </div>
            <div className="container mx-auto py-10">
            <Slider {...settings}>
            {randomClient.map(property => (
                <div key={property.id} className="p-2">
                    <div className="bg-nav-secondary border-[#262626] border-2 p-6 rounded-lg">
                        <div className="flex text-yellow-primary text-2xl mb-5">
                            {[...Array(property.numberOfStars)].map(() => (
                                < LiaStarSolid key={property.id} />
                            ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{property.heading || 'Property Name'}</h3>
                        <p className="text-white">{property.body || 'Property Description'}</p>
                        <div className="mt-5 flex text-white gap-4 items-center">
                            <FaCircleUser className=" text-4xl" />
                            <div className="">
                                <h1>{property.userName}</h1>
                                <h2>{property.location}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
        </div>
  )
}

export default Testimonials