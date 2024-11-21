import React from 'react';
import { FaGraduationCap, FaBrain, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-down">
          About <span className="text-[#00ddff]">Quiz Master</span>
        </h1>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-300 mb-12 animate-fade-up">
          <p className="mb-6">
            Quiz Master is your ultimate destination for interactive learning and knowledge assessment.
            Our platform offers a diverse range of quizzes across multiple subjects, designed to challenge
            and enhance your understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-[#00ddff] text-3xl mb-4 flex justify-center">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Educational Excellence</h3>
            <p className="text-gray-300 text-center">
              Carefully crafted questions to enhance your learning experience
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-[#00ddff] text-3xl mb-4 flex justify-center">
              <FaBrain />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Skill Development</h3>
            <p className="text-gray-300 text-center">
              Practice and improve your knowledge across various subjects
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-[#00ddff] text-3xl mb-4 flex justify-center">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Progress Tracking</h3>
            <p className="text-gray-300 text-center">
              Monitor your performance and track your improvement over time
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-300 text-center">
            To provide an engaging and effective platform for learning through interactive quizzes,
            helping students and professionals enhance their knowledge and skills in a fun and
            challenging way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
