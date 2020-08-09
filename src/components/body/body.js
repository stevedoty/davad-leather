import React from 'react'

import LandingPage from '../../pages/landingpage/landingpage.js';
import GalleryPage from '../../pages/gallerypage/gallerypage.js';
import StoryPage from '../../pages/storypage/storypage.js';
import CheckoutPage from '../../pages/checkoutpage/checkoutpage.js';

const Body = () => (
    <div className="body">
        <div className="body-item">
            <LandingPage />
            <GalleryPage />
            <StoryPage />
            <CheckoutPage />
        </div>
    </div>
)

export default Body;
