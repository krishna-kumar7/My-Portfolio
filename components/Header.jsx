import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.3,
          stiffness: 100,
        }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items=-end gap- text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi I'm Krishna Kumar{" "}
        <Image src={assets.hand_icon} alt="" className=" w-6" />
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack web developer based in india
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a full stack web developer with a passion for creating dynamic and
        responsive web applications. I specialize in both front-end and back-end
        development.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://drive.google.com/file/d/1qpR0kC9MJNfJh0KkA1cuWtJQX2RGWy05/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
