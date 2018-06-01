import React, {Component} from 'react'
import DataPieChart from './DataPieChart'
import TreeChart from './TreeChart'
import '../App.css'

const forest = require('../Images/forest.jpg')
const book = require('../Images/book.png')
const research = require('../Images/research.jpeg')
const plant = require('../Images/plant.png')
const forestComplete = require('../Images/forestComplete.jpg')

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
      ?  offSet > titleOffSet - 30
        ? (
            titleGrab.style.position = 'fixed',
            titleGrab.style.fontSize = '50px',
            titleGrab.style.color = 'orange',
            titleGrab.style.fontWeight = 'normal',
            titleGrab.style.width = '20%',
            titleGrab.style.margin = 'auto',
            titleGrab.style.zIndex = 1
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
        <div className='homeInfoSection'>
          <div className='textHomeInfoSection'>
            <h1>About</h1>
            <h2>
              Old growth is an organisation commited to educating people on the
              structure and function of an established forest and supplying them the skills
              to begin developing one themselves
            </h2>
          </div>
          <div className='infographics'>
            <div className='singleInfoGraphic'>
              <img src={book} className='infoImage'/>
              <h1>Learn</h1>
            </div>
            <div className='singleInfoGraphic'>
              <img src={research} className='infoImage'/>
              <h1>Research local tree species</h1>
            </div>
            <div className='singleInfoGraphic'>
              <img src={plant} className='infoImage'/>
              <h1>Design and plant</h1>
            </div>
            <div className='singleInfoGraphic'>
              <img src={forestComplete} className='infoImage'/>
              <h1>Watch it grow</h1>
            </div>
          </div>
        </div>
        <DataPieChart />
        <div className='line' />
        <TreeChart />
      </div>
    )
  }
}

export default Home
