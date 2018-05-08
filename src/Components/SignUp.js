import React, {Component} from 'react'
import '../CSS/SignUp.css'
import '../App.css'
import firebase from 'firebase'
import fire from '../firebase'

const database = fire.database()

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      signUpAlert: false,
      contributionAlert: false,
      radio1: false,
      radio2: false,
      radio3: false
    }
  }

  handleSignUp(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(user => {
        // Update user profile data
        user.updateProfile({
          displayName: this.firstName.value + ' ' + this.lastName.value,
        })
        let userData = {
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value
        }
        this.setState({
          contributionAlert: true,
          userData: userData
        })
      })
      .catch(error => console.log("That didn't work, please try again."))
  }

  handleContribution(e) {
    console.log(this.state.contributionLevel)
    e.preventDefault()
    const usersRef = database.ref('users')
    let userData = this.state.userData
    userData.contributionLevel = this.state.contributionLevel
    console.log(userData)
    usersRef.push(userData)
    this.props.authenticate(this.state.userData.email)
    this.setState({
      contributionAlert: false,
      signUpAlert: true
    })
  }

  radioButtonHandler(e) {
    let currentRadio = 'radio' + e.target.value
    let object = {}
    object[currentRadio] = !this.state[currentRadio]
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      contributionLevel: e.target.value
    })
    this.setState(object)
    console.log(object)
  }


  render() {
    return (
      <div className='overlay'>
        <div className='signUpContainer'>
          {this.state.signUpAlert
            ? <div className='changeAlert'>
                Thank you {this.state.userData.firstName}, you can now sign in using your new login details
              </div>
            // Check for contribution level
            : this.state.contributionAlert
              ? <form className='contributionContainer' onSubmit={this.handleContribution.bind(this)}>
                  <div>
                    <h3>Level 1: <input type='radio' value='1' onClick={e => this.radioButtonHandler(e)} checked={this.state.radio1}/></h3>
                    <h2>FREE</h2>
                    <p>
                      Please enjoy a free selection of articles and information on the old-growth project.
                      There is oodles of content and ideas to get you started on forest building journey.
                      Upgrade at any time to acces more services and content.
                    </p>
                  </div>
                  <div>
                    <h3>Level 2: <input type='radio' value='2' onClick={e => this.radioButtonHandler(e)} checked={this.state.radio2}/></h3>
                    <h2>$20 donation</h2>
                    <p>
                      For a small donation you can access a plethora of information
                      on DIY forest building and community forest builds. The information
                      is sufficient to get you started on planning a forest, obtaining the
                       necesssary information and beginning the process of building your
                      unique forest. You will also have acccess to the full range of articles
                      and news supplied by the website. Your donation goes a long way to
                      helping support the dream of reforesting the world.
                    </p>
                  </div>
                  <div>
                    <h3>Level 3: <input type='radio' value='3' onClick={e => this.radioButtonHandler(e)} checked={this.state.radio3}/></h3>
                    <h2>Monthly subscription</h2>
                    <p>
                      A small monthly subscription will grant you access to the plethora of articles
                      an regularly updated news feed. You will receive access to the educational materials
                      on designing and building your very own forest. You will receive access to online
                      assisstance for feedback , questions and advice. You will become an exclusive member
                      of a growing charity and be the first to hear about special events and breaking news.
                      You can be proud to be a contributing memeber of a project aimed at reforesting the
                      world and returning natural habitats for your local wildlife.
                    </p>
                  </div>
                  <button type='submit' className='contributionSubmitButton'>Continue</button>
                </form>
              : <form onSubmit={this.handleSignUp.bind(this)} className='signUpForm'>
                  <h2>1. Add your details</h2>
                  <input type='text' ref={input => this.firstName = input} className='inputField' placeholder='First name' />
                  <input type='text' ref={input => this.lastName = input} className='inputField' placeholder='Last name'/>
                  <input type='email' ref={input => this.email = input} className='inputField' placeholder='email'/>
                  <input type='password' ref={input => this.password = input} className='inputField'placeholder='password'/>
                  <button type='submit' className='signUpButton'>> Continue</button>
                </form>
          }

          <button className='closeButton' onClick={this.props.closeSignUp}>x</button>
        </div>
      </div>
    )
  }
}

export default SignUp
