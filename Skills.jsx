import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center text-center gap-4'>
            <div> 
                <p className='border-b-4 border-t-4 border-yellow-500 inline text-2xl gap-4 sm:text-4xl font-bold'>My Skills</p>
                <p className='py-6'>These are the Technologies I am familiar with, I am eager to learn more...</p>
               
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8' >
                
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                <p className='py-4'> HTML5</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='py-4'> CSS3</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                <p className='py-4'>JavaScript</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                <p className='py-4'> React js</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                <p className='py-4'> Tailwind CSS</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={python} alt="Python icon" />
                <p className='py-4'> Python</p>
            </div>
            {/* <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                <p className='py-4'> PHP</p>
            </div>
            <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                <p className='py-4'> ROBOTICS</p>
            </div> */}

            </div>
        </div>
    </div>
  )
}

export default Skills 