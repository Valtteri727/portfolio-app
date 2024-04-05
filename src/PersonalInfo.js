import React from 'react';

import myPicture from './my_picture.jpg'; 

function PersonalInfo({ isRgbOn, handleRgbToggle }) {
  return (
    <div className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="section-content">
        <div className="profile-section">
          <img src={myPicture} alt="Valtteri Laine" className="profile-picture" />
          {/* RGB lights switch */}
          <p>Surprise --></p>
          <div className="flipswitch">
            <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" checked={isRgbOn} onChange={handleRgbToggle} />
            <label className="flipswitch-label" htmlFor="fs">
              <div className="flipswitch-inner"></div>
              <div className="flipswitch-switch"></div>
            </label>
          </div>
        </div>
        <div className="info">
          <h3>Name:</h3>
          <p>Valtteri Laine</p>
          <h3>Email:</h3>
          <p><a href="mailto:valtsulaine@gmail.com">valtsulaine@gmail.com</a></p>
          <h3>Contact Me</h3>
          <p>0400182440</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
