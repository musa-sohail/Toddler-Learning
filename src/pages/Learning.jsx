
import React from 'react';
import { useParams } from 'react-router-dom';
const Learning = () => {
  const { serviceName } = useParams();

  return (
    <div className="mx-auto py-24 sm:py-32 max-w-2xl lg:text-center">
      <h1 className="text-3xl font-bold tracking-tight text-indigo-700">Welcome to {serviceName}</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Here you will embark on an exciting journey to explore {serviceName.toLowerCase()} in-depth. Immerse yourself in engaging lessons and hands-on activities that cover various aspects of {serviceName.toLowerCase()}. Get ready for an educational and enjoyable learning experience!
      </p>
    </div>
  );
};

export default Learning;
