import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SubjectCard from './components/SubjectCard'
import { HiOutlineArrowDown } from "react-icons/hi"
import './App.css'
import Footer from './components/Footer'

const App = () => {
  const el = useRef(null);

  const subjects = [
    {
      imageLink: "/src/assets/subject-images/math.jpg",
      subjectName: "Math",
      description: "Test your mathematical skills with our comprehensive quiz covering basic to advanced concepts."
    },
    {
      imageLink: "/src/assets/subject-images/javascript.jpg",
      subjectName: "JavaScript",
      description: "Challenge yourself with JavaScript programming concepts, from basics to advanced topics."
    },
    {
      imageLink: "/src/assets/subject-images/html.jpg",
      subjectName: "HTML",
      description: "Evaluate your HTML knowledge with questions covering structure, elements, and best practices."
    },
    {
      imageLink: "/src/assets/subject-images/css.jpg",
      subjectName: "CSS",
      description: "Test your CSS styling expertise with questions about selectors, properties, and layouts."
    }
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Take a quiz, go ahead!'],
      typeSpeed: 50,
      cursorChar: '|',
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSubjects = () => {
    const subjectsSection = document.getElementById('subjects-section');
    subjectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-wrapper">
      {/* Landing Section */}
      <section className="landing-section relative h-screen w-screen overflow-hidden">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          {/* Typed Text */}
          <div className="text-center mb-12">
            <span 
              ref={el} 
              className="text-4xl text-white font-bold"
              style={{ display: 'inline-block' }}
            ></span>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-24 w-full">
            <SearchBar />
          </div>
          <span className='text-white text-2xl absolute bottom-24'>Scroll down to view subjects</span>
          {/* Scroll Down Indicator */}
          <div 
            className="absolute bottom-8 cursor-pointer "
            onClick={scrollToSubjects}
          >
          
            <HiOutlineArrowDown className="text-white text-4xl animate-bounce " />
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects-section" className="min-h-screen py-20 content-center">
        <div className="container mx-auto px-8 h-full w-full">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Choose Your Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} imageLink={subject.imageLink} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
