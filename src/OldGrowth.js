import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './Components/App'
import { Provider } from 'react-redux'
import store, { history } from './store'
import './App.css';

class OldGrowth extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}

export default OldGrowth;
