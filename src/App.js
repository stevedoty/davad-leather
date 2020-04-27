import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.js';
import HomePage from './pages/homepage/homepage.js';
import AboutPage from './pages/aboutpage/aboutpage.js';
import ContactPage from './pages/contactpage/contactpage.js';
import CheckoutPage from './pages/checkoutpage/checkoutpage.js';



import './App.css';

class App extends React.Component {

    render(){

      return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/story' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
            </Switch>
            <div className="footer">footer</div>
        </div>
      );
    }
}

export default App;
