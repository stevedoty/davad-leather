import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const Header = () => (
    <div className="header">
        <Link to='/'>
            <div className="">H</div>
        </Link>

        <Link to='/story'>
            <div className="">My Story</div>
        </Link>
        <div className="">Search</div>
        <div className="">Sign In</div>
        <ShoppingIcon className="shopping-icon"/>
    </div>
)

export default Header;