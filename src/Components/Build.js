import React, { Component } from 'react'
import '../CSS/Build.css'

const floor = require('../Images/floor.jpg')
const underStory = require('../Images/understory.jpg')
const canopy = require('../Images/canopy.jpg')
const emergent = require('../Images/emergent.jpg')
const arrow = require('../Images/arrow.png')

class Build extends Component {
  state = {
    expandedBox: false
  }

  expandInfo(e) {
    const currentTarget = e.target.id
    const hiddenElement = document.getElementsByClassName('hidden' + currentTarget)
    this.state.expandedBox
    ? (
        hiddenElement[0].style.height =0,
        document.getElementById(currentTarget).style.transform = 'rotate(0deg)',
        this.setState({expandedBox: false})
      )
    : (
        hiddenElement[0].style.height = '100%',
        document.getElementById(currentTarget).style.transform = 'rotate(180deg)',
        this.setState({expandedBox: true})
      )
  }

  render() {
    return(
      <div className='buildContainer'>
        <div className='forestInfoBox level1'>
          <img src={arrow} alt='not available' className='titleButton' id='Level1' onClick={ e => this.expandInfo(e)}></img>
          <h1>Emergent Layer</h1>
          <div className='hiddenInformation hiddenLevel1'>
            <img src={emergent} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h1>info about this bit</h1>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level2'>
          <img src={arrow} alt='not available' className='titleButton' id='Level2' onClick={ e => this.expandInfo(e)}></img>
          <h1>Canopy Layer</h1>
          <div className='hiddenInformation hiddenLevel2'>
            <img src={canopy} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h1>info about this bit</h1>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level3'>
          <img src={arrow} alt='not available' className='titleButton' id='Level3' onClick={ e => this.expandInfo(e)}></img>
          <h1>Understory</h1>
          <div className='hiddenInformation hiddenLevel3'>
            <img src={underStory} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h1>info about this bit</h1>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level4'>
          <img src={arrow} alt='not available' className='titleButton' id='Level4' onClick={ e => this.expandInfo(e)}></img>
          <h1>Forest Floor</h1>
          <div className='hiddenInformation hiddenLevel4'>
            <img src={floor} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h1>info about this bit</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Build
