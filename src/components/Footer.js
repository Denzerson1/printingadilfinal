import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0 w-full md:w-1/3">
          <h1 className="text-2xl font-bold mb-2">PrintingAdil</h1>
          <p className="text-sm">
            PrinterAdil is committed to providing the best products and services. Our mission is to enhance your experience with our innovative solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full md:w-2/3">
          <div className="w-full md:w-1/3 md:pl-8"> {/* Added padding to the left here */}
            <h2 className="text-lg font-semibold mb-2">Helpful Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Legal</h2>
            <ul className="text-sm space-y-1">
              <li><a href="/tos" className="hover:underline">Terms of Service</a></li>
              <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/legalnotice" className="hover:underline">Legal Notice</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm px-4">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692V11.11h3.118V8.412c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.596h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775A4.933 4.933 0 0 0 23.337 3.1a9.865 9.865 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.707 0-4.907 2.2-4.907 4.917 0 .386.045.76.127 1.121A13.968 13.968 0 0 1 1.675 3.148a4.905 4.905 0 0 0 1.523 6.564 4.875 4.875 0 0 1-2.223-.615v.061c0 2.385 1.693 4.376 3.946 4.827a4.94 4.94 0 0 1-2.21.084c.622 1.942 2.426 3.355 4.564 3.395A9.866 9.866 0 0 1 0 20.3a13.936 13.936 0 0 0 7.548 2.212c9.051 0 14.001-7.496 14.001-13.986 0-.214-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c3.263 0 3.67.013 4.947.072 1.277.059 2.162.273 2.947.586a5.931 5.931 0 0 1 2.14 1.39 5.931 5.931 0 0 1 1.39 2.14c.313.785.527 1.67.586 2.947.059 1.277.072 1.684.072 4.947s-.013 3.67-.072 4.947c-.059 1.277-.273 2.162-.586 2.947a5.931 5.931 0 0 1-1.39 2.14 5.931 5.931 0 0 1-2.14 1.39c-.785.313-1.67.527-2.947.586-1.277.059-1.684.072-4.947.072s-3.67-.013-4.947-.072c-1.277-.059-2.162-.273-2.947-.586a5.931 5.931 0 0 1-2.14-1.39 5.931 5.931 0 0 1-1.39-2.14c-.313-.785-.527-1.67-.586-2.947C.013 15.67 0 15.263 0 12s.013-3.67.072-4.947c.059-1.277.273-2.162.586-2.947a5.931 5.931 0 0 1 1.39-2.14 5.931 5.931 0 0 1 2.14-1.39c.785-.313 1.67-.527 2.947-.586C8.33.013 8.737 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.844a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} PrintingAdil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
