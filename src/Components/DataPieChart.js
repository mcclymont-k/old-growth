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
          place: 'United Kingdom',
          total: 12
        },
        {
          place: 'France',
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
          place: 'U.S.A',
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
    let arc =d3.arc().outerRadius(175).innerRadius(125)
    let  pie = d3.pie().value(d => d.total)(this.state.forests)
    let infoDiv = d3.select('.infoDiv')
    let infoDiv2 = d3.select('.infoDiv2')
    let g = this.mainContainer.selectAll('.arc')
      .data(pie)
      .enter().append('g')
      .attr('class', 'arc')
      .attr('transform', 'translate(250, 250)')
    g.append('path')
      .attr('d', arc)
      .attr('transform', 'scale(0.1)')
      .style('fill', (d, i) => color(i))
      .on('mouseover', (d, i) => {
        let target = d3.select(d3.event.target)
        let targetData = target.data()[0].data
        target.transition()
          .attr('transform', 'scale(1.04)')
          .style('stroke', 'black')
        infoDiv.transition()
          .ease(d3.easeExp)
          .duration(500)
          .style('opacity', 1)
          .text(targetData.place)
        infoDiv2.transition()
          .duration(500)
          .ease(d3.easeExp)
          .style('opacity', 1)
          .text('Number of remaining Old-growth forests: ' + targetData.total)
      })
      .on('mouseout', (d, i) => {
        let target = d3.select(d3.event.target)
        target.transition()
          .attr('transform', 'scale(1)')
          .style('stroke', '')
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
        <svg height='500px' width='500px' ref='svgContainer' className='dataPieChart'></svg>
        <div className='pieChartInformationBox'>
          <h1>Old growth forests</h1>
          <h2>
            An old growth or late seral forest is a forest that has been untouched
            for an extended period of time, giving it unique features. These features include biodiversity,
            a stable enviornmental structure and a thick decaying ground layer.<br/><br/>
            These features have broad reaching effects that can be stabalising to a local environment.
            It is estimated that only 21% of olld growth forests are left on the earth, with less
            than 3% remaining in Europe and 7% in South East Asia.
          </h2>
        </div>
        <div className='pieTitle'>Number of old growth forests identified in each country</div>
        <div className='infoDiv'></div>
        <div className='infoDiv2'></div>
      </div>
    )
  }
}

export default DataPieChart
