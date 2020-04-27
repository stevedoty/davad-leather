import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const Header = () => (
    <div className="header">
        <div className="header-item">
            <Link to='/'>
                <div className="">Home</div>
            </Link>
        </div>
        <div className="header-item">
            <Link to='/gallery'>
                <div className="">Gallery</div>
            </Link>
        </div>
        <div className="header-item">
            <Link to='/story'>
                <div className="">My Story</div>
            </Link>
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
)

export default Header;