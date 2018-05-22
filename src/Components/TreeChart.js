import React, { Component } from 'react'
import * as d3 from 'd3'
import '../CSS/TreeChart.css'
const owl = require('../Images/owl.jpeg')
const bat = require('../Images/bat.jpg')
class TreeChart extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        {
          animal: 'bat',
          x: 330,
          y: 620
        },
        {
          animal: 'owl',
          x: 20,
          y: 20
        }
      ]
    }
  }
  componentDidMount() {
    let treeChart = d3.select(this.refs.treeChart)
    let line = d3.line()
      .curve(d3.curveBasis)
      .x((d) => d.x)
      .y((d) => d.y)

    treeChart.append('path')
      .attr('d', line(this.state.images))
      .attr('stroke', 'black')
  }

  render() {
    return (
      <div className='treeChartContainer'>
        <svg height='700px' width='350px' ref='treeChart' />
        <div className='treeCover'>
          <img className='treeImage' src={owl} />
          <img className='treeImage bat' src={bat} />

        </div>

      </div>
    )
  }
}

export default TreeChart
