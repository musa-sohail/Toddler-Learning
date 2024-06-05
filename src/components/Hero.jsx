import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import {
  GiBookshelf,
  GiEarthAmerica,
  GiAbacus,
  GiDogHouse,
  GiTreeBranch,
  GiSofa,
} from 'react-icons/gi';

const features = [
  {
    name: 'Alphabets Learning',
    description:
      'Embark on a journey to explore the fascinating world of alphabets. Develop fundamental language skills through engaging content and interactive activities.',
    icon: GiBookshelf,
  },
  {
    name: 'Urdu Learning',
    description:
      'Immerse yourself in the beauty of the Urdu language. Enhance your linguistic abilities with exciting Urdu learning resources, lessons, and cultural insights.',
    icon: GiEarthAmerica,
  },
  {
    name: 'Maths Learning',
    description:
      'Discover the wonders of mathematics through interactive and fun learning experiences. Solve problems, explore concepts, and build a strong foundation in mathematics.',
    icon: GiAbacus,
  },
  {
    name: 'Animal Exploration',
    description:
      'Embark on a journey to learn about different animals from around the world. Explore their habitats, behaviors, and unique characteristics in an engaging and informative way.',
    icon: GiDogHouse,
  },
  {
    name: 'Botanical Adventures',
    description:
      'Explore the fascinating world of plants and discover their unique features. Learn about different types of plants, their lifecycle, and their importance in the ecosystem.',
    icon: GiTreeBranch,
  },
  {
    name: 'Furniture Exploration',
    description:
      'Learn about various types of furniture and their uses in daily life. Explore the design, functionality, and cultural significance of different pieces of furniture.',
    icon: GiSofa,
  },
];

const Hero = () => {
  const typedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      strings: features.map((feature) => feature.name),
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1500,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const handleExploreNow = () => {
    navigate('/services');
  };

  return (
    <div className="overflow-hidden bg-white py-16 sm:py-24"> {/* Adjusted top padding */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-sky-600">
                Welcome to <span ref={typedRef}></span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ignite the curiosity of your toddler with our diverse range of learning experiences. From mastering alphabets
                to exploring the wonders of the Urdu language, mathematics, animals, plants, and furniture, we provide a
                platform for joyful and interactive learning. Our interactive modules are designed to engage young minds and
                foster a love for learning. With a focus on foundational skills and knowledge, we help toddlers develop the
                confidence and curiosity they need to succeed in the future. Join us on a journey of discovery and education
                tailored specifically for your child's growth and development.
              </p>
              <button
                onClick={handleExploreNow}
                className="mt-6 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-sky-800"
              >
                Explore Now
              </button>
            </div>
          </div>
          <img
            src="images/home.jpg"  // Replace with your actual image path
            alt="Learning"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:mr-8"
            width={2432}
            height={1442}
          />
        </div>
        <div className="mx-auto py-10 mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative pl-16 p-6 rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105 bg-white"
              >
                <dt className="text-base font-semibold leading-7 text-sky-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;
