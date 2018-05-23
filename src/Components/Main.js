import React, { Component } from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import Banner from './Banner'
import Home from './Home'
import Donate from './Donate'

class Main extends Component {

  render() {
    return(
      <Router>
        <div className='mainContainer'>
          <Route render={(props) => <Banner {...this.props} {...props}/>} />
          <Route exact path='/' render={(props) => <Home {...this.props} {...props}/>}/>
          <Route exact path='/donate' render={(props) => <Donate {...this.props} />}/>
        </div>
      </Router>
    )
  }
}

export default Main
