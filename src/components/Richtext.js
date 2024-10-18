import React from 'react';

const RichTextArea = () => {
  return (

    <section className=" text-gray-900 p-4 sm:p-8 rounded-lg w-full sm:w-2/3 max-w-5xl mx-auto my-8">
      <h1 className="text-lg sm:text-xl font-bold mb-4">The leading expert in Textile Transfer Printing</h1>
      <p className="text-base sm:text-lg leading-relaxed mb-4">
      For 5 years, PrintingAdil has pioneered custom textile branding with cutting-edge technology and fully automated processes. 
      Producing more than 25 million high-quality transfers annually, PrintingAdil stands as one of Europe's leading transfer companies, 
      serving a wide range of professional industries
      </p>
      <p className="text-base sm:text-lg leading-relaxed mb-4">
      Catering to professionals, the applications are numerous (ready-to-wear, sportswear, medical, footwear, events...) and meet all your clients' needs. Seripress' teams are continually working and innovating to provide you silkscreen and laser cut transfers that perfectly match with your requirements, overcoming the technical constraints of your support.
      </p>
      {/* Left Arrow <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed mb-4">
        <li>Quality,</li>
        <li>Service,</li>
        <li>Fast Shipping.</li>
      </ul>
      */}
      <blockquote className="text-base sm:text-lg italic border-l-4 border-indigo-600 pl-4">
        "PrintingAdil consistently delivers textile transfers with vibrant and durable results: My trusted partner for every project"
      </blockquote>
    </section>
  );
};

export default RichTextArea;
