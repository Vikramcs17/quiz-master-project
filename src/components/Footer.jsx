import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Quiz Master</h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Empowering learners through interactive quizzes and comprehensive knowledge assessment.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">Home</span>
                </a>
              </li>
              <li>
                <a href="#subjects-section" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">Subjects</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">About</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">Feedback</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@quizmaster.com" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <span className="hover:translate-x-1 transition-transform duration-300">contact@quizmaster.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Quiz Master. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;