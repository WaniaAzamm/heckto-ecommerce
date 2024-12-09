import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="bg-[#f9f9ff] w-full max-w-screen-2xl mx-auto">
        {/* Container for layout */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-10 sm:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative">
          {/* Text Section */}
          <div className="text-center lg:text-left pt-6 sm:pt-10 lg:pt-14 lg:w-1/2 relative lg:left-[175px]">
            
              <p className="text-[#fb2e86] text-base sm:text-lg font-bold mb-3 sm:mb-4 font-lato">
                Best Furniture For Your Castle...
              </p>
           

           
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[53px] font-bold leading-snug mb-4 sm:mb-6 font-josefin-sans">
                New Furniture Collection <br />
                Trends in 2020
              </h1>
           

            <p className="text-gray-500 text-sm sm:text-base mb-5 sm:mb-6 max-w-prose mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </p>

            <button className="bg-[#fb2e86] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-base hover:bg-[#e02378] transition-all duration-300 ease-in-out shadow-md">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square lg:w-1/2 flex justify-center items-center">
            {/* Chair Image */}
            <Image
              src="/hero.png"
              alt="Pink Chair"
              fill
              sizes="(max-width: 629px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-xl"
            />
            {/* Circle Background */}
            <div className="absolute -z-10 w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-pink-100 rounded-full blur-[60px] sm:blur-[80px]" />
          </div>

          {/* Hanging Light */}
          <div className="absolute top-0 left-2 sm:left-4 lg:left-0 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[329px] xl:w-[600px]">
            <Image
              src="/light.png"
              alt="Hanging Light"
              width={329}
              height={329}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    )
}

export default Hero