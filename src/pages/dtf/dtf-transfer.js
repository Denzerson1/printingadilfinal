import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import backgroundImage from '../../images/dtfmain.jpg';
import ScrollToTop from '../../components/ScrollToTop';

import img1 from '../../images/dtf/1.png';
import img2 from '../../images/dtf/2.png';
import img3 from '../../images/dtf.jpg';

function DieCutMattPantone() {
    const images = [img1, img2,img3];
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
            <Header />
            <div className="bg-white">
                {/* Hero Section */}
                <div
                    className="relative bg-cover bg-center h-60 sm:h-72 md:h-76 lg:h-86"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                            DIRECT TO FILM
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
                            <li className="text-gray-800">DTF</li>
                            <li className="mx-2">/</li>
                            <li className="text-gray-800">DTF-Transfer</li>
                        </ol>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto p-4 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:space-x-12">
                        {/* Image Section */}
                        <div className="relative flex-1 mb-6 md:mb-0">
                            {/* Image Slider */}
                            <div className="relative">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Image ${currentImageIndex + 1}`}
                                    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
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
                            <h1 className="text-2xl font-semibold text-gray-900 mb-3">DTF Transfers</h1>

                            <p className="text-sm text-gray-700 mb-2">
                                This monochrome marking process allows you to make transfers in your choice of Pantone colour, or any other colour reference (including fluo).
                            </p>
                            <p className="text-sm text-gray-700 mb-3">
                                The desired colour is prepared in-house by our technicians.
                            </p>

                            <h2 className="text-lg font-medium text-gray-800 mb-3">The multiple advantages Direct To Film transfers are:</h2>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                                <li>Implementation of your chosen colours</li>
                                <li>Perfect cut-out</li>
                                <li>Stretchable</li>
                                <li>Ready and easy to apply (pre-trimmed)</li>
                                <li>Washable at 60°C (140°F)</li>
                                <li>Choice of packaging: Per unit or on a roll</li>
                                <li>OEKO-TEX® STANDARD 100 certificat N° CQ 580/2 IFTH certified</li>
                            </ul>

                            <p className="text-sm text-gray-700 mb-2">
                                <strong>+ Colour-stop bleeding option:</strong> Specifically developed to prevent colour bleeding from coated polyester or softshell supports.
                            </p>
                            <p className="text-sm text-gray-700 mb-5">
                                <strong>+ Anti-slip option:</strong> Only available for dark transfers.
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
        </ScrollToTop>
    );
}

export default DieCutMattPantone;
