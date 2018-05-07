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
    e.preventDefault()
    const usersRef = database.ref('users')
    let userData = this.state.userData
    userData.contributionLevel = this.contributionLevel.value
    console.log(userData)
    usersRef.push(userData)
    this.setState({
      contributionAlert: false,
      signUpAlert: true
    })
  }


  render() {
    return (
      <div className='overlay'>
        <div className='signUpContainer'>
          {this.state.signUpAlert
            ? <div>
                <h1>Thank you {this.state.userData.firstName}, you can now sign in using your new login details</h1>
              </div>
            : this.state.contributionAlert
              ? <form className='contributionContainer' onSubmit={this.handleContribution.bind(this)}>
                  <h2>Tier 1</h2>
                  <input type='checkBox' value='1' ref={input => this.contributionLevel = input} />
                  <h2>Tier 2</h2>
                  <input type='checkBox' value='2' ref={input => this.contributionLevel = input} />
                  <h2>Tier 3</h2>
                  <input type='checkBox' value='3' ref={input => this.contributionLevel = input} />
                  <button type='submit' />
                </form>
              : <form onSubmit={this.handleSignUp.bind(this)}>
                  <h2>Please add you details to sign up for an old-growth account</h2>
                  <h2>First Name:</h2>
                  <input type='text' ref={input => this.firstName = input} className='inputField' />
                  <h2>Last Name:</h2>
                  <input type='text' ref={input => this.lastName = input} className='inputField' />
                  <h2>Email</h2>
                  <input type='email' ref={input => this.email = input} className='inputField' />
                  <h2>Password:</h2>
                  <input type='text' ref={input => this.password = input} className='inputField'/>
                  <button type='submit'>Sign up</button>
                </form>
          }

          <button onClick={this.props.closeSignUp}>x</button>
        </div>
      </div>
    )
  }
}

export default SignUp
