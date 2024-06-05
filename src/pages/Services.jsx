import React from 'react';
import Card from '../components/Card';

const Services = () => {
  const servicesData = [
    {
      heading: 'Alphabets Learning',
      para: 'Embark on a journey to master the fundamentals of language with engaging and interactive alphabet learning experiences.',
      img: 'images/alpha.jpg',
      targetPage: 'LearningABC'
    },
    {
      heading: 'Urdu Learning',
      para: 'Discover the beauty of the Urdu language through immersive learning modules and captivating activities. Here you will get deep knowledge about Urdu language.',
      img: 'images/urdu.png',
      targetPage: 'LearningUrdu'
    },
    {
      heading: 'Maths Learning',
      para: 'Delve into the world of numbers and problem-solving with our fun and educational mathematics learning programs.',
      img: 'images/maths.jpg',
      targetPage: 'LearningMaths'
    },
    {
      heading: 'Animal Exploration',
      para: 'Explore the diverse world of animals through exciting lessons and interactive experiences.',
      img: 'images/animal.jpg',
      targetPage: 'LearningAnimals'
    },
    {
      heading: 'Plant Exploration',
      para: 'Uncover the wonders of the plant kingdom with engaging lessons and hands-on plant exploration activities.',
      img: 'images/plant.jpg',
      targetPage: 'LearningPlants'
    },
    {
      heading: 'Furniture Exploration',
      para: 'Dive into the realm of furniture and design with creative and educational furniture exploration programs.',
      img: 'images/furniture.jpg',
      targetPage: 'LearningFurniture'
    },
  ];

  return (
    <div className="mx-auto px-6 lg:px-8 max-w-screen-xl">
      <div className="py-12 sm:py-12 lg:text-center">
        <h1 className="text-3xl font-bold tracking-tight text-sky-600">Our Services</h1>
        <p className="mt-6 text-lg leading-8 text-dark">
          Explore the exciting world of learning with our tailored services. Foster your toddler's curiosity as they embark on a journey to master alphabets, delve into the beauty of the Urdu language, unravel the mysteries of mathematics, and discover the wonders of animals, plants, and furniture. Our interactive platform ensures joyful and engaging learning experiences for your little ones.
        </p>
      </div>

      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Easy And Secure</span>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Cost And Time Effective</span>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Fast Learning</span>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Quizes Based On Study Material</span>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Heaven For Toddlers</span>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-6 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-600 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Reliable</span>
          </div>
        </div>
      </div>

      <div className="grid py-12 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            heading={service.heading}
            para={service.para}
            img={service.img}
            targetPage={service.targetPage}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
