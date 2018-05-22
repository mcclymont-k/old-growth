import React, { Component }from 'react'
import * as d3 from 'd3'
import '../CSS/DataPieChart.css'

class DataPieChart extends Component {

  constructor() {
    super()
    this.state = {
      forests: [
        {
          place: 'Russia',
          total: 3
        },
        {
          place: 'Norway',
          total: 3
        },
        {
          place: 'France',
          total: 12
        },
        {
          place: 'United Kingdom',
          total: 12
        },
        {
          place: 'Nova Scotia',
          total: 14
        },
        {
          place: 'Australia',
          total: 17
        },
        {
          place: 'US',
          total: 172
        }
      ]
    }

  }

  componentDidMount() {
    this.mainContainer = d3.select(this.refs.svgContainer)
    let color = d3.scaleLinear()
      .domain([0, 6])
      .range(['#C8E500', '#2A782A'])
    let arc =d3.arc().outerRadius(150).innerRadius(100)
    let  pie = d3.pie().value(d => d.total)(this.state.forests)
    let infoDiv = d3.select('.infoDiv')
    let infoDiv2 = d3.select('.infoDiv2')
    let g = this.mainContainer.selectAll('.arc')
      .data(pie)
      .enter().append('g')
      .attr('class', 'arc')
      .attr('transform', 'translate(200, 200)')
    g.append('path')
      .attr('d', arc)
      .attr('transform', 'scale(0.1)')
      .style('fill', (d, i) => color(i))
      .style('stroke', 'white')
      .on('mouseover', (d, i) => {
        let target = d3.select(d3.event.target)
        let targetData = target.data()[0].data
        target.transition().attr('transform', 'scale(1.04)')
        infoDiv.transition()
          .ease(d3.easeExp)
          .duration(500)
          .style('opacity', 1)
          .style('left', d3.event.pageX + 30 + 'px')
          .style('top', d3.event.pageY - 471 + 'px')
          .text('Location: ' + targetData.place)
        infoDiv2.transition()
          .duration(500)
          .ease(d3.easeExp)
          .style('opacity', 1)
          .style('left', d3.event.pageX + 30 + 'px')
          .style('top', d3.event.pageY -440 + 'px')
          .text('Number of Old-growth forests: ' + targetData.total)
      })
      .on('mouseout', (d, i) => {
        let target = d3.select(d3.event.target)
        target.transition().attr('transform', 'scale(1)')
        infoDiv.transition().style('opacity', 0)
        infoDiv2.transition().style('opacity', 0)
      })


    let allPaths = d3.selectAll('path')
      .transition()
      .attr('transform', 'scale(1)')
      .ease(d3.easeExp)
      .duration(500)
  }

  componentDidUpdate() {
  }

  render() {
    return(
      <div className='pieChartContainer'>
        <svg height='400px' width='400px' ref='svgContainer' className='dataPieChart'></svg>
        <div className='pieTitle'>Number of old growth forests identified in each country</div>
        <div className='infoDiv'></div>
        <div className='infoDiv2'></div>
      </div>
    )
  }
}

export default DataPieChart
