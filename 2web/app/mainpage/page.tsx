'use client';

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './mnpg.css';
import Sp from '../secondpage/Sp';

const Page: React.FC = () => {
  useEffect(() => {
    const options = {
      strings: [
        " Welcome To Generative AI",
        " Welcome To Autonomous Systems AI",
        " Welcome To Robotic AI",
        " Welcome To Computer Vision AI",
        " Welcome To Superintelligent AI",
        " Welcome To General AI",
       
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    // Cleanup to destroy typed.js instance
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className='main-page'>
    <div className='mnpg-container'>
      <div className="mn-video">
        <video
          src="/blackhole.webm"
          className='blackhole-video rotate-180'
          loop
          autoPlay
          muted
        ></video>
      </div>
      
      <aside className="LP-navbar">
        <h2 className="Subhan-h2">SUBHAN</h2>
        <ul className="LP-inner-list">
          <li onClick={() => handleNavigation("/home")}>Home</li>
          <li onClick={() => handleNavigation("/contact")}>Contact</li>
          <li onClick={() => handleNavigation("/about")}>About</li>
          <li onClick={() => handleNavigation("/portfolio")}>Portfolio</li>
          <li onClick={() => handleNavigation("/news")}>News</li>
        </ul>
      </aside>

      <div className="skills-div">
        
        <span className="auto-type"></span>
      </div>

      <div className="my-intro-and-img">
  <div className="my-img"><img src="/subhan.png" alt="subhan's-photo" /></div>
  <div className="my-intro">Generative AI is an advanced branch of artificial intelligence that creates new content like text, images, music, and code using machine learning models.
     It focuses not just on analyzing data but generating unique outputs based on that data.</div>
</div>b

    </div>
  <Sp/>
    </div>
  );
};

export default Page;
