// Select.jsx

import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const Select = ({ letter }) => {
  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineEdit className="text-indigo-500 mr-2" size={24} />
          <h5 className="mb-2 text-2xl font-bold leading-tight text-gray-900">{letter}</h5>
        </div>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Select;
