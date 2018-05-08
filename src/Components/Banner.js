import React, {Component} from 'react'
import '../CSS/Banner.css'
import '../App.css';
import {Link, Route, HashRouter as Router} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import firebase from 'firebase'
import fire from '../firebase'

const database = fire.database()
const forest = require('../Images/forest.jpg')

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      signIn: false,
      signUp: false,
      signOutAlert: false,
      authenticated: false,
      userData: {},
      checkAuth: true
    }
  }
// not working beacuse database updates after
  componentDidMount() {
    let listener = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authenticate(user.email)
      } else {
        console.log('no user')
      }
      listener()
    })
  }

  authenticate(email) {
    let usersRef = database.ref('users')
    usersRef.orderByChild('email').equalTo(email).on('value', e =>  {
      let key = Object.keys(e.val())
      let currentUserData = e.val()[key[0]]
      this.setState({
        authenticated: true,
        userData: currentUserData
      })
      this.closeModal()
    })
  }

  openSignIn() {
    this.setState({signIn: true})
  }

  openSignUp() {
    this.closeModal()
    this.setState({signUp: true})
  }

  closeModal() {
    this.setState({
      signIn: false,
      signUp: false,
      signOutAlert: false
    })
  }

  signOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          authenticated: false,
          signOutAlert: true,
          userData: {}
        })
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
            ? this.state.userData.contributionLevel === '1'
              ? <div>
                  <button>1</button>
                  <button className='signOut' onClick={this.signOut.bind(this)}>Sign Out</button>
                </div>
              : this.state.userData.contributionLevel === '2'
                ? <div>
                    <button>1</button>
                    <button>2</button>
                    <button className='signOut' onClick={this.signOut.bind(this)}>Sign Out</button>
                  </div>
                : <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='signOut' onClick={this.signOut.bind(this)}>Sign Out</button>
                  </div>
            : <button className='logInButton' onClick={this.openSignIn.bind(this)}>Log in/Sign up</button>
          }
        </div>
        {this.state.signIn
          ? <SignIn authenticate={this.authenticate.bind(this)} openSignUp={this.openSignUp.bind(this)} closeSignIn={this.closeModal.bind(this)}/>
          : []
        }
        {this.state.signUp
          ? <SignUp closeSignUp={this.closeModal.bind(this)} authenticate={this.authenticate.bind(this)}/>
          : []
        }
        {this.state.signOutAlert
          ? <div className='overlay'>
              <div className='changeAlert' onClick={this.closeModal.bind(this)}>
                You have succesfully signed out, please come again!
              </div>
            </div>
          : []
        }
      </div>
    )
  }
}

export default Banner
