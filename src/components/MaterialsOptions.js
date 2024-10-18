import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import machineImage from '../images/machine.png';
import inkImage from '../images/ink.webp';
import powderImage from '../images/powder.webp';
import filmImage from '../images/film.avif';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';

const ProductOptions = () => {
    const options = [
        {
            image: machineImage,
            label: 'DTF PRINTING MACHINES',
            link: '/materials/machines',
        },
        {
            image: inkImage,
            label: 'DTF INK',
            link: '/materials/ink',
        },
        {
            image: powderImage,
            label: 'DTF POWDER',
            link: '/materials/powder',
        },
        {
            image: filmImage,
            label: 'DTF FILM',
            link: '/materials/film',
        }
    ];

    return (
        <div>
            <ScrollToTop>
                <div className="container mx-auto px-4 py-8">
                    {options.map((option, index) => (
                        <Link to={option.link} key={index} className="block">
                            <div className="flex flex-col md:flex-row items-center border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-md hover:scale-105 mb-6">

                            <div className="w-full md:w-2/3 h-48 bg-cover bg-center" style={{ backgroundImage: `url(${option.image})` }}></div>
                
                                {/* Label */}
                                <div className="w-full md:w-1/3 p-4 flex items-center justify-center bg-white">
                                    <h3 className="text-lg md:text-xl font-semibold text-center md:text-right transition-colors hover:text-blue-600">
                                        {option.label}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </ScrollToTop>
        </div>
    );
};

export default ProductOptions;
