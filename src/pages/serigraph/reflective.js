import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import backgroundImage from '../../images/holograph.jpg'; // Replace with the path to your background image
import ScrollToTop from '../../components/ScrollToTop';

import img1 from '../../images/serigraph-reflective/1.jpeg';
import img2 from '../../images/serigraph-reflective/2.jpg';
import img3 from '../../images/serigraph-reflective/3.jpg';
import img4 from '../../images/serigraph-reflective/4.jpg';
import img5 from '../../images/serigraph-reflective/5.jpeg';


function DieCutMattPantone() {
    const images = [
        img1,img2,img3,img4,img5
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <ScrollToTop>
            <div>
                <Header />
                <div className="bg-white">
                    {/* Hero Section */}
                    <div
                        className="relative bg-cover bg-center h-60 sm:h-72 md:h-76 lg:h-86"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                                RELECTIVE SERIGRAPH
                            </h1>
                        </div>
                    </div>

                    {/* Breadcrumb Navigation */}
                    <nav className="bg-gray-100 py-3 sm:py-4">
                        <div className="container mx-auto px-4">
                            <ol className="flex flex-wrap text-gray-500 text-xs sm:text-sm">
                                <li>
                                    <a href="#" className="hover:underline">WELCOME</a>
                                </li>
                                <li className="mx-2">/</li>
                                <li className="text-gray-800">SERIGRAPH & SILKSCREEN</li>
                                <li className="mx-2">/</li>
                                <li className="text-gray-800">REFLECTIVE</li>
                            </ol>
                        </div>
                    </nav>


                    <div className="max-w-5xl mx-auto p-4 md:p-6">
                        <div className="flex flex-col md:flex-row items-start md:space-x-8">
                            {/* Image Section */}
                            <div className="relative flex-1 mb-6 md:mb-0">

                                {/* Image Slider */}
                                <div className="relative">
                                    <img
                                        src={images[currentImageIndex]}
                                        alt={`Image ${currentImageIndex + 1}`}
                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={handlePrevious}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-100 transition"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-100 transition"
                                    >
                                        &#10095;
                                    </button>
                                </div>
                            </div>

                            {/* Description Section */}
                            <div className="flex-1">
                                <h1 className="text-2xl font-semibold text-gray-900 mb-3">REFLECTIVE SERIGRAPH TRANSFER</h1>
                                <p className="text-sm text-gray-700 mb-2">
                                    Enhance safety and visibility with our Reflective Serigraph Transfer, designed for outdoor and nighttime wear.
                                </p>
                                <p className="text-sm text-gray-700 mb-3">
                                    Advantages of Reflective Serigraph Transfers include:
                                </p>

                                <h2 className="text-lg font-medium text-gray-800 mb-3">The multiple advantages of Reflective transfers are:</h2>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                                    <li>High visibility in low-light conditions</li>
                                    <li>Durable and withstands the elements</li>
                                    <li>Perfect for sportswear and safety gear</li>
                                </ul>

                                <p className="text-sm text-gray-700 mb-2">
                                    <strong>+ Custom size option:</strong> Available in various sizes to suit different design needs.
                                </p>
                                <p className="text-sm text-gray-700 mb-5">
                                    <strong>+ Weatherproof option:</strong> Provides additional protection against rain and moisture.
                                </p>


                                {/* Buttons */}
                                <div className="flex space-x-4">
                                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center shadow-sm hover:bg-gray-400 transition">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7h7m-7 0H5" /></svg>
                                        Data sheet
                                    </button>
                                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center shadow-sm hover:bg-gray-400 transition">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2m-8 0h2m-6 0h2m-2 4h16m0 4H4m0-8h16m0-4H4m0-4h16" /></svg>
                                        Receive samples
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </ScrollToTop>
    );
}

export default DieCutMattPantone;
