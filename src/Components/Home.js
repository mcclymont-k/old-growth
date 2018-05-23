import React, {Component} from 'react'
import DataPieChart from './DataPieChart'
import TreeChart from './TreeChart'
import '../App.css'

const forest = require('../Images/forest.jpg')

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const titleGrab = document.getElementById('title')
    let titleOffSet = titleGrab.offsetTop

    // Manages the title position on scroll
    window.onscroll = function(e){
      let offSet = window.pageYOffset
      offSet
      ?  offSet > titleOffSet - 40
        ? (
            titleGrab.style.position = 'fixed',
            titleGrab.style.fontSize = '50px',
            titleGrab.style.color = '#ec4700',
            titleGrab.style.fontWeight= 'normal',
            titleGrab.style.width = '20%',
            titleGrab.style.margin = 'auto',
            titleGrab.style.zIndex= 1
          )
        : (
            titleGrab.style.position = 'static',
            titleGrab.style.fontSize = '60px',
            titleGrab.style.color = 'white',
            titleGrab.style.fontWeight = 'bold',
            titleGrab.style.width = '100%',
            titleGrab.style.zIndex = '0'
          )
      : []
    }
  }

  render() {
    return (
      <div>
        <div className='bannerContainer'>
            <img className='bannerImage' src={forest} />
            <div className='titleContainer'>
              <h1 id='title'>old growTh</h1>
              <h2>FOREST BUILDING FOR THE FUTURE</h2>
            </div>
        </div>
        <DataPieChart />
        <TreeChart />
      </div>
    )
  }
}

export default Home
