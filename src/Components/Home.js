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
  componentDidMount() {
    window.onscroll = function(e){
      let offSet = window.pageYOffset
      const titleGrab = document.getElementById('title')
      offSet > 139
      ? (
          titleGrab.style.position = 'fixed',
          titleGrab.style.fontSize = '50px',
          titleGrab.style.color = '#ec4700'
        )
      : (
          titleGrab.style.position = 'static',
          titleGrab.style.fontSize = '60px',
          titleGrab.style.color = 'white'
        )
    }
  }
  render() {
    return (
      <div>
        <div className='bannerContainer'>
          <Banner />
          <img className='bannerImage' src={forest} />
          <div className='titleContainer'>
            <h1 id='title'>old growTh</h1>
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
