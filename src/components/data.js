// import house images
import House1 from '../assets/img/houses/house1.png';
import House2 from '../assets/img/houses/house2.png';
import House3 from '../assets/img/houses/house3.png';
import House4 from '../assets/img/houses/house4.png';
import House5 from '../assets/img/houses/house5.png';
import House6 from '../assets/img/houses/house6.png';
import House7 from '../assets/img/houses/house7.png';
import House8 from '../assets/img/houses/house8.png';
import House9 from '../assets/img/houses/house9.png';
import House10 from '../assets/img/houses/house10.png';
import House11 from '../assets/img/houses/house11.png';
import House12 from '../assets/img/houses/house12.png';
// import house large images
import House1Lg from '../assets/img/houses/house1lg.png';
import House2Lg from '../assets/img/houses/house2lg.png';
import House3Lg from '../assets/img/houses/house3lg.png';
import House4Lg from '../assets/img/houses/house4lg.png';
import House5Lg from '../assets/img/houses/house5lg.png';
import House6Lg from '../assets/img/houses/house6lg.png';
import House7Lg from '../assets/img/houses/house7lg.png';
import House8Lg from '../assets/img/houses/house8lg.png';
import House9Lg from '../assets/img/houses/house9lg.png';
import House10Lg from '../assets/img/houses/house10lg.png';
import House11Lg from '../assets/img/houses/house11lg.png';
import House12Lg from '../assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from '../assets/img/apartments/a1.png';
import Apartment2 from '../assets/img/apartments/a2.png';
import Apartment3 from '../assets/img/apartments/a3.png';
import Apartment4 from '../assets/img/apartments/a4.png';
import Apartment5 from '../assets/img/apartments/a5.png';
import Apartment6 from '../assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from '../assets/img/apartments/a1lg.png';
import Apartment2Lg from '../assets/img/apartments/a2lg.png';
import Apartment3Lg from '../assets/img/apartments/a3lg.png';
import Apartment4Lg from '../assets/img/apartments/a4lg.png';
import Apartment5Lg from '../assets/img/apartments/a5lg.png';
import Apartment6Lg from '../assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from '../assets/img/agents/agent1.png';
import Agent2 from '../assets/img/agents/agent2.png';
import Agent3 from '../assets/img/agents/agent3.png';
import Agent4 from '../assets/img/agents/agent4.png';
import Agent5 from '../assets/img/agents/agent5.png';
import Agent6 from '../assets/img/agents/agent6.png';
import Agent7 from '../assets/img/agents/agent7.png';
import Agent8 from '../assets/img/agents/agent8.png';
import Agent9 from '../assets/img/agents/agent9.png';
import Agent10 from '../assets/img/agents/agent10.png';
import Agent11 from '../assets/img/agents/agent11.png';
import Agent12 from '../assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'Seaside Serenity Villa',
    description:
      'A stunning 4-bedroom, 3-bathroom villa with ocean views.',
    image: House1,
    imageLg: House1Lg,
    country: 'Ghana',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2023',
    price: '$110,000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
      role: 'Project Manager',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'Urban Chic Apartment',
    description:
      "A modern 2-bedroom apartment in the heart of the city.",
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '$140,000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
      role: 'Market Analyst',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'Countryside Cottage',
    description:
      "A charming 3-bedroom cottage with a large garden.",
    image: House3,
    imageLg: House3Lg,
    country: 'France',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2020',
    price: '$170,000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
      role: 'Chief Executive Officer',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'Mountain Retreat',
    description:
      "A luxurious 5-bedroom retreat with stunning mountain views.",
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: "$900,000",
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
      role: 'Attorney',
    },
  },
  {
    id: 5,
    type: 'House',
    name: "Beachfront Bungalow",
    description:
      "A cozy 3-bedroom bungalow right on the beach.",
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2020',
    price: "$900,000",
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
      role: 'Head of Interior Designs',
    },
  },
  {
    id: 6,
    type: 'Cabin',
    name: "Modern Loft",
    description:
      "A stylish 2-bedroom loft with city skyline views.",
    image: House6,
    imageLg: House6Lg,
    country: 'Liberia',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: "$1,000,000",
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
      role: 'Property Manager',
    },
  },
  {
    id: 7,
    type: 'Mansion',
    name: "Historic Mansion",
    description:
      "A grand 6-bedroom mansion with historic charm.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2022',
    price: "$3,500,000",
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
      role: 'Maintainence Engineer',
    },
  },
  {
    id: 8,
    type: 'Villa',
    name: "Suburban Family Home",
    description:
      "A spacious 4-bedroom home perfect for a family.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Finland',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: "$600,000",
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
      role: 'Financial Analyst',
    },
  },
  {
    id: 9,
    type: 'Condo',
    name:  "Light House Condo",
    description:
      "A high-end 3-bedroom condo with ocean views.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Ghana',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: "$850,000",
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
      role: 'Head of Settlement Planning',
    },
  },
  {
    id: 10,
    type: 'Farmhouse',
    name: "Rustic Farmhouse",
    description:
      "A high-end 3-bedroom condo with ocean views.",
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: "$850,000",
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Cabin',
    name: "Lakeview Cabin",
    description:
      "A cozy 4-bedroom cabin with breathtaking lake views.",
    image: House8,
    imageLg: House8Lg,
    country: 'France',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: "$1,100,000",
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: "Studio",
    name: "Downtown Studio",
    description:
      "A chic studio apartment in the heart of downtown.",
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: "$400,000",
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: "Villa",
    name: "Tropical Villa",
    description:
      "A stunning 5-bedroom villa with private beach access.",
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: "$2,200,000",
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: "Eco-Friendly Home",
    description:
      "An eco-friendly 3-bedroom home with solar panels.",
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: "$950,000",
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Apartment',
    name: 'Penthouse Suite',
    description:
      "A luxurious 4-bedroom penthouse with city views.",
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: "$3,000,000",
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Country Estate',
    description:
      "A grand 6-bedroom estate with sprawling grounds.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: "$800,000",
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Villa',
    name: 'City Loft',
    description:
      "A modern 2-bedroom loft with skyline views and security on a hill.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: "$1,500,000",
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    name: 'Beach House',
    description:
      "A beautiful 4-bedroom house with beach access.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '4',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: "$2,000,000",
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
