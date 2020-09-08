import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faBookOpen, faSearch, faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header-container">
    <div className="header">
        <div className="header-item">
            <a href="#landing-page">
              <FontAwesomeIcon icon={faHome} color="white"/>
            </a>
        </div>
        <div className="header-item">
            <a href="#gallery-page">
              <FontAwesomeIcon icon={faImage} color="white"/>
            </a>
        </div>
        <div className="header-item">
            <a href="#story-page">
              <FontAwesomeIcon icon={faBookOpen} color="white"/>
            </a>
        </div>
        <div className="header-item">
            <div className="logo"><b>DHL</b></div>
        </div>
        <div className="header-item">
            <a href="#search-page">
              <FontAwesomeIcon icon={faSearch} color="white"/>
            </a>
        </div>
        <div className="header-item">
            <a href="#user-page">
              <FontAwesomeIcon icon={faUserCircle} color="white"/>
            </a>
        </div>
        <div className="header-item">
            <a href="#cart-page">
              <FontAwesomeIcon icon={faShoppingBag} color="white"/>
            </a>
        </div>
    </div>
  </div>
)

export default Header;
