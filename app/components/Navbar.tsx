"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger and close icons
import TopBar from './mcomponents/TopBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <TopBar />
      <nav className="w-full px-6 lg:px-40 py-4 flex flex-col lg:grid lg:grid-cols-5 justify-between items-center">
        {/* Logo */}
        <div className="logo text-[34px] font-bold font-josefin-sans text-black lg:col-span-1 sm:text-left lg:justify-start">
          Hekto
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden absolute top-[70px]  right-5 z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={40} /> : <FiMenu size={40} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col lg:flex lg:flex-row col-span-2 justify-start lg:justify-start gap-7 items-start lg:items-center absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 top-16 lg:top-0 z-40 p-5 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <Link
            href="/"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Home
          </Link>
          <Link
            href="/shop/grid"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Pages
          </Link>
          <Link
            href="/shop/sidebar"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            Faq
          </Link>
          <Link
            href="/about"
            className="font-lato text-offBlue hover:underline hover:text-pink"
          >
            About
          </Link>
        </div>

        {/* Search Bar */}
        <div className="col-span-2 flex justify-end items-center mt-4 lg:mt-0">
          <div className="w-full lg:w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center">
            <input
              type="text"
              className="p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5"
              placeholder="Search"
            />
            <button className="bg-pink w-full h-full flex justify-center items-center">
              <FiSearch size={20} color="white" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
