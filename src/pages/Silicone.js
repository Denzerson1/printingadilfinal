import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/SiliconeOptions';
import backgroundImage from '../images/siliconemain.jpg';
import ScrollToTop from '../components/ScrollToTop';

const SiliconePage = () => {
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                            SILICONE TRANSFERS
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
                            <li className="text-gray-800">SILICONE TRANSFERS</li>
                        </ol>
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                    {/* Silicone Transfers Section */}
                    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-l">
                        <p className="text-gray-800 text-sm sm:text-base md:text-l leading-relaxed">
                            <strong>Silicone transfers</strong> are advanced printing solutions that utilize silicone-based inks to create durable, flexible, and highly resistant designs. These transfers are applied using a thermal press and are ideal for various types of supports, including textiles, non-woven fabrics, and technical materials.
                        </p>
                        <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-6">
                            Advantages of Silicone Transfers:
                        </h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-l">
                            <li><strong>Exceptional Durability</strong>: Outstanding resistance to washing, abrasion, and environmental factors, ensuring that your designs remain vibrant and intact even after repeated use.</li>
                            <li><strong>Superior Flexibility</strong>: Designed to stretch with the fabric, silicone transfers maintain their shape and integrity, making them ideal for applications on technical fabrics and activewear.</li>
                            <li><strong>High-Quality Finish</strong>: Provides a smooth, raised finish that adds a premium look and feel to your products, with a tactile 3D effect that enhances visual appeal.</li>
                            <li><strong>Wide Range of Effects</strong>: Customizable to achieve glossy, matte, or textured finishes, with options for reflective, fluorescent, or metallic effects.</li>
                            <li><strong>Customizability</strong>: Offers unparalleled creative freedom with the ability to match specific Pantone colors and create custom textures.</li>
                            <li><strong>Eco-Friendly</strong>: Free from harmful chemicals and compliant with environmental standards, making them a sustainable choice for conscientious brands.</li>
                            <li><strong>Ease of Application</strong>: Quick and easy to apply, requiring only a few seconds under a thermal press to deliver professional results.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Showcase />
            <Footer />
        </ScrollToTop>
    );
};

export default SiliconePage;
