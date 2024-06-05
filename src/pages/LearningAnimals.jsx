import React from 'react';
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';

const LearningAnimals = () => {
  const images = [
    { leftImage: 'images/animals/1.jpg', rightImage: 'images/animals/lion.jpg' },
    { leftImage: 'images/animals/2.jpg', rightImage: 'images/animals/goat.jpg' },
    { leftImage: 'images/animals/3.jpg', rightImage: 'images/animals/zebra.jpg' },
    { leftImage: 'images/animals/4.jpg', rightImage: 'images/animals/hare.jpg' },
    { leftImage: 'images/animals/5.jpg', rightImage: 'images/animals/monkey.jpg' }
  ];
  
  return (
    <div className='mt-10'>
      <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Animals With Us</h1>
      <Accord/>
      {images.map((item, index) => (
        <Lcard 
          key={index}
          leftImage={item.leftImage} 
          rightImage={item.rightImage} 
        />
      ))}
      

      <Practice/>
    </div>
  );
}

export default LearningAnimals;
