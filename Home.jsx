import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import SA4 from '../assets/SA4.jpeg'
import {motion} from 'framer-motion'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* My body Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
        
           {/* <div className='grid grid-cols-2  gap-4'> */}

           <div className='flex flex-row '>
            

             <div>
             <p className='text-yellow-600 pt-4:sm text-xl'>Salaam, you can call me:  </p>

             <motion.h1 
             initial = {{x: -1000}}
             animate = {{x: [0,900,0]}}
             transition = {{
              duration: 3,
              delay: 0.2

            
            }}
            whileHover={{scale: 0.9, opacity: 0.2}}
             
             >

                 <h1 className='text-2xl sm:text-3xl font-bold text-[#ccd6f6] inline border-l-2 border-b-2 border-yellow-600'>Smart_Alien</h1>   
             </motion.h1>
             

             
              
             
            <h2 className='text-2xl sm:text-3xl font-bold text-[#8892b0] '>I'm a Junior Front-end Developer</h2>
            
              <p className=' w-100px text-[#8892b0]'>
              I'm skilled in HTML, CSS, JavaScript, Python, and React js. 
              My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading softwares.
              I can be a useful talent to any company or institution.
                
             
              </p>
             </div>
             <div>

            
                <img className=' hover:scale-110 duration-500 rounded-full ml-2 mr-2  mb-1 ' src={SA4} alt="SASH " style={{width: '350px'}} />


            
             </div>
              
            </div>
              
          
            <div className='mt-[-8]'>
            <button className='text-[#fff] group border-2 py-1 px-6 my-2 flex items-center hover:bg-yellow-600 hover: border-gray-600 hover:text-black'>View work
               <span className='group-hover:rotate-90 duration-500'>
               <HiArrowRight className='ml-4' />
               </span>
             </button>
        </div>
    
        </div>
        
    </div>
  )
}

export default Home