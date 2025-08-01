import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-full");
    sideMenuRef.current.classList.add("translate-x-0");
  };

  const closeMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-0");
    sideMenuRef.current.classList.add("translate-x-full");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up
  }, []);

  return (
    <>
      {/* Background shape behind navbar */}
      <div className="absolute top-0 right-0 w-11/12 -z-10 translate-y-[-80%] overflow-hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Fixed Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-md shadow-md" : ""}`}
      >
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${!isScroll ? "bg-white shadow-sm bg-opacity-50" : ""}`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="Theme Toggle" className="w-6" />
          </button> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 bottom-0 w-64 h-screen bg-rose-50 z-[100] transform translate-x-full transition-transform duration-300 flex flex-col gap-4 py-20 px-10 overflow-y-auto"
        >
          <button className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer" />
          </button>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
