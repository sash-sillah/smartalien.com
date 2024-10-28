import React,{useState} from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineInbox} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'
import alien2 from '../assets/alien2.jpeg'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] border-b border-gray-500 text-gray-300'>
        <img className='hover:scale-110 duration-500' src={alien2} alt="alien2 icon " style={{width: '70px'}} /> 
        
          <ul className='hidden md:flex'>
            <li className='hover:text-4xl duration-500'>
              <Link to="home" smooth={true} duration={500} >Home</Link>
              </li>
            <li className='hover:text-4xl duration-500'>
            <Link to="about" smooth={true} duration={500} >About</Link>
            </li>
            <li className='hover:text-4xl duration-500'>
            <Link to="skills" smooth={true} duration={500} >Skills</Link>
            </li>
            <li className='hover:text-4xl duration-500'>
            <Link to="work" smooth={true} duration={500} >Experience</Link>
            </li>
            <li className='hover:text-4xl duration-500'>              
            <Link to="contact" smooth={true} duration={500} >Contact</Link>
            </li>      
          </ul>
        
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        <ul className={!nav ?  'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-xl hover:text-4xl duration-500 '>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link>
            </li>
            <li className='py-6 text-xl hover:text-4xl duration-500 '>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link>
            </li>
            <li className='py-6 text-xl hover:text-4xl duration-500 '>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >Skills</Link>
            </li>
            <li className='py-6 text-xl hover:text-4xl duration-500 '>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >Experience</Link>
            </li>
            <li className='py-6 text-xl hover:text-4xl duration-500 '>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link>
            </li>
          </ul>
          {/* Social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.linkedin.com/in/sash-sillah-55967a1aa/">
                  LinkedIn <FaLinkedin size={30} />
                </a> 
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-#a3a3a3-500'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://github.com/dashboard">
                  GitHub <FaGithub size={30} />
                </a> 
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="mailto:sashsillah@gmail.com">
                  Mail <HiOutlineInbox size={30} />
                </a> 
                
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                <a className='flex justify-between items-center w-full text-black'
                 href="https://www.sololearn.com/en/profile/11063393">
                  Sololearn <FaCode size={30} />
                </a> 
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.facebook.com/sash.sash.18007218">
                  Facebook <FaFacebook size={30} />
                </a> 
              </li>

                 {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.facebook.com/sash.sash.18007218">
                  Sololearn <FaCode size={30} />
                </a> 
              </li>  */}
            </ul>

          </div>
          
          
      </div>
    
    
  )
}

export default Navbar