import React from 'react';
import image1 from '../images/showcase1.jpg';
import image2 from '../images/showcase2.jpg';
import image3 from '../images/showcase3.jpg';

const TransferCard = ({ image, title, link }) => {
  return (
    <a href={link} className="relative group w-full h-64 rounded overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-opacity-80">
        <div className="text-white font-semibold text-lg px-4 py-2 bg-black bg-opacity-50 group-hover:bg-white group-hover:text-black transition-colors duration-300">
          {title}
        </div>
      </div>
    </a>
  );
};

const TransferOptions = () => {
  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-8/12">
        <TransferCard
          image={image1}
          title="Serigraph Transfers"
          link="/silkscreen"
        />
        <TransferCard
          image={image2}
          title="Direct to film Transfers"
          link="/dtf"
        />
        <TransferCard
          image={image3}
          title="3D Silicone Transfers"
          link="/silicone"
        />
      </div>
    </div>
  );
};

export default TransferOptions;
