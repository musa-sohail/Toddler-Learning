import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{ width: "68%" }}
      className="w-full container py-12 shadow-lg mx-auto bg-white"
    >
      <div className="mb-4">
        <button
          type="button"
          className="flex justify-between w-full p-4 text-left text-gray-700 bg-white rounded-lg focus:outline-none focus:bg-gray-100"
          onClick={() => toggleAccordion(0)}
        >
          <span className="font-bold">
            How to teach effectively?
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              activeIndex === 0 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            activeIndex === 0 ? "block" : "hidden"
          } p-4 text-gray-600`}
        >
          <p className="py-2">1. Use the touch screen (preffered).</p>
          <p className="py-2">
            2. Hower on images and call the names of the elements in the images
            (First Learn Basic Alphabets).
          </p>
          <p className="py-2">e.g A for Apple, A - p - p - l - e</p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="flex justify-between w-full p-4 text-left text-gray-700 bg-white rounded-lg focus:outline-none focus:bg-gray-100"
          onClick={() => toggleAccordion(1)}
        >
          <span className="font-bold">Where to practice?</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              activeIndex === 1 ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            activeIndex === 1 ? "block" : "hidden"
          } p-4 text-gray-600`}
        >
          <p className="py-2">1. Use in-built canvas for teaching and practicing purpose.</p>
          <p className="py-2">
            2. Navigate to quizes page through navbar and practice through quizes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
