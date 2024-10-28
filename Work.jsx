import React from 'react'
import work1 from '../assets/work1.png'
import work3 from '../assets/work3.png'
import work5 from '../assets/work5.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-400 '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center h-full w-full'>
            <div className='pb-5'>
                <p className='border-b-4 border-t-4 border-yellow-500 inline text-4xl font-bold '>Projects</p>
                <p className='py-6'>These are my finished projects!</p>
            </div>
            {/* Container */} 
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {/* Grid */}
              <div style={{backgroundImage: `url(${work1})`}}
              className='shadow:lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* <div className='opacity-0 group-hover:opacity-100'>
                   <span className='text-2xl font-bold text-gray-800 border-2  border-gray-800 bg-white tracking-wider'>
                    Vanilla JavaScript Application
                   </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-gray-700'>Demo</button>
                    </a>

                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-gray-700'>Code</button>



                  </div>
                </div> */}
              </div>
              <div style={{backgroundImage: `url(${work3})`}}
              className='shadow:lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'yhy>
                
                <div className='opacity-0 group-hover:opacity-100'>
                   <span className='text-2xl font-bold text-gray-800 border-2 border-r-100  tracking-wider'>
                    JavaScript Application
                   </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-gray-700'>JavaScript</button>
                    </a>

                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-gray-700'>CODE</button>



                  </div>
                </div>
              </div>
              <div style={{backgroundImage: `url(${work5})`}}
              className='shadow:lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-100'>
                   <span className='text-2xl font-bold text-gray-800 border-2 rounded-full bg-white tracking-wider'>
                    React App
                   </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg border-2'>Demo</button>
                    </a>

                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-gray-700'>Code</button>



                  </div>
                </div>
              </div>
             
            </div>

        </div>
    </div>
  )
}

export default Work