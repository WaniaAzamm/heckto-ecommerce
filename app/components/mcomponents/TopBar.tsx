"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-[44px] bg-purple max-w-[1920px] bg-purple-700 py-2 px-8 text-white text-sm items-center justify-between  top-0 left-0 right-0 z-50">
      {/* Desktop Contact Info */}
      <div className="hidden md:flex gap-6 pl-[225px]">
        <div className="flex gap-2 items-center">
          <MdOutlineMailOutline className="text-lg" />
          <p>waniaazam605@gmail.com</p>
        </div>

        <div className="flex gap-2 items-center">
          <LuPhoneCall className="text-lg" />
          <p>(12345)67890</p>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? (
            <IoIosClose className="text-2xl" />
          ) : (
            <IoIosMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile and Desktop Navigation */}
      <div
        className={`fixed inset-0 bg-purple z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        md:static md:translate-x-0 md:flex md:gap-6 md:items-center md:justify-center md:pr-[160px]`}
      >
        <div className="flex flex-col  md:hidden lg:flex md:flex-row gap-4 md:gap-6 items-center justify-center h-full p-4 md:p-0">
          {/* Language Dropdown */}
          <div className="flex items-center gap-1">
            <Link href="/" className="hover:underline">
              English
            </Link>
            <IoIosArrowDown className="text-white" />
          </div>

          {/* Currency Dropdown */}
          <div className="flex items-center gap-1">
            <Link href="/" className="hover:underline">
              USD
            </Link>
            <IoIosArrowDown className="text-white" />
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-1">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <FaRegUser className="text-white" />
          </div>

          {/* Wishlist Button */}
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:underline">
              Wishlist
            </Link>
            <FaRegHeart className="text-white font-bold" />
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-1 pl-0 md:pl-5">
            <Link href="/cart">
              <GrCart className="text-white text-lg" />
            </Link>
          </div>
        </div>

        {/* Close button for mobile menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden absolute top-4 right-4 focus:outline-none"
        >
          <IoIosClose className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
