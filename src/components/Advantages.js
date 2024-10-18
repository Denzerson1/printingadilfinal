import React from 'react';
import Innovation from '../images/advantages1.jpg';
import Knowledge from '../images/knowledge.png';
import Fabric from '../images/fabric.png';
import Environment from '../images/environment.png';
import { Link } from 'react-router-dom';

const InnovationAndTransfers = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl font-bold">INNOVATION AND TRANSFERS</h2>
            <p className="mt-4 text-gray-700">
              The textile industry, in perpetual evolution, creates ever more technical fabrics requiring innovative branding processes. This is why we dedicate a significant portion of our revenue to the research and development of new products and processes.
            </p>
            <p className="mt-2 text-gray-700">
              Keeping informed of current trends, we also adapt our products to incorporate with the latest materials, textures, and colours.
            </p>
            <Link to="/about">
              <button className="mt-6 px-6 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
                Our expertise
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 text-center">
            <img 
              src={Innovation} 
              alt="Innovation Image" 
              className="w-full h-auto" 
              style={{ userSelect: 'none' }} // Make image unselectable
              draggable="false" // Make image undraggable
            />
          </div>
        </div>

        {/* Logos and Text Section */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="text-center">
            <img 
              src={Knowledge} 
              alt="Experience" 
              className="mx-auto mb-4 h-20 w-20 object-contain" 
              style={{ userSelect: 'none' }} // Make image unselectable
              draggable="false" // Make image undraggable
            />
            <h3 className="text-lg font-bold">10 YEARS EXPERIENCE</h3>
          </div>
          <div className="text-center">
            <img 
              src={Fabric} 
              alt="Austrian Fabrication and Quality" 
              className="mx-auto mb-4 h-20 w-20 object-contain" 
              style={{ userSelect: 'none' }} // Make image unselectable
              draggable="false" // Make image undraggable
            />
            <h3 className="text-lg font-bold">AUSTRIAN FABRICATION AND QUALITY</h3>
          </div>
          <div className="text-center">
            <img 
              src={Environment} 
              alt="Environmentally Responsible" 
              className="mx-auto mb-4 h-20 w-20 object-contain" 
              style={{ userSelect: 'none' }} // Make image unselectable
              draggable="false" // Make image undraggable
            />
            <h3 className="text-lg font-bold">ENVIRONMENTALLY RESPONSIBLE COMPANY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationAndTransfers;
