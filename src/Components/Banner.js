import React, {Component} from 'react'
import '../CSS/Banner.css'
import '../App.css';
import {Link, Route, HashRouter as Router} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import firebase from 'firebase'
import fire from '../firebase'

const database = fire.database()


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
          <div className='navBarContainer'>
            {this.state.authenticated
              ? this.state.userData.contributionLevel === '1'
                ? <div className='contributionLevelNav'>
                    <div className='buttonBar'>
                      <button className='contentButton'>News</button>
                    </div>
                    <button className='signInButton' onClick={this.signOut.bind(this)}>Sign Out</button>
                  </div>
                : this.state.userData.contributionLevel === '2'
                  ? <div className='contributionLevelNav'>
                      <div className='buttonBar'>
                        <button className='contentButton'>News</button>
                        <button className='contentButton'>Build</button>
                      </div>
                      <button className='signInButton' onClick={this.signOut.bind(this)}>Sign Out</button>
                    </div>
                  : <div className='contributionLevelNav'>
                      <div className='buttonBar'>
                        <button className='contentButton'>News</button>
                        <button className='contentButton'>Build</button>
                        <button className='contentButton'>Community</button>
                      </div>
                      <button className='signInButton' onClick={this.signOut.bind(this)}>Sign Out</button>
                    </div>
              : <button className='signInButton' onClick={this.openSignIn.bind(this)}>Log in/Sign up</button>
            }
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
