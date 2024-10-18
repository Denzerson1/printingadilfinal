import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/LaserOptions';
import backgroundImage from '../images/lasercutmain.jpeg'; // Replace with the path to your background image
import ScrollToTop from '../components/ScrollToTop';

const SilkscreenPage = () => {
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
                            LASER & PLOTTER CUT TRANSFERS
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
                            <li className="text-gray-800">LASER & PLOTTER CUT TRANSFERS</li>
                        </ol>
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                    {/* Laser-Cut Transfers Section */}
                    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                        <p className="text-gray-800 text-sm sm:text-base md:text-l leading-relaxed">
                            <strong>Laser-cut transfers</strong> utilize advanced die-cutting technology to produce precisely cut designs with clean outlines and intricate details. These transfers are applied using a thermal press and are suitable for various types of supports, including textiles, PU, and non-woven fabrics.
                        </p>
                        <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-6">
                            Advantages of Laser-Cut Transfers:
                        </h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-l">
                            <li><strong>Precise Contours and Clean Outlines</strong>: Advanced laser technology ensures sharp, accurate cuts for even the most intricate designs.</li>
                            <li><strong>Optimal Elasticity</strong>: Ideal for technical fabrics, these transfers stretch and move with the material, maintaining their shape and detail.</li>
                            <li><strong>Diversity of Materials</strong>: Available in a variety of finishes, including matte, glossy, textured, reflective, fluorescent, phosphorescent, and 3D relief options.</li>
                            <li><strong>Customisation</strong>: Specific colouring and unique designs can be created upon request, offering a high level of personalization.</li>
                            <li><strong>Excellent Longevity and Abrasion Resistance</strong>: Designed to withstand regular wear and tear, these transfers are durable and maintain their appearance over time.</li>
                            <li><strong>Washable at 60ºC (140°F)</strong>: High temperature resistance ensures that designs remain intact and vibrant even after repeated washing.</li>
                            <li><strong>Quick and Easy to Use</strong>: Transfers can be applied in just a few seconds using a thermal press, streamlining the production process.</li>
                            <li><strong>Choice of Packaging</strong>: Available as individual items or on a roll, providing flexibility in application and storage.</li>
                        </ul>
                    </div>
                </div>

            </div>
            <Showcase />
            <Footer />
        </ScrollToTop>
    );
};

export default SilkscreenPage;
