import React from 'react'
import MathQuiz from '../components/MathQuiz'
import AnimalsQuiz from '../components/AnimalsQuiz'

const Quizes = () => {
  return (
    <div>
       <h2 className="text-2xl font-bold p-12 text-sky-600 text-center">Pratice Quiz 1</h2>
       <p className='pb-4 text-lg container mx-auto text-center'>This quiz is about Maths where you can practice simple <span className='text-sky-700'>addition and subtraction</span>  of the numbers you have studied here.</p>
      <MathQuiz/>
      <h2 className="text-2xl font-bold p-12 text-sky-600 text-center">Practice Quiz 2</h2>
      <p className='pb-4 text-lg container mx-auto text-center'>This quiz is about basic Animals where you can practice simple <span className='text-sky-700'>animals identification</span>  of the animals you have studied here.</p>
      <AnimalsQuiz/>
    </div>
  )
}

export default Quizes
