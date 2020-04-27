import React from 'react';

import HomePage from './pages/homepage/homepage.js';

import './App.css';

class App extends React.Component {

    render(){
    const navbar=["Home", "About", "Contact", "Cart"]
      return (
        <div className="App">
            <div className="navbar">{ navbar.map( item => <div>{item}</div>)}</div>
            <HomePage/>
            <div className="about-page"></div>
            <div className="contact-page"></div>
            <div className="checkout-page"></div>
        </div>
      );
    }
}

export default App;
