import React from 'react';
import Lcard from '../components/Lcard';
import Practice from '../components/Practice';
import Accord from '../components/Accord';
const LearningABC = () => {
const images = [
    { leftImage: 'images/alphabets/a.jpg', rightImage: 'images/alphabets/apple.jpg' },
    { leftImage: 'images/alphabets/b.jpg', rightImage: 'images/alphabets/ballon.jpg' },
    { leftImage: 'images/alphabets/c.jpg', rightImage: 'images/alphabets/cat.jpg' },
    { leftImage: 'images/alphabets/d.jpg', rightImage: 'images/alphabets/duck.jpg' },
    { leftImage: 'images/alphabets/e.jpg', rightImage: 'images/alphabets/elephant.jpg' },
    { leftImage: 'images/alphabets/f.jpg', rightImage: 'images/alphabets/fish.jpg' },
    { leftImage: 'images/alphabets/g.jpg', rightImage: 'images/alphabets/grapes.jpg' },
    { leftImage: 'images/alphabets/h.jpg', rightImage: 'images/alphabets/hen.jpg' },
    { leftImage: 'images/alphabets/i.jpg', rightImage: 'images/alphabets/icecream.jpg' },
    { leftImage: 'images/alphabets/j.jpg', rightImage: 'images/alphabets/jug.jpg' },
    { leftImage: 'images/alphabets/k.jpg', rightImage: 'images/alphabets/kite.jpg' },
    { leftImage: 'images/alphabets/l.jpg', rightImage: 'images/alphabets/lamp.jpg' },
    { leftImage: 'images/alphabets/m.jpg', rightImage: 'images/alphabets/moon.jpg' },
    { leftImage: 'images/alphabets/n.jpg', rightImage: 'images/alphabets/nest.jpg' },
    { leftImage: 'images/alphabets/o.jpg', rightImage: 'images/alphabets/orange.jpg' },
    { leftImage: 'images/alphabets/p.jpg', rightImage: 'images/alphabets/pen.jpg' },
    { leftImage: 'images/alphabets/q.jpg', rightImage: 'images/alphabets/quilt.jpg' },
    { leftImage: 'images/alphabets/r.jpg', rightImage: 'images/alphabets/rose.jpg' },
    { leftImage: 'images/alphabets/s.jpg', rightImage: 'images/alphabets/suitcase.jpg' },
    { leftImage: 'images/alphabets/t.jpg', rightImage: 'images/alphabets/tree.jpg' },
    { leftImage: 'images/alphabets/u.jpg', rightImage: 'images/alphabets/umbrella.jpg' },
    { leftImage: 'images/alphabets/v.jpg', rightImage: 'images/alphabets/van.jpg' },
    { leftImage: 'images/alphabets/w.jpg', rightImage: 'images/alphabets/watch.jpg' },
    { leftImage: 'images/alphabets/x.jpg', rightImage: 'images/alphabets/xray.jpg' },
    { leftImage: 'images/alphabets/y.jpg', rightImage: 'images/alphabets/yacht.jpg' },
    { leftImage: 'images/alphabets/z.jpg', rightImage: 'images/alphabets/zebra.jpg' }   
  ];
  return (
    <div className='mt-10'>
    <h1 className="pt-10 sm:pt-12 lg:text-center text-3xl font-bold tracking-tight text-sky-600 text-center">Learn About Alphabets With Us</h1>
    <Accord/>
   {images.map((item, index) => (
    <Lcard
       key={index}
       leftImage={item.leftImage}
       rightImage={item.rightImage} />
   ))}
   <Practice/>
 </div> 
  );
};
export default LearningABC;


