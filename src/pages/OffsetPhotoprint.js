import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/OffsetOptions';
import backgroundImage from '../images/project.jpg'; // Replace with the path to your background image
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
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                            OFFSET & PHOTOPRINT TRANSFER
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
                            <li className="text-gray-800">OFFSET & PHOTOPRINT TRANSFER</li>
                        </ol>
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                        <p className="text-gray-800 text-sm sm:text-base md:text-l leading-relaxed">
                            <strong>Offset and photoprint transfers</strong> are high-resolution printing solutions that utilize advanced technology to reproduce complex and detailed images. These transfers are applied using a thermal press and are ideal for various types of supports, including textiles, non-woven fabrics, and hard surfaces.
                        </p>
                        <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-6">
                            Advantages of Offset and Photoprint Transfers:
                        </h2>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-l">
                            <li><strong>High-Resolution Printing</strong>: Capable of producing sharp, detailed images with vibrant colors and fine details, making them ideal for complex designs, including photographic images.</li>
                            <li><strong>Wide Color Gamut</strong>: Offers a broad range of colors, including gradients and subtle tones, ensuring accurate reproduction of any design.</li>
                            <li><strong>Versatile Applications</strong>: Suitable for various materials, from textiles to non-woven fabrics and hard surfaces, providing flexibility in branding and decoration.</li>
                            <li><strong>Durability and Resistance</strong>: Transfers are designed to withstand washing, abrasion, and exposure to sunlight, ensuring long-lasting vibrancy and clarity.</li>
                            <li><strong>Photorealistic Effects</strong>: Ideal for reproducing photographic images, detailed logos, and intricate designs with precision and clarity.</li>
                            <li><strong>Customization</strong>: Offers the ability to match specific colors and create custom designs, tailored to your brand’s needs.</li>
                            <li><strong>Easy Application</strong>: Applied using a thermal press, these transfers offer a quick and efficient way to achieve professional-quality results.</li>
                            <li><strong>Environmentally Friendly</strong>: Produced using eco-friendly inks and processes, making them a sustainable option for brands focused on environmental responsibility.</li>
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
