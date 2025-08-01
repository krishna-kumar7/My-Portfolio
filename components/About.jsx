import { assets, toolsData, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[5%] py-24 scroll-mt-32 overflow-x-hidden overflow-y-visible"
    >
      {/* <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4> */}
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">About me</motion.h2>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8 }}
      className="flex w-full flex-col lg:flex-row items-center gap-16 mt-16">
        {/* Image Section */}
        <motion.div
        initial={{ opacity: 0,scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xs sm:max-w-sm rounded-3xl">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>

        {/* Text and Info Cards */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex-1">
          <p className="mb-10 max-w-3xl font-Ovo text-gray-700 leading-relaxed">
            I am a full stack web developer with a passion for creating dynamic and responsive web applications.
            I specialize in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences.
            My expertise includes HTML, CSS, JavaScript, React, Node.js, and various databases.
            I am committed to continuous learning and staying updated with the latest technologies to deliver high-quality work.
          </p>

          <motion.ul
          whileInView={{scale: 1.05}}
          
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 1 }}
                key={index}
                className="border border-gray-300 rounded-xl p-6 cursor-pointer
                           hover:bg-gray-200 hover:-translate-y-1 duration-500
                           hover:shadow-lg"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="my-6 text-gray-700 font-Ovo">Tools I use</motion.h4>
          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg
                           cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;