import React from 'react';

import HomePage from './pages/homepage/homepage.js';
import AboutPage from './pages/aboutpage/aboutpage.js';
import ContactPage from './pages/contactpage/contactpage.js';
import CheckoutPage from './pages/checkoutpage/checkoutpage.js';

import { ReactComponent as ShoppingIcon } from './assets/shopping-bag.svg';

import './App.css';

class App extends React.Component {

    render(){
    const navbar=["Home", "Gallery", "The Story", "Contact Me", "Checkout"]
      return (
        <div className="App">
            <div className="header">{ navbar.map( item =>
                <div>{item}</div>)}
                <ShoppingIcon className="shopping-icon"/>
            </div>
            <div className="App-body">
                <HomePage/>
                <AboutPage/>
                <ContactPage/>
                <CheckoutPage/>
                <div className="footer"></div>
            </div>
        </div>
      );
    }
}

export default App;
