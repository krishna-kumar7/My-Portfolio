import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23bd5240-615e-47ed-9d16-25b9090ecfde");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <motion.h4
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">
        Connect With me</motion.h4>
      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">
        Get in touch</motion.h2>

        <motion.p
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.form
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 mt-5'>
                <motion.input
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                type="text" placeholder='Enter Your Name'  required className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-400 rounded-md bg-white' name='name'/>
                <motion.input
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px]
                 border-gray-400 rounded-md bg-white' name='email'/>
            </div>
            <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            rows={6} placeholder='Enter your messege' className='w-full p-4 outline-none border-[0.5px]
             border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>

            <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit' 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white
            rounded-full mx-auto hover:bg-black transition-all duration-500'>
                Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

                <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
