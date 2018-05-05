import React, {Component} from 'react'
import '../CSS/Banner.css'
import '../App.css';
import fire from '../firebase'
import {Link, Route, HashRouter as Router} from 'react-router-dom'
import SignIn from './SignIn'
import firebase from 'firebase'

const database = fire.database()
const forest = require('../Images/forest.jpg')

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      signIn: false,
      signOutAlert: false,
      authenticated: false,
    }
  }

  authenticate() {
    this.setState({authenticated: true})
  }

  openSignIn() {
    this.setState({signIn: true})
  }

  closeModal() {
    this.setState({
      signIn: false,
      signOutAlert: false
    })
  }

  signOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({authenticated: false, signOutAlert: true})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='bannerContainer'>
        <img className='bannerImage' src={forest} />
        <div className='overlayContainer'>
          <h1>Old Growth</h1>
          {this.state.authenticated
            ? <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='signOut' onClick={this.signOut.bind(this)}>Sign Out</button>
              </div>
            : <button className='logInButton' onClick={this.openSignIn.bind(this)}>Log in...</button>
          }
        </div>
        {this.state.signIn
          ? <SignIn closeSignIn={this.closeModal.bind(this)} authenticate={this.authenticate.bind(this)}/>
          : []
        }
        {this.state.signOutAlert
          ? <div className='overlay'>
              <div className='signOutAlert' onClick={this.closeModal.bind(this)}>
                <h2>You have succesfully signed out, please come again!</h2>
              </div>
            </div>
          : []
        }
      </div>
    )
  }
}

export default Banner
