import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_665vf7w', 'template_5da16x8', form.current, {
        publicKey: 'WWxRwwFeMtLGaajoE',
      })
      .then(
        () => {
          console.log('Thank you for sending a message, I will reply ASAP Inshaa Allah');
        },
        (error) => {
          console.log('MESSAGE FAILED... Please try ahgain!!!', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center text-white flex justify-center p-4'>
      
    <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full text-center my-4 '>
      <div className="pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-t-4 border-yellow-500"> Contact Me</p>
        <p className="text-xl text-gray-400 py-2 my-2">Shoot me an email </p>
      </div>

        <input className='my-2 bg-[#ccd6f6] p-2 text-[#000]' type="text"  placeholder="Name" name='name' required/> 
        <input className="my-2 bg-[#ccd6f6] p-2 text-[#000]" type="email"  placeholder="Email" name='email' required/>
        {/* <input className=" my-2 bg-[#ccd6f6] p-2 text-[#000]" type="text"  placeholder="Subject" name='subject'/> */}
        {/* <input className=" my-2 bg-[#ccd6f6] p-2 text-[#000]" type="tel"  placeholder="What's App" name='tel'/> */}
        <textarea className="my-2 bg-[#ccd6f6] p-2 text-[#000]" name="textarea" id="" cols="30" rows="10" placeholder="//Append your comment here">
          
        </textarea>

        <button className="text-white border-2 hover:border-yellow-500 hover:bg-yellow-600 px-4 py-3 my-3 mx-auto flex items-center">Submit</button>
        


    </form>
    
    
  </div>

  );
};

export default Contact