import React, {Component} from 'react'
import '../CSS/SignUp.css'
import '../App.css'
import firebase from 'firebase'


class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      signUpAlert: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.setState({signUpAlert: true})
        this.props.authenticate
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='overlay'>
        <div className='signUpContainer'>
          {this.state.signUpAlert
            ? <div>
                <h1>Thank for signing up.</h1>
                <button onClick={this.props.closeSignUp}>Close</button>
              </div>
            : <form onSubmit={this.handleSubmit.bind(this)}>
                <h2>Please add you details to sign up for an old-growth account</h2>
                <h2>First Name:</h2>
                <input type='text' ref={input => this.firstName = input} className='inputField' />
                <h2>Last Name:</h2>
                <input type='text' ref={input => this.lastName = input} className='inputField' />
                <h2>Email</h2>
                <input type='email' ref={input => this.email = input} className='inputField' />
                <h2>Password:</h2>
                <input type='text' ref={input => this.password = input} className='inputField'/>
                <button type='submit'>Log in</button>
              </form>
          }
          <button onClick={this.props.closeSignUp}>x</button>
        </div>
      </div>
    )
  }
}

export default SignUp
