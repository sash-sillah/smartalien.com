import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192F] text-gray-400'>
        

        <div className='flex flex-col justify-center items-center w-full h-[500px]'>
        <p className='text-4xl  font-bold inline border-b-4 border-t-4 border-yellow-500 '>About</p>
            <div className='max-w-[1000px] w-full grid grid-cols-2 px-4 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    
                </div>
                <div></div>
             </div>
                <div name='about' className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-4 '>
                    <div className='sm:text-xl text-right font-bold pl-4'>
                    <p className='hidden:sm'>
                    I am an enthusiastic, dedicated, and versatile young person with an outstanding academic background and excellent attitude to work.
                    Highly motivated and reliable, in web development, Multi-talented with  technical skills and the ability to develop and maintain close working
                    relationships with other support and development teams.
                    </p>
                    </div>
                    <div>
                        <p className='text-gray-300'>
                        
              
                        The main reasons behind my passion for software engineering are the challenges and rewards it brings into my life. Challenges are part of my everyday routine, and they make me grow as a person
                        and a software developer. When my skills feel like they are at
                        their limit, I actually push harder to overcome them. That challenge brings joy, 
                        achievement, and success when mixed with my passion for coding.
                        Because creating something is one thing, but when it’s useful and used by others, it’s a totally new level of satisfaction.
                        

                        </p>
                    </div>
                </div>

            
            

        </div>
    </div>
  )
}

export default About