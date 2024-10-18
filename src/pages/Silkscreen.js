import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/SilkscreenOptions';
import backgroundImage from '../images/silkscreen.jpg';
import ScrollToTop from '../components/ScrollToTop';

const SilkscreenPage = () => {
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
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                                SERIGRAPH & SILKSCREEN TRANSFERS
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
                                <li className="text-gray-800">SERIGRAPH & SILKSCREEN TRANSFERS</li>
                            </ol>
                        </div>
                    </nav>

                    {/* Content Section */}
                    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
                        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                            <p className="text-gray-800 text-sm sm:text-base md:text-l leading-relaxed">
                                <strong>Serigraphy</strong> is a printing process that uses a blade to press ink through mesh screens of various gauges.
                                <strong> A silkscreen transfer</strong>, printed onto a specific paper, is a graphic that is applied with a thermal press onto multiple forms of support (textile, non-woven fabrics, cardboard, etc,...).
                            </p>
                            <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-6">Silkscreen transfers have a number of advantages:</h2>
                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-l">
                                <li><strong>Quick and easy application</strong>: Branding applied in a few seconds with a thermal press.</li>
                                <li><strong>Durable quality</strong>: Ideal solution for a perfect, long-lasting result. Economically and environmentally advantageous, promoting a favourable long term image.</li>
                                <li><strong>Limitless creativity</strong>: Printing of all sorts of visuals, simple or complex, clean-cut or finely detailed (labels, illustrations, logos, photographic images...), giving free rein to your imagination.</li>
                                <li><strong>Special effects</strong>: Potential to stand-out by incorporating options such as glitter or fluorescent colours, for example.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Showcase />
                <Footer />
            </div>
        </ScrollToTop>
    );
};

export default SilkscreenPage;
