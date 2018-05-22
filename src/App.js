import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Banner from './Components/Banner'
import MyProvider from './Components/MyProvider'
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import Donate from './Components/Donate'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MyProvider>
          <div className='mainContainer'>
            <Banner />
            <Route exact path='/' component={Home}/>
            <Route exact path='/donate' component={Donate}/>
          </div>
        </MyProvider>
      </Router>
    )
  }
}

export default App;
