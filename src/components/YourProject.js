import React from 'react';
import photo from '../images/machine.jpg';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={photo} alt="Project Image" className="w-full h-auto object-cover" />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">YOUR PROJECT...</h2>
          <p className="text-gray-700 mb-4 text-center lg:text-left">
            We support your projects according to your specifications.
          </p>
          <p className="text-gray-700 mb-4 text-center lg:text-left">
            Our communication with you will allow us to propose the best solution for your textile branding.
          </p>
          <p className="text-gray-700 mb-4 text-center lg:text-left">
            Tests on your fabrics can be carried out by our teams, or samples expedited upon request.
          </p>
          <p className="text-gray-700 mb-4 text-center lg:text-left">
            Our 45 years of expertise has built a renowned knowledge base, as well as a deep understanding of your specific realms of activity. As true transfer professionals, we are at your service, motivated by the desire to successfully complete your projects.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-2 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
