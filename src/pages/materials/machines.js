import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import machineImage from '../../images/machinemain.jpg'; // Replace with the path to your background image

import machine1 from '../../images/machine.png';
import machine2 from '../../images/machine2.PNG';

function EnJetDTFMachines() {
    const images = [
        machine1,machine2
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
        <div>
            <Header />
            <div className="bg-white">
                {/* Breadcrumb Navigation */}
                <nav className="bg-gray-100 py-3 sm:py-4">
                    <div className="container mx-auto px-4">
                        <ol className="flex flex-wrap text-gray-500 text-xs sm:text-sm">
                            <li>
                                <a href="#" className="hover:underline">HOME</a>
                            </li>
                            <li className="mx-2">/</li>
                            <li className="text-gray-800">MATERIALS</li>
                            <li className="mx-2">/</li>
                            <li className="text-gray-800">ENJET DTF 4-2 Machine</li>
                        </ol>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto p-4 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:space-x-8 pt-8 pb-8">
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
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition"
                                >
                                    &#10094;
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition"
                                >
                                    &#10095;
                                </button>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="flex-1 space-y-4">
                            <h1 className="text-3xl font-semibold text-gray-900">ENJET DTF 4 - 2 Machine</h1>
                            <p className="text-gray-700 leading-relaxed">
                                The ENJET DTF 4 - 2 series printers are designed for high-quality Direct-to-Film printing, offering two configurations to suit different production needs. Both models deliver vibrant and detailed prints, ensuring precise color reproduction with every job. With the choice between the EN70-4 and EN70-2 models, users can select the speed and capacity that best fits their workflow.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <h2 className="font-medium text-gray-800">EN70-4 DTF Printer:</h2>
                                    <p>Number of print heads: 4 pcs EPSON 13200</p>
                                    <p>Print width: 600 mm</p>
                                    <p>Maximum speed: 22 m²/h</p>
                                </div>
                                <div>
                                    <h2 className="font-medium text-gray-800">EN70-2 DTF Printer:</h2>
                                    <p>Number of print heads: 2 pcs EPSON 13200</p>
                                    <p>Print width: 600 mm</p>
                                    <p>Maximum speed: 8 m²/h</p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center shadow hover:bg-blue-700 transition">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7h7m-7 0H5" /></svg>
                                    Download Data Sheet
                                </button>
                                <button className="bg-gray-600 text-white px-5 py-2 rounded-md flex items-center shadow hover:bg-gray-700 transition">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2m-8 0h2m-6 0h2m-2 4h16m0 4H4m0-8h16m0-4H4m0-4h16" /></svg>
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default EnJetDTFMachines;
