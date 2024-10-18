import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showcase from '../components/DtfOptions';
import backgroundImage from '../images/dtfmain.jpg'; // Replace with the path to your background image
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
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <p className="text-gray-800 text-sm sm:text-base md:text-l leading-relaxed">
              <strong>DTF (Direct To Film) Transfers</strong> are the cutting-edge in digital printing, allowing for precise artwork application directly onto transparent film. This innovative method is ideal for small to medium-sized orders, offering unmatched versatility and efficiency for textile supports.
            </p>
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-6">
              Advantages of DTF Transfers:
            </h2>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-800 text-sm sm:text-base md:text-l">
              <li><strong>Unrestricted Creative Freedom</strong>: Reproduce intricate designs, including detailed artwork, images, photos, and logos. DTF transfers allow for both vivid color gradients and solid color blocks, expanding your creative possibilities.</li>
              <li><strong>Clean and Precise Application</strong>: Achieve sharp, clean edges and accurate color placement without unwanted outlines or color overrun, enhancing the visual appeal of your designs.</li>
              <li><strong>Versatility Across Textiles</strong>: Suitable for most traditional textiles, whether light or dark, DTF transfers offer exceptional adaptability.</li>
              <li><strong>Durability and Wash Resistance</strong>: With excellent resistance to washing, DTF transfers maintain their vibrancy and integrity even after multiple machine washes at temperatures up to 60ºC (140°F).</li>
              <li><strong>Quick and Easy Application</strong>: Supplied on a transparent paper backing, these transfers are easy to position and apply, streamlining your production process with a heat press.</li>
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
