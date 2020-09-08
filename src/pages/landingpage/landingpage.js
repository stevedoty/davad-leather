import React from 'react';

import landingPageImage from '../../assets/landing-page-image.jpg';

const LandingPage = () => (
    <div id="landing-page"
      style={{
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
       }}>
        <div className="summary">
            <h1>Davad Leather</h1>
            <h5>Handmade One of a Kind Leatherwork</h5>
        </div>
    </div>
)

export default LandingPage;
