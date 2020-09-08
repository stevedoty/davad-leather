import React from 'react';

import Header from './components/header/header.js';
import Body from './components/body/body.js';
import Footer from './components/footer/footer.js';



import './App.css';

class App extends React.Component {

    render(){

      return (
        <div className="App">
            <Header className="header"/>
            <Body className="body"/>
            <Footer className="footer"/>
        </div>
      );
    }
}

export default App;
