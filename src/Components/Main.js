import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Banner from './Banner'
import Home from './Home'
import Donate from './Donate'
import Build from './Build'

class Main extends Component {

  render() {
    return(
      <Router>
        <div className='mainContainer'>
          <Route render={props => <Banner {...this.props} {...props}/>} />
          <Route exact path='/' render={props => <Home {...this.props} {...props}/>}/>
          <Route exact path='/donate' render={props => <Donate {...this.props} />}/>
          <Route exact path='/build' render={props => <Build {...this.props} {...props}/>} replace/>
        </div>
      </Router>
    )
  }
}

export default Main
