import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import inkImage from '../../images/ink.webp'; // Replace with the path to your background image
import backgroundImg from '../../images/backgroundInk.jpg';

function EnJetDTFInk() {
    const images = [
        inkImage
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
                {/* Hero Section */}
                <div
                    className="relative bg-cover bg-center h-60 sm:h-72 md:h-76 lg:h-86"
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                            ENJET DTF INK
                        </h1>
                    </div>
                </div>

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
                            <li className="text-gray-800">DTF INK</li>
                        </ol>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto p-4 md:p-8">
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
                            <h1 className="text-3xl font-semibold text-gray-900">ENJET DTF INK</h1>
                            <p className="text-gray-700 leading-relaxed">
                                ENJET DTF Ink is crafted for precise and vivid color reproduction, making it an ideal choice for Direct-to-Film printing. Its formula ensures accurate colors and a wide range of tones, simulating vivid hues effectively. This eco-friendly ink provides smooth, consistent prints without bleeding, making it perfect for high-quality garment decoration. With its long shelf life and compatibility with various Epson models, this ink offers reliability and performance.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Ensures accurate colors with no bleeding during printing.</li>
                                <li>Simulates vivid colors with a wide tonal range.</li>
                                <li>100% eco-friendly and water-based for a sustainable choice.</li>
                                <li>Long shelf life and suitable for various Epson models.</li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <h2 className="font-medium text-gray-800">Specifications:</h2>
                                    <p>Ink doesn't bleed when printing.</p>
                                    <p>Offers every shade by adding tone on top.</p>
                                    <p>One year shelf life.</p>
                                    <p>Store at 5-35°C with 40-80% humidity.</p>
                                    <p>Suitable for Epson I3200/4720/5113/DX5.</p>
                                    <p>Water-based with long head life.</p>
                                </div>
                                <div>
                                    <h2 className="font-medium text-gray-800">End Uses:</h2>
                                    <p>Shirt, Sweater, Denim</p>
                                    <p>Canvas, Hooded Tops</p>
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
                                    Request Sample
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

export default EnJetDTFInk;
