import React, { Component } from 'react'
import '../CSS/Build.css'

const floor = require('../Images/floor.jpg')
const underStory = require('../Images/understory.jpg')
const canopy = require('../Images/canopy.jpg')
const emergent = require('../Images/emergent.jpg')

class Build extends Component {
  state = {
    expandedBox: false
  }

  expandInfo(e) {
    const currentTarget = e.target.id
    e.target.nextElementSibling.style.maxHeight === '4000px'
    ? e.target.nextElementSibling.style.maxHeight = null
    : e.target.nextElementSibling.style.maxHeight = '4000px'
    const container = document.getElementsByClassName('buildContainer')[0]
    let selector = 'expanded' + currentTarget
    container.classList.toggle(selector)
  }

  render() {
    return(
      <div className='buildContainer'>
        <div className='forestInfoBox level1'>
          <h1 className='titleButton' id='Level1' onClick={ e => this.expandInfo(e)}>Emergent Layer</h1>
          <div className='hiddenInformation'>
            <img src={emergent} className='forestPic'/>
          </div>
        </div>
        <div className='forestInfoBox level2'>
          <h1 className='titleButton' id='Level2' onClick={ e => this.expandInfo(e)}>Canopy Layer</h1>
          <div className='hiddenInformation'>
            <img src={canopy} className='forestPic'/>
          </div>
        </div>
        <div className='forestInfoBox level3'>
          <h1 className='titleButton' id='Level3' onClick={ e => this.expandInfo(e)}>Understory</h1>
          <div className='hiddenInformation'>
            <img src={underStory} className='forestPic'/>
          </div>
        </div>
        <div className='forestInfoBox level4'>
          <h1 className='titleButton' id='Level4' onClick={ e => this.expandInfo(e)}>Forest Floor</h1>
          <div className='hiddenInformation'>
            <img src={floor} className='forestPic'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Build
