
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

const Card = ({ heading, para, img, targetPage }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleClick = () => {
    if (currentUser) {
      navigate(`/${targetPage.toLowerCase()}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-transparent shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover" src={img} alt={heading} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-dark mb-2">{heading}</h2>
        <p className="mb-3 text-base text-dark">{para}</p>
        <button onClick={handleClick} className="inline-flex text-white items-center px-4 py-2 text-sm font-medium bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
