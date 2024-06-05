import React from 'react';
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';


const LearningMaths = () => {
  const images = [
    { leftImage: 'images/numbers/1.jpg', rightImage: 'images/numbers/one.webp' },
    { leftImage: 'images/numbers/2.jpg', rightImage: 'images/numbers/two.webp' },
    { leftImage: 'images/numbers/3.jpg', rightImage: 'images/numbers/three.webp' },
    { leftImage: 'images/numbers/4.jpg', rightImage: 'images/numbers/four.webp' },
    { leftImage: 'images/numbers/5.jpg', rightImage: 'images/numbers/five.webp' },
    { leftImage: 'images/numbers/6.jpg', rightImage: 'images/numbers/six.webp' },
    { leftImage: 'images/numbers/7.jpg', rightImage: 'images/numbers/seven.webp' },
    { leftImage: 'images/numbers/8.jpg', rightImage: 'images/numbers/eight.webp' },
    { leftImage: 'images/numbers/9.jpg', rightImage: 'images/numbers/nine.webp' },
    { leftImage: 'images/numbers/10.jpg', rightImage: 'images/numbers/ten.webp' }
  ];

  return (
    <div className='mt-10'>
      <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Maths With Us</h1>
      <Accord/>
      {images.map((item, index) => (
        <Lcard 
          key={index}
          leftImage={item.leftImage} 
          rightImage={item.rightImage} 
        />
      ))}
      <Practice />
    </div>
  );
}

export default LearningMaths;
