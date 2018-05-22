import React, { Component } from 'react'

const MyContext = React.createContext()

class MyProvider extends Component {

  state = {
    name: 'Kieran',
    age: 30,
    cool: true,
  }


  render() {
    return(
      <MyContext.Provider value={{state: this.state}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


export default MyProvider
export { MyContext }
