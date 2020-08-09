import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const Header = () => (
  <div className="header-container">
    <div className="header">
        <div className="header-item">
            <a href="#landing-page">
                <div className="">Home</div>
            </a>
        </div>
        <div className="header-item">
            <a href="#gallery-page">
                <div className="">Gallery</div>
            </a>
        </div>
        <div className="header-item">
            <a href="#story-page">
                <div className="">My Story</div>
            </a>
        </div>
        <div className="header-item">
            <div className="">Search</div>
        </div>
        <div className="header-item">
            <div className="">Sign In</div>
        </div>
        <div className="header-item">
            <ShoppingIcon className="shopping-icon"/>
        </div>
    </div>
  </div>
)

export default Header;
