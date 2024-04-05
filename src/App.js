import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import EducationalBackground from './EducationalBackground';
import WorkExperience from './WorkExperience';

function App() {
  const [isRgbOn, setIsRgbOn] = useState(false); 

  const handleRgbToggle = () => {
    setIsRgbOn(!isRgbOn);
    const body = document.querySelector('body');
    if (isRgbOn) {
      body.classList.remove('rgb-lights-on');
    } else {
      body.classList.add('rgb-lights-on');
    }
  };

  return (
    <div>
      
      <div className="flipswitch">
        <input
          type="checkbox"
          name="flipswitch"
          className="flipswitch-cb"
          id="fs"
          checked={isRgbOn}
          onChange={handleRgbToggle}
        />
        <label className="flipswitch-label" htmlFor="fs">
          <div className="flipswitch-inner"></div>
          <div className="flipswitch-switch"></div>
        </label>
      </div>

    
      <div className="container">
        <PersonalInfo />
        <hr />
        <Projects />
        <hr />
        <EducationalBackground />
        <hr />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
