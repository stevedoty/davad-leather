import React from 'react';
import './App.css';

class App extends React.Component {

    render(){
    const navbar=["Home", "About", "Contact", "Cart"]
      return (
        <div className="App">
            <div className="navbar">{ navbar.map( item => <div>item</div>)}</div>
            <div className="home-page"></div>
            <div className="about-page"></div>
            <div className="contact-page"></div>
            <div className="cart-page"></div>
        </div>
      );
    }
}

export default App;
