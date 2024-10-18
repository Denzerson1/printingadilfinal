import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import Logo from '../images/landinglogo.png';

const images = [slide1, slide2, slide3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [slideDirection, setSlideDirection] = useState('slide-in-right');

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setSlideDirection('slide-in-right');
    triggerLogoAnimation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideDirection('slide-in-left');
    triggerLogoAnimation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const triggerLogoAnimation = () => {
    setAnimateLogo(true);
    setTimeout(() => {
      setAnimateLogo(false);
    }, 700); // Duration of the animation (should match CSS)
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Inline CSS for slide, fade-in and fade-out animations */}
      <style>
        {`
          .fade-in {
            opacity: 1;
            animation: fadeIn 0.7s forwards;
          }

          .fade-out {
            opacity: 0;
            animation: fadeOut 0.7s forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .slide-in-right {
            animation: slideInRight 0.7s forwards;
          }

          .slide-in-left {
            animation: slideInLeft 0.7s forwards;
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>

      {/* Slideshow */}
      <div className={`absolute top-0 left-0 w-full h-full ${slideDirection}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition duration-700 ease-in-out"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Logo in the center with fade-in and fade-out animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={Logo}
          alt="Logo"
          className={`h-36 sm:h-48 md:h-60 lg:h-72 xl:h-80 opacity-90 transition-opacity duration-700 ease-in-out ${animateLogo ? 'fade-out' : 'fade-in'
            } pointer-events-none user-select-none`}
        />

      </div>


      {/* Social Media Icons at the bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-6 text-white">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
