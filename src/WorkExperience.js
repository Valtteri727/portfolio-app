import React from 'react';
import rannikonPuutarhaLogo from './rannikon_puutarha_logo.jpg';
import kCitymarketLogo from './k_citymarket_logo.jpg';
import vihannestukkuObergLogo from './vihannestukku_oberg_logo.jpg';
import tokmanniTiirioLogo from './tokmanni_tiirio_logo.jpg';

function WorkExperience() {
  return (
    <div className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-content">
        <div className="experience-item">
          <div className="experience-info">

            <div className="experience-details">
              <h3>Sales Person - Rannikon Puutarha</h3>
              <p className="experience-time">05/2016 – 08/2016, 05/2017 – 08/2017, 05/2018 – 08/2018</p>
            </div>
          </div>
          <p>I worked as a salesperson at Rannikon Puutarha's stalls in Salo during the summers. My tasks included selling berries, fruits, and vegetables, cashier work, and general maintenance of the work station.</p>
        </div>
        <img src={rannikonPuutarhaLogo} alt="Rannikon Puutarha Logo" className="experience-logo" />

        <div className="experience-item">
          <div className="experience-info">
         
            <div className="experience-details">
              <h3>Sales Clerk - K-Citymarket Salo</h3>
              <p className="experience-time">05/2019 – 08/2019</p>
            </div>
          </div>
          <p>I worked as a summer employee at K-Citymarket in Salo and worked as a shelf stocker and provided general assistance in the store's tasks.</p>
        </div>
        <img src={kCitymarketLogo} alt="K-Citymarket Logo" className="experience-logo" />
        <div className="experience-item">
          <div className="experience-info">
            
            <div className="experience-details">
              <h3>Salesperson - Vihannestukku Öberg</h3>
              <p className="experience-time">05/2020 – 12/2020, 09/2021 – 08/2022</p>
            </div>
            
          </div>
          <p>At Vihannestukku Öberg, I worked as a sales clerk. My tasks included cashier work, selling vegetables, fruits, berries, and canned goods, ensuring the quality of products, packing wholesale goods, and transporting them. I also gained experience in operating a forklift. General store maintenance, such as cleaning and opening and closing tasks, were also part of my job description.</p>
        </div>
        <img src={vihannestukkuObergLogo} alt="Vihannestukku Öberg Logo" className="experience-logo" />
        <div className="experience-item">
          <div className="experience-info">
            
            <div className="experience-details">
              <h3>Sales Clerk - Tokmanni Tiiriö</h3>
              <p className="experience-time">05/2023 – 08/2023</p>
            </div>
          </div>
          <p>I worked as a sales clerk at Tokmanni Tiiriö. My tasks included maintaining store cleanliness, restocking shelves, cashier work, and other customer service duties.</p>
        </div>
        <img src={tokmanniTiirioLogo} alt="Tokmanni Tiiriö Logo" className="experience-logo" />
      </div>
    </div>
  );
}

export default WorkExperience;
