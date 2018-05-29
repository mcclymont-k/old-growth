import React, { Component } from 'react'
import * as d3 from 'd3'
import '../CSS/TreeChart.css'
const owl = require('../Images/owl.jpeg')
const bat = require('../Images/bat.jpg')
const bear = require('../Images/bear.jpg')
const squirrel = require('../Images/squirrel.jpg')
const cat = require('../Images/cat.jpg')
const mouse = require('../Images/mouse.jpg')
const apex = require('../Images/apex.jpg')
const rabbit = require('../Images/rabbit.jpg')

class TreeChart extends Component {
  constructor() {
    super()
    this.state = {
      mounted: false,
      animalData : {
        animal: 'apex',
        image: this.bat,
        children: [
          {
            animal: 'bat',
            image: owl,
            children: [
              {
                animal: 'squirrel',
                image: owl,
              },
              {
                animal: 'rabbit',
                image: owl,
              },
            ]
          },
          {
            animal: 'bear',
            image: owl,
          },
          {
            animal: 'owl',
            image: this.bat,
            children: [
              {
                animal: 'mouse',
                image: this.bat,
              },
              {
                animal: 'cat',
                image: this.bat,
              }
            ]
          }
        ]
      },
      animalList: [
        {
          name: 'bat',
          description: 'Information about bats,Information about bats,Information about bats,Information about bats,Information about bats,Information about bats, Information about bats, Information about bats, Information about bats'
        },
        {
          name: 'squirrel',
          description: 'Information about squirrels'
        },
        {
          name: 'bear',
          description: 'Information about bears'
        },
        {
          name: 'mouse',
          description: 'Information about mice'
        },
        {
          name: 'cat',
          description: 'Information about cats'
        },
        {
          name: 'rabbit',
          description: 'Information about rabbits'
        },
        {
          name: 'apex',
          description: 'Information about apex predators'
        }
      ]
    }
  }

  componentDidMount() {

    let treeChart = d3.select(this.refs.treeChart)
    let treeMap = d3.tree().size([400, 400])
    let nodes = d3.hierarchy(this.state.animalData)
    nodes = treeMap(nodes)
    let g = treeChart.append('g')

    let link = g.selectAll(".link")
      .data( nodes.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        .style('fill', 'none')
        .style('stroke', 'grey')
        .attr("d", function(d) {
            return "M" + d.x + "," + d.y
            + "C" + d.x + "," + (d.y + d.parent.y) / 2
            + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
            + " " + d.parent.x + "," + d.parent.y
        })

      let node = g.selectAll('.node')
        .data(nodes.descendants())
        .enter().append('g')
          .attr('r', 20)
          .attr('class', (d) => d.data.animal + 'Node')
          .attr('transform', (d) => 'translate(' + (d.x - 20) + ',' + (d.y-20) + ')')

    this.setState({mounted: true})
  }
  componentDidUpdate() {

  }

  renderAnimalImages() {
    this.state.animalList.map((animal, index) => {
      let x = 0
      let y = 0
      let nodeName = document.querySelector('.' + animal.name + 'Node')
      if (nodeName) {
        x = document.querySelector('.' + animal.name + 'Node').__data__.x -20
        y = document.querySelector('.' + animal.name + 'Node').__data__.y -20
        return (
          <div style={{top: y, left: x}} className="treeImageContainer" key={index} >
            <img src={eval(animal.name)} className='treeImage' alt='not available' ref='treeImage' id={index} onMouseOver={(e) => this.handleHover(e)}/>
          </div>
        )

      } else { return }
    })
  }

  handleHover(e) {
    const animalTarget = this.state.animalList[e.target.id]
    const infoBox = document.querySelector('.animalInfoBox')
    infoBox.childNodes[0].innerHTML = animalTarget.name
    infoBox.childNodes[1].innerHTML = animalTarget.description
  }

  render() {
    return (
      <div className='treeChartContainer'>
        <div className='treeAnimalInfoContainer'>
          <div className='animalInfoBox'>
            <h1>Animal</h1>
            <h2>descrioption</h2>
          </div>
        </div>
        <div className='treeVisualContainer'>
          <svg height='400px' width='400px' ref='treeChart' />
          <div className='treeCover'>
            {
          // Map over the animal list and append images on the appropriate tree node
              this.state.animalList.map((animal, index) => {
                let x = 0
                let y = 0
                let nodeName = document.querySelector('.' + animal.name + 'Node')
                if (nodeName) {
                  x = document.querySelector('.' + animal.name + 'Node').__data__.x -20
                  y = document.querySelector('.' + animal.name + 'Node').__data__.y -20
                  return (
                    <div style={{top: y, left: x}} className="treeImageContainer" key={index} >
                      <img src={eval(animal.name)} className='treeImage' alt='not available' ref='treeImage' id={index} onMouseOver={(e) => this.handleHover(e)}/>
                    </div>
                  )

                } else { return }
              })
            }
          </div>
        </div>

      </div>
    )
  }
}

export default TreeChart
