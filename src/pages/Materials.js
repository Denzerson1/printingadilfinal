import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/MaterialsOptions'; // This should be replaced with the appropriate showcase component for materials
import backgroundImage from '../images/backgroundMachine.jpg';
import ScrollToTop from '../components/ScrollToTop';

const MaterialsPage = () => {
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
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4">
                            MATERIALS FOR TRANSFERS
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
                            <li className="text-gray-800">MATERIALS FOR TRANSFERS</li>
                        </ol>
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                        <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                            <strong>Materials for transfers</strong> play a crucial role in achieving high-quality results in various printing applications. Whether you are using machines, ink, powder, or film, understanding the specific properties and advantages of each material is essential for optimal performance.
                        </p>
                        <h2 className="text-md sm:text-lg md:text-xl font-semibold mt-6">
                            Key Materials Overview:
                        </h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-lg">
                            <li><strong>Machines</strong>: Advanced printing machines equipped with high-resolution capabilities are essential for achieving detailed designs. They ensure precision and efficiency in the transfer process.</li>
                            <li><strong>Inks</strong>: Quality inks provide vibrant colors and durability. Eco-friendly options are available, catering to environmentally conscious brands.</li>
                            <li><strong>Powder</strong>: Used primarily in DTF (Direct-to-Film) printing, the right powder enhances adhesion and ensures the longevity of prints.</li>
                            <li><strong>Film</strong>: High-quality transfer films are crucial for producing clear and sharp images. They come in various finishes and are designed to withstand the transfer process.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Showcase /> {/* Replace with the appropriate showcase component for materials */}
            <Footer />
        </ScrollToTop>
    );
};

export default MaterialsPage;
