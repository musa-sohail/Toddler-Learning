import React from 'react';

const Lcard = ({ leftImage, rightImage }) => {
  return (
    <div className="container mx-auto py-8 my-10 flex justify-center">
      <div className="bg-transparent rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300" style={{ width: '75%', height: '300px' }}>
        <div className="flex h-full">
          <div className="w-1/2 p-6 flex border-4 border-blue-300 border-opacity-50 hover:border-blue-400 transition duration-300 transform hover:-translate-x-2 hover:scale-105">
            <img className="w-64 h-auto object-cover rounded-lg" src={leftImage} alt="Left" />
          </div>
          <div className="w-1/2 p-6 flex justify-end border-4 border-blue-300 border-opacity-50 hover:border-blue-400 transition duration-300 transform hover:translate-x-2 hover:scale-105">
            <img className="w-64 h-auto object-cover rounded-lg" src={rightImage} alt="Right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lcard;
