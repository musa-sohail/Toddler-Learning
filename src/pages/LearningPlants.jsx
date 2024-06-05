import React from 'react'
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';
const LearningPlants = () => {
  const images = [
    { leftImage: 'images/plants/1.jpg', rightImage: 'images/plants/cactus.jpg' },
    { leftImage: 'images/plants/2.jpg', rightImage: 'images/plants/corn.jpg' },
    { leftImage: 'images/plants/3.jpg', rightImage: 'images/plants/flowers.jpg' },
    { leftImage: 'images/plants/4.jpg', rightImage: 'images/plants/palm.jpg' },
    { leftImage: 'images/plants/5.jpg', rightImage: 'images/plants/reeds.jpg' }
   
  ];
  return (
    <div className='mt-10'>
       <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Plants With Us</h1>
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

export default LearningPlants
