import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-sky-600">
            <span className=" text-left text-xl">Toddler's Learning</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Empowering young minds with interactive and engaging learning experiences.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-600 tracking-widest text-sm mb-3">LEARNING CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Alphabets Learning</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Urdu Learning</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Maths Learning</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Animal Exploration</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Botanical Adventures</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Furniture Exploration</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-600 tracking-widest text-sm mb-3">RESOURCES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Learning Materials</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Tutorials</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Workshops</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-600 tracking-widest text-sm mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our Mission</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our Team</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-600 tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Feedback</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Toddler's Learning
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-gray-500 hover:text-sky-600">
              <FaFacebookF className="w-5 h-5 hover:text-sky-600" />
            </a>
            <a href="https://twitter.com" className="ml-3 text-gray-500 hover:text-sky-600">
              <FaTwitter className="w-5 h-5 hover:text-sky-600" />
            </a>
            <a href="https://instagram.com" className="ml-3 text-gray-500 hover:text-sky-600">
              <FaInstagram className="w-5 h-5 hover:text-sky-600" />
            </a>
            <a href="https://linkedin.com" className="ml-3 text-gray-500 hover:text-sky-600">
              <FaLinkedinIn className="w-5 h-5 hover:text-sky-600" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
