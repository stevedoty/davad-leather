import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.js';
import LandingPage from './pages/landingpage/landingpage.js';
import GalleryPage from './pages/gallerypage/gallerypage.js';
import StoryPage from './pages/storypage/storypage.js';
import CheckoutPage from './pages/checkoutpage/checkoutpage.js';
import Footer from './components/footer/footer.js';



import './App.css';

class App extends React.Component {

    render(){

      return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/gallery' component={GalleryPage}/>
                <Route path='/story' component={StoryPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
            </Switch>
            <Footer className="footer"/>
        </div>
      );
    }
}

export default App;
