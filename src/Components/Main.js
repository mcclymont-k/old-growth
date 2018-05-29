import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Banner from './Banner'
import Home from './Home'
import Donate from './Donate'
import Build from './Build'
import News from './News'

class Main extends Component {

  render() {
    return(
      <Router>
        <div className='mainContainer'>
          <Route render={props => <Banner {...this.props} {...props}/>} />
          <Route exact path='/' render={props => <Home {...this.props} {...props}/>} />
          <Route exact path='/donate' render={props => <Donate {...this.props} />} />
          <Route exact path='/build' render={props => <Build {...this.props} {...props}/>} />
          <Route exact path='/news' render={props => <News {...this.props} {...props} />} />
        </div>
      </Router>
    )
  }
}

export default Main
