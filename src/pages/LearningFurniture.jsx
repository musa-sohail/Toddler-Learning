import React from 'react'
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';
const LearningFurniture = () => {
  const images = [
    { leftImage: 'images/furniture/1.jpg', rightImage: 'images/furniture/chair.jpg' },
    { leftImage: 'images/furniture/2.jpg', rightImage: 'images/furniture/bed.jpg' },
    { leftImage: 'images/furniture/3.jpg', rightImage: 'images/furniture/sofa.jpg' },
    // { leftImage: 'images/furniture/4.jpg', rightImage: 'images/furniture/table.jpg' },
    { leftImage: 'images/furniture/4.jpg', rightImage: 'images/furniture/stool.jpg' },
    { leftImage: 'images/furniture/5.jpg', rightImage: 'images/furniture/bench.jpg' }
   
   
  ];
  return (
    <div className='mt-10'>
       <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Furniture With Us</h1>
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

export default LearningFurniture
