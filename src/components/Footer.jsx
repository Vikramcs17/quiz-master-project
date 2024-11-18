import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#201b4a] text-white py-12 mt-auto relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white !important">Quiz Master</h3>
            <p className="mt-2 text-white !important">
              Empowering learners through interactive quizzes and comprehensive knowledge assessment.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="text-white !important">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-white !important">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white !important">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white !important">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white !important flex items-center justify-center md:justify-start">
                  Home
                </a>
              </li>
              <li>
                <a href="#subjects-section" className="text-white !important flex items-center justify-center md:justify-start">
                  Subjects
                </a>
              </li>
              <li>
                <a href="#" className="text-white !important flex items-center justify-center md:justify-start">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white !important">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white !important flex items-center justify-center md:justify-start">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white !important flex items-center justify-center md:justify-start">
                  Feedback
                </a>
              </li>
              <li>
                <a href="mailto:contact@quizmaster.com" className="text-white !important flex items-center justify-center md:justify-start">
                  contact@quizmaster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white !important text-sm">
            &copy; {new Date().getFullYear()} Quiz Master. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;