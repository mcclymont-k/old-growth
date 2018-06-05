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
          <div className='infographics'>
            <div className='singleInfoGraphic'>
              <img src={book} className='infoImage'/>
              <h1>Learn</h1>
              <h2>
                About the structure and function of an old growth forest, the
                charachteristics layers, the living structure and the benefits for
                the environment.
              </h2>
            </div>
            <div className='singleInfoGraphic'>
              <img src={research} className='infoImage'/>
              <h1>Research</h1>
              <h2>
                Your local tree species. Each forest will be individual to the
                location in which it is built. Researhcing the predominant tree species
                in your area is essential before you are able to design and plan
              </h2>
            </div>
            <div className='singleInfoGraphic'>
              <img src={plant} className='infoImage'/>
              <h1>Design</h1>
              <h2>
                Using the above information and with a picture of the forest in the
                future, you can begin to plan. You must decide upon the forest function;
                fruiting, nature attracting, weather protection and then desing appropriately.
              </h2>
            </div>
            <div className='singleInfoGraphic'>
              <img src={forestComplete} className='infoImage'/>
              <h1>Plant</h1>
              <h2>
                Now you plant and watch the forest grow.
              </h2>
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
