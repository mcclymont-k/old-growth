import React, {Component} from 'react'
import Banner from './Banner'
import firebase from 'firebase'


class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Banner />
      </div>
    )
  }
}

export default Home
