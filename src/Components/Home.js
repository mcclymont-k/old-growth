import React, {Component} from 'react'
import Banner from './Banner'
import firebase from 'firebase'
import '../App.css'

const tree = require('../Images/tree.ico')
const forest = require('../Images/forest.jpg')

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Banner />
        <div className='bannerContainer'>
          <img className='bannerImage' src={forest} />
          <div className='titleContainer'>
            <h1>old growTh</h1>
            <h2>FOREST BUILDING FOR THE FUTURE</h2>
          </div>
        </div>
        <div className='tester'>
        </div>
      </div>
    )
  }
}

export default Home
