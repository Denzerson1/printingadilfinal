import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import backgroundImg from '../../images/hologram-foil/22.jpg';

// Import images
import imgspecialeffect1 from '../../images/specialeffects-foil/1.jpg';
import imgspecialeffect2 from '../../images/specialeffects-foil/2.jpg';
import imgspecialeffect3 from '../../images/specialeffects-foil/3.jpg';
import imgspecialeffect4 from '../../images/specialeffects-foil/4.jpg';
import imgspecialeffect5 from '../../images/specialeffects-foil/5.jpg';
import imgspecialeffect6 from '../../images/specialeffects-foil/6.jpg';
import imgspecialeffect7 from '../../images/specialeffects-foil/7.jpg';
import imgspecialeffect8 from '../../images/specialeffects-foil/8.jpg';
import imgspecialeffect9 from '../../images/specialeffects-foil/9.jpg';
import imgspecialeffect10 from '../../images/specialeffects-foil/10.jpg';
import imgspecialeffect11 from '../../images/specialeffects-foil/11.jpg';
import imgspecialeffect12 from '../../images/specialeffects-foil/12.jpg';
import imgspecialeffect13 from '../../images/specialeffects-foil/13.jpg';

import imgglitter1 from '../../images/glitter-foil/1.jpg';
import imgglitter2 from '../../images/glitter-foil/2.jpg';
import imgglitter3 from '../../images/glitter-foil/3.jpg';
import imgglitter4 from '../../images/glitter-foil/4.jpg';

import imghologram1 from '../../images/hologram-foil/1.jpg';
import imghologram2 from '../../images/hologram-foil/2.jpg';
import imghologram3 from '../../images/hologram-foil/3.jpg';
import imghologram4 from '../../images/hologram-foil/4.jpg';
import imghologram5 from '../../images/hologram-foil/5.jpg';
import imghologram6 from '../../images/hologram-foil/6.jpg';
import imghologram7 from '../../images/hologram-foil/7.jpg';
import imghologram8 from '../../images/hologram-foil/8.jpg';
import imghologram9 from '../../images/hologram-foil/9.jpg';
import imghologram0 from '../../images/hologram-foil/10.jpg';
import imghologram11 from '../../images/hologram-foil/11.jpg';
import imghologram12 from '../../images/hologram-foil/12.jpg';
import imghologram13 from '../../images/hologram-foil/13.jpg';
import imghologram14 from '../../images/hologram-foil/14.jpg';
import imghologram15 from '../../images/hologram-foil/15.jpg';
import imghologram16 from '../../images/hologram-foil/16.jpg';
import imghologram17 from '../../images/hologram-foil/17.jpg';
import imghologram18 from '../../images/hologram-foil/18.jpg';
import imghologram19 from '../../images/hologram-foil/19.jpg';
import imghologram20 from '../../images/hologram-foil/20.jpg';
import imghologram21 from '../../images/hologram-foil/21.jpg';
import imghologram22 from '../../images/hologram-foil/22.jpg';
import imghologram23 from '../../images/hologram-foil/23.jpg';

const products = [
    {
        name: 'Special Effects Foil',
        description: 'Special Effects Foil with advanced laser-cutting technology ensures intricate designs and vibrant metallic finishes. Ideal for adding a premium touch to garments with precise detailing.',
        images: [
            imgspecialeffect1, imgspecialeffect2, imgspecialeffect3, imgspecialeffect4, imgspecialeffect5, imgspecialeffect6, imgspecialeffect7, imgspecialeffect8, imgspecialeffect9, imgspecialeffect10, imgspecialeffect11, imgspecialeffect12, imgspecialeffect13
        ],
        specifications: 'Thickness: 75μ, Finish: Metallic, Available Widths: 30 cm, 60 cm',
        endUses: 'T-shirts, Bags, Footwear, Fabric and Leather'
    },
    {
        name: 'Glitter Foil',
        description: 'Glitter Foil adds a sparkling effect to your designs, perfect for creating eye-catching, glamorous prints. It offers a durable and long-lasting finish suitable for a variety of applications.',
        images: [
            imgglitter1, imgglitter2, imgglitter3, imgglitter4
        ],
        specifications: 'Thickness: 80μ, Finish: Glitter, Available Widths: 30 cm, 50 cm',
        endUses: 'Fashion Apparel, Accessories, Custom Designs'
    },
    {
        name: 'Hologram Foil',
        description: 'Hologram Foil delivers a striking, multi-dimensional look with its light-reflecting properties. This foil creates a dynamic, prismatic effect that changes with movement and lighting.',
        images: [
            imghologram1, imghologram2, imghologram3, imghologram4, imghologram5, imghologram6, imghologram7, imghologram8, imghologram9, imghologram0, imghologram11, imghologram12, imghologram13, imghologram14, imghologram15, imghologram16, imghologram17, imghologram18, imghologram19, imghologram20, imghologram21, imghologram22, imghologram23
        ],
        specifications: 'Thickness: 85μ, Finish: Holographic, Available Widths: 25 cm, 50 cm',
        endUses: 'Sportswear, Casual Wear, Branding'
    }
];

function MultipleProductsPage() {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const currentProduct = products[currentProductIndex];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? currentProduct.images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProduct.images.length);
    };

    const handleProductChange = (index) => {
        setCurrentProductIndex(index);
        setCurrentImageIndex(0);
        setIsMobileDropdownOpen(false);
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
                            FOIL PRODUCTS
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
                            <li className="text-gray-800">FOIL PRODUCTS</li>
                        </ol>
                    </div>
                </nav>

                {/* Product Selector */}
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                    <div className="md:hidden mb-4">
                        {/* Mobile Dropdown */}
                        <button
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            className="bg-blue-600 text-white w-full py-2 rounded-md shadow flex items-center justify-between px-4"
                        >
                            {products[currentProductIndex].name}
                            <svg className={`w-4 h-4 transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {isMobileDropdownOpen && (
                            <div className="bg-white border border-gray-200 rounded-md mt-2">
                                {products.map((product, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleProductChange(index)}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentProductIndex === index ? 'bg-blue-600 text-black' : ''}`}
                                    >
                                        {product.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Desktop Selector */}
                    <div className="hidden md:flex space-x-4 mb-6">
                        {products.map((product, index) => (
                            <button
                                key={index}
                                onClick={() => handleProductChange(index)}
                                className={`bg-gray-200 text-black px-4 py-2 rounded-md transition hover:bg-gray-300 ${currentProductIndex === index ? 'bg-blue-600 text-black' : ''}`}
                            >
                                {product.name}
                            </button>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col md:flex-row">
                        {/* Image Carousel */}
                        <div className="flex-1 relative">
                            <img
                                src={currentProduct.images[currentImageIndex]}
                                alt={currentProduct.name}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-between">
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
                        <div className="flex-1 space-y-4 mt-4 md:mt-0 md:ml-4">
                            <h1 className="text-3xl font-semibold text-gray-900">{currentProduct.name}</h1>
                            <p className="text-gray-700 leading-relaxed">
                                {currentProduct.description}
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Easy to use with a thermal press.</li>
                                <li>Consistent high-quality results.</li>
                                <li>Durable and long-lasting designs.</li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                <div>
                                    <h2 className="font-medium text-gray-800">Specifications:</h2>
                                    <p>{currentProduct.specifications}</p>
                                </div>
                                <div>
                                    <h2 className="font-medium text-gray-800">End Uses:</h2>
                                    <p>{currentProduct.endUses}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="hidden md:flex space-x-4">
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

export default MultipleProductsPage;
