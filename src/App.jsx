import React from 'react'
import Navbar from './components/Navbar.jsx'
import IntroCard from './components/IntroCard.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import SearchBar from './components/SearchBar.jsx'
import SubjectCard from './components/SubjectCard.jsx'
import Typed from 'typed.js';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import './App.css'

const App = () => {
  const el = React.useRef(null);

  let subjects = [
    {
      subjectName: "Math",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis reprehenderit sed dolores voluptatum. Dicta quos ex earum natus beatae!"
    },
    {
      subjectName: "JavaScript",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis reprehenderit sed dolores voluptatum. Dicta quos ex earum natus beatae!"
    },
    {
      subjectName: "HTML",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis reprehenderit sed dolores voluptatum. Dicta quos ex earum natus beatae!"
    },
    {
      subjectName: "CSS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis reprehenderit sed dolores voluptatum. Dicta quos ex earum natus beatae!"
    }
  ]

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Take a quiz, go ahead!'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-container bg-[url('.\assets\quiz-background-images\sound_motion_wave_9.jpg')] animate-fade text-white">
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <Navbar />
        <div className="my-4 text-[48px] text-center">
          <h1><span ref={el} /></h1>
        </div>
        <SearchBar></SearchBar>
        <p className="text-[20px] my-6 animate-fade-down animate-delay-1000">Here are some features</p>
        <div className="flex gap-4">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
        <div className="flex flex-col justify-center items-center mt-16 animate-fade-down animate-delay-1000">
          <p className="text-3xl my-4">Scroll to see subjects</p>
          <MdOutlineKeyboardArrowDown className='text-[56px] animate-bounce' />
        </div>
      </div>
      <div className="bg-slate-100 flex justify-center gap-8 h-screen py-12">
        <SubjectCard subjectName={subjects[0].subjectName} description={subjects[0].description} />
        <SubjectCard subjectName={subjects[1].subjectName} description={subjects[1].description} />
        <SubjectCard subjectName={subjects[2].subjectName} description={subjects[2].description} />
        <SubjectCard subjectName={subjects[3].subjectName} description={subjects[3].description} />
      </div>
    </div>
  )
}

export default App
