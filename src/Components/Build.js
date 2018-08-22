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
        hiddenElement[0].style.height = '500px',
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
              <h2>
                The emergent layer describes the tallest trees that extend their reach
                out of the forest canopy. This layer receives the most sunlight per day
                and so often exhibits the brightest colored leaves. This layer, however, is also
                exposed to the extremes of weather and temperature and is less protected
                by the surrounding forest.<br/><br/>
                The emergent layer is home to; eagles, bats, gliding birds, insects(particularly butterflies) and monkeys.<br/><br/>
                Examples of emergent layer trees:<br/>
                . White Pine,
              </h2>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level2'>
          <img src={arrow} alt='not available' className='titleButton' id='Level2' onClick={ e => this.expandInfo(e)}></img>
          <h1>Canopy Layer</h1>
          <div className='hiddenInformation hiddenLevel2'>
            <img src={canopy} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h2>
                The canopy layer is the thickest and most competetive layer of the forest.
                This layer is dominated by fruits, nuts and seeding trees that are fighting for light and resources.
                The thick layering of the canopy creates a microclimate in the understory and shield
                of protection against wild weather and storng winds.<br/><br/>
                It is estimated that up to 90% of all animals in the forest live in the canopy
                due to the abundance of food. Canopy dwelling anials include; snakes,
                frogs, parrots, squirrels, sloths, bats, owls.<br/><br/>
                Examples of canopy layer trees include:

              </h2>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level3'>
          <img src={arrow} alt='not available' className='titleButton' id='Level3' onClick={ e => this.expandInfo(e)}></img>
          <h1>Understory</h1>
          <div className='hiddenInformation hiddenLevel3'>
            <img src={underStory} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h2>
                The understory or undergrowth comprises plants that live below the canopy
                layer. This layer has limited light penetration due to the thick canopy
                and so is comprised of shade tolerant plants. The understory has a more
                consistant temperature and is significantly more humid than the other layers.
                The understory is home to larger mammalian species including; moose, jaguars, coyotes,
                deer and bears. It also has a large quantity of insect species such as moths, butterflies
                and mosquitos.<br/><br/>
                Examples of understory plants include:

              </h2>
            </div>
          </div>
        </div>
        <div className='forestInfoBox level4'>
          <img src={arrow} alt='not available' className='titleButton' id='Level4' onClick={ e => this.expandInfo(e)}></img>
          <h1>Forest Floor</h1>
          <div className='hiddenInformation hiddenLevel4'>
            <img src={floor} alt='not available' className='forestPic'/>
            <div className='hiddenTextBox'>
              <h2>
                The forest floor is a unique and important part of the ecosystem. It is
                characterized by a thick layer of decomposing organic matter
                and is comprised of leaf litter and a layer called the humus.
                The litter is made up of fallen leaves, bark, twigs and animal droppings and
                the humus is a completely decayed layer of soil that is nutrient dense and porous.
                The system creates a recycling effect that returns organic matter
                into the soil. This section tends to attract small flowering and herbacious plants
                as well as vines, creepers and an array of moses and lichens.
                This area is dominated by invertebrates and smaller mammals, particularly those
                that burrow.<br/><br/>
                Examples of forest floor plants include:
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Build
