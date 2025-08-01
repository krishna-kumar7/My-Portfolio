import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }}
       className="text-center mb-2 text-lg font-Ovo">
        What I offer</motion.h4>
      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">
        My Services</motion.h2>

        <motion.p
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I offer a range of services to help you build and maintain your web presence. 
            From front-end design to back-end development, 
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon,title,description,link},index)=>(

                <motion.div
                whileHover={{ scale: 1.05 }}
                key={index} className='border border-gray-300 rounded-xl p-6 cursor-pointer
                           hover:bg-gray-200 hover:-translate-y-1 duration-500
                           hover:shadow-lg flex flex-col items-center '>

                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Learn more <Image src={assets.right_arrow} alt='' className='w-4'/>
                    </a>

                </motion.div>
            ))}

        </motion.div>
    </motion.div>
  )
}

export default Services
