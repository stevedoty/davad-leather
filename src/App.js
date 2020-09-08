import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.js';
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js';



import './App.css';

class App extends React.Component {

    render(){

      return (
        <div className="App">
        <i className="fas fa-home"></i>
            <Header className="header"/>
            <Body className="body"/>
            <Footer className="footer"/>
        </div>
      );
    }
}

export default App;
