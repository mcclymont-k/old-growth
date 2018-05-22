import React, {Component} from 'react'
import Banner from './Banner'
import DataPieChart from './DataPieChart'
import TreeChart from './TreeChart'
import firebase from 'firebase'
import '../App.css'
import { MyContext } from './MyProvider'


const tree = require('../Images/tree.ico')
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
    window.onscroll = function(e){
      let offSet = window.pageYOffset
      offSet
      ?  offSet > titleOffSet - 40
        ? (
            titleGrab.style.position = 'fixed',
            titleGrab.style.fontSize = '50px',
            titleGrab.style.color = '#ec4700',
            titleGrab.style.fontWeight= 'normal',
            titleGrab.style.width = '70%',
            titleGrab.style.margin = 'auto',
            titleGrab.style.zIndex= 1
          )
        : (
            titleGrab.style.position = 'static',
            titleGrab.style.fontSize = '60px',
            titleGrab.style.color = 'white',
            titleGrab.style.fontWeight = 'bold',
            titleGrab.style.width = '100%'
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
