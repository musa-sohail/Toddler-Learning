import React from 'react'
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';

const LearningUrdu = () => {
  const images = [
    { leftImage: 'images/urdu/1st.jpg', rightImage: 'images/urdu/1.jpg' },
    { leftImage: 'images/urdu/2nd.jpg', rightImage: 'images/urdu/2.jpg' },
    { leftImage: 'images/urdu/3rd.jpg', rightImage: 'images/urdu/3.jpg' },
    { leftImage: 'images/urdu/4th.jpg', rightImage: 'images/urdu/4.jpg' },
    { leftImage: 'images/urdu/5th.jpg', rightImage: 'images/urdu/5.jpg' },
    { leftImage: 'images/urdu/6th.jpg', rightImage: 'images/urdu/6.jpg' },
    { leftImage: 'images/urdu/7th.jpg', rightImage: 'images/urdu/7.jpg' },
    { leftImage: 'images/urdu/8th.jpg', rightImage: 'images/urdu/8.jpg' },
    { leftImage: 'images/urdu/9th.jpg', rightImage: 'images/urdu/9.jpg' },
    { leftImage: 'images/urdu/10th.jpg', rightImage: 'images/urdu/10.jpg' },
    { leftImage: 'images/urdu/11th.jpg', rightImage: 'images/urdu/11.jpg' },
    { leftImage: 'images/urdu/12th.jpg', rightImage: 'images/urdu/12.jpg' },
    { leftImage: 'images/urdu/13th.jpg', rightImage: 'images/urdu/13.jpg' },
    { leftImage: 'images/urdu/14th.jpg', rightImage: 'images/urdu/14.jpg' },
    { leftImage: 'images/urdu/15th.jpg', rightImage: 'images/urdu/15.jpg' },
    { leftImage: 'images/urdu/16th.jpg', rightImage: 'images/urdu/16.jpg' },
    { leftImage: 'images/urdu/17th.jpg', rightImage: 'images/urdu/17.jpg' },
    { leftImage: 'images/urdu/18th.jpg', rightImage: 'images/urdu/18.jpg' },
    { leftImage: 'images/urdu/19th.jpg', rightImage: 'images/urdu/19.jpg' },
    { leftImage: 'images/urdu/20th.jpg', rightImage: 'images/urdu/20.jpg' },
    { leftImage: 'images/urdu/21th.jpg', rightImage: 'images/urdu/21.jpg' },
    { leftImage: 'images/urdu/22th.jpg', rightImage: 'images/urdu/22.jpg' },
    { leftImage: 'images/urdu/23th.jpg', rightImage: 'images/urdu/23.jpg' },
    { leftImage: 'images/urdu/24th.jpg', rightImage: 'images/urdu/24.jpg' },
    { leftImage: 'images/urdu/25th.jpg', rightImage: 'images/urdu/25.jpg' },
    { leftImage: 'images/urdu/twentysix.jpg', rightImage: 'images/urdu/26.jpg' },
    { leftImage: 'images/urdu/twentyseven.jpg', rightImage: 'images/urdu/27.jpg' },
    { leftImage: 'images/urdu/twentyeight.jpg', rightImage: 'images/urdu/28.jpg' },
    { leftImage: 'images/urdu/twentynine.jpg', rightImage: 'images/urdu/29.jpg' },
    { leftImage: 'images/urdu/thirty.jpg', rightImage: 'images/urdu/30.jpg' },
    { leftImage: 'images/urdu/thirty1.jpg', rightImage: 'images/urdu/31.jpg' },
    { leftImage: 'images/urdu/thirty2.jpg', rightImage: 'images/urdu/32.jpg' },
    { leftImage: 'images/urdu/thirty3.jpg', rightImage: 'images/urdu/33.jpg' },
    { leftImage: 'images/urdu/thirty4.jpg', rightImage: 'images/urdu/34.jpg' },
    { leftImage: 'images/urdu/35th.jpg', rightImage: 'images/urdu/35.jpg' },
    { leftImage: 'images/urdu/36th.jpg', rightImage: 'images/urdu/36.jpg' },
    { leftImage: 'images/urdu/37th.jpg', rightImage: 'images/urdu/37.jpg' },
    { leftImage: 'images/urdu/38th.jpg', rightImage: 'images/urdu/38.jpg' }
   
   
  ];
  return (
    <div className='mt-10'>
       <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Urdu With Us</h1>
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

export default LearningUrdu
