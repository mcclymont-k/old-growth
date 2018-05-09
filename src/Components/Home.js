import React, {Component} from 'react'
import Banner from './Banner'
import firebase from 'firebase'
import '../App.css'

const forest = require('../Images/forest.jpg')

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Banner />
        <div className='bannerContainer'>
          <img className='bannerImage' src={forest} />
          <h1>Old Growth</h1>
        </div>
        <div className='tester'>
        </div>
      </div>
    )
  }
}

export default Home
