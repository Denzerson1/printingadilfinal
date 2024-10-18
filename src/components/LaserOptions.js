import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import image1 from '../images/laserreflective.jpeg';
import image2 from '../images/laserspecial.jpeg';
import image3 from '../images/laserhologram.jpeg';
import image4 from '../images/laserglitter.jpeg';
import ScrollToTop from './ScrollToTop';

const TransferOptions = () => {
    const options = [
        {
            image: image1,
            label: 'REFLECTIVE',
            link: '/lasercut/reflective',
        },
        {
            image: image2,
            label: 'SPECIAL EFFECTS',
            link: '/lasercut/specialeffects',
        },
        {
            image: image3,
            label: 'HOLOGRAM',
            link: '/lasercut/hologram',
        },
        {
            image: image4,
            label: 'GLITTER',
            link: '/lasercut/glitter',
        }
    ];

    return (
        <ScrollToTop>
            <div className="container mx-auto px-4 py-8">
                {options.map((option, index) => (
                    <Link to={option.link} key={index} className="block">
                        <div className="flex flex-col md:flex-row items-center border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-md hover:scale-105 mb-6">
                            {/* Image */}
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
    );
};

export default TransferOptions;
