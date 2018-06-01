import React, {Component} from 'react'
import '../CSS/Banner.css'
import '../App.css';
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import firebase from 'firebase'
import fire from '../firebase'

const database = fire.database()
const tree = require('../Images/tree.ico')

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      signIn: false,
      signInNotification: false,
      signUp: false,
      signOutAlert: false,
      authenticated: false,
      checkAuth: true,
      loading: true
    }
  }
  componentDidMount() {
    let listener = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authenticate(user.email)
      } else {
        this.setState({loading: false})
      }
      listener()
    })
  }

  authenticate(email) {
    let usersRef = database.ref('users')
    usersRef.orderByChild('email').equalTo(email).on('value', e =>  {
      let key = Object.keys(e.val())
      let currentUserData = e.val()[key[0]]
      this.props.updateUserData(0, currentUserData)
      this.setState({
        signInNotification: true,
        authenticated: true,
        loading: false
      })
      this.closeModal()
      window.setTimeout(() => this.setState({signInNotification: false}), 2000)
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
        })
        this.props.updateUserData(0, {})
      })
      .catch(error => console.log(error))
  }

  menuHover() {
    const dropDown = document.getElementsByClassName('dropDownMenu')[0]
    dropDown.childNodes.forEach( (child, i) => {
      dropDown.style.display = 'grid'
      child.style.animation = `dropDown ${(i + 1) * 0.2}s linear forwards`
    })
  }

  menuMouseOut() {
    const dropDown = document.getElementsByClassName('dropDownMenu')[0]
    dropDown.style.display = 'none'
  }

  render() {
    return (
      <div className='navBarContainer'>
        {this.props.location.pathname === '/donate'
          ? []
          : <div>
              <img src={tree} className='donationButton donateImage' alt='not available'></img>
              <Link to='/donate' className='donationButton'><h1>DONATE</h1></Link>
            </div>
        }
        {this.props.location.pathname !== '/'
         ? <Link to='/' className='title'>old growTh</Link>
         : []

        }
        {this.state.loading
        ? <div className='spinner'>
          </div>
        : this.state.authenticated
          ? this.props.user.contributionLevel === '1'
            ? <div className='contributionLevelNav'>
                <div className='buttonBar'>
                  <div className='contentButton menu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                    <h1>MENU</h1>
                  </div>
                </div>
                <div className='dropDownMenu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                  <Link to='/' className='menuButton'>HOME</Link>
                  <Link to='/news' className='menuButton'>NEWS</Link>
                  <Link to='/community' className='menuButton'>COMMUNITY</Link>
                </div>
                <button className='signInButton' onClick={this.signOut.bind(this)}>Sign Out</button>
              </div>
            : this.props.user.contributionLevel === '2'
              ? <div className='contributionLevelNav'>
                  <div className='buttonBar'>
                    <div className='contentButton menu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                      <h1>MENU</h1>
                    </div>
                  </div>
                  <div className='dropDownMenu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                    <Link to='/' className='menuButton'>HOME</Link>
                    <Link to='/news' className='menuButton menuButton1'>NEWS</Link>
                    <Link to='/community' className='menuButton'>COMMUNITY</Link>
                    <Link to='/build' className='menuButton menuButton2'>BUILD</Link>

                  </div>
                  <button className='signInButton' onClick={this.signOut.bind(this)}>Sign Out</button>
                </div>
              : <div className='contributionLevelNav'>
                  <div className='buttonBar'>
                    <div className='contentButton menu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                      <h1>MENU</h1>
                    </div>
                  </div>
                  <div className='dropDownMenu' onMouseOver={() => this.menuHover()} onMouseOut={() => this.menuMouseOut()}>
                    <Link to='/' className='menuButton'>HOME</Link>
                    <Link to='/news' className='menuButton menuButton1'>NEWS</Link>
                    <Link to='/community' className='menuButton'>COMMUNITY</Link>
                    <Link to='/build' className='menuButton menuButton2'>BUILD</Link>
                    <Link to='/diy' className='menuButton menuButton3'>DIY</Link>
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
              <div className='changeAlert' onClick={e => {
                this.closeModal.bind(this)
                window.location = window.location.origin
              }}>
                You have succesfully signed out, please come again!
              </div>
            </div>
          : []
        }
        {this.state.signInNotification
          ? <div className='signInNotification'>Signed in as {this.props.user.firstName + ' ' + this.props.user.lastName}</div>
          : []
        }
    </div>
    )
  }
}

export default Banner
