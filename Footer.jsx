import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'




const footer = () => {
  return (
    <div name='footer' className='w-500px h-500px bg-[#0a192f] text-gray-300  '>
        <div className=' flex flex-row  items-center border border-gray-600  '>
          <p className='hover:scale-110 duration-500 gap-x-6'> 
          
                <a href="https://web.whatsapp.com/">
                   <FaWhatsapp size={45} />
                </a>
            </p>
            <p className='hover:scale-110 duration-500 ml-8}'> 
          
          <a href="https://www.youtube.com/channel/UCmsueJTJJ8IUuebEtE0AqXg" target='_blank'>
             <FaYoutube size={45} />
          </a> 
      
          </p>
          <p>copyright &#169; 2024 Sillah_Alien
            
      
          </p>
         
          
          

        </div>

       

    </div>
  )
}

export default footer