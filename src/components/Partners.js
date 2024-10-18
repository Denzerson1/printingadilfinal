import React, { useEffect, useRef } from 'react';
import Header from '../components/Header'; // Replace with your actual header component
import Footer from '../components/Footer'; // Replace with your actual footer component

// Import logos (Replace these with actual paths to your logo images)
import logo1 from '../images/partners/1.png';
import logo2 from '../images/partners/2.png';
import logo3 from '../images/partners/3.png';
import logo4 from '../images/partners/armani.png';
import logo5 from '../images/partners/5.png';
import logo6 from '../images/partners/6.png';
import logo7 from '../images/partners/7.png';
import logo8 from '../images/partners/8.png';
import logo9 from '../images/partners/9.png';
import logo10 from '../images/partners/10.png';

const AmazingPartners = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
    const scrollRef = useRef(null);

    // UseEffect to create a continuous scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const startScrolling = () => {
            if (!scrollContainer) return;

            // Smooth scroll to the right
            scrollContainer.scrollBy({
                top: 0,
                left: 1,
                behavior: 'smooth'
            });

            // Reset the scroll when it reaches the end
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
        };

        const intervalId = setInterval(startScrolling, 10);

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return (
        <div>
            <div className="bg-white pb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
                    Our Partners
                </h2>
                <div className="overflow-hidden" ref={scrollRef} style={{ display: 'flex', width: '100%' }}>
                    <div className="flex space-x-10">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="h-20 md:h-24 lg:h-28 object-contain"
                                style={{ userSelect: 'none' }} // Make images unselectable
                                draggable="false" // Prevent dragging of images
                            />
                        ))}
                        {/* Repeat the logos to create a seamless scroll effect */}
                        {logos.map((logo, index) => (
                            <img
                                key={`repeat-${index}`}
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="h-20 md:h-24 lg:h-28 object-contain"
                                style={{ userSelect: 'none' }} // Make images unselectable
                                draggable="false" // Prevent dragging of images
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmazingPartners;
