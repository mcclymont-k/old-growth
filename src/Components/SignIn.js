import React, {Component} from 'react'
import * as firebase from 'firebase'
import fire from '../firebase'
import '../CSS/SignIn.css'
import '../App.css';
const database = fire.database()


class SignIn extends Component {

  constructor() {
    super()
    this.state = {
      singInNotification: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
          this.props.authenticate(this.email.value)
        })
      .catch((error) => console.log(error))
  }

  render() {
    return(
      <div className='overlay'>
        <div className='signInBox'>
          <form onSubmit={this.handleSubmit.bind(this)} className='signInForm'>
            <input type='email' ref={input => this.email = input} className='inputField' placeholder='email' />
            <input type='password' ref={input => this.password = input} className='inputField' placeholder='password'/>
            <button type='submit' className='logIn'>Log in</button>
          </form>
          <h3>Click<span onClick={this.props.openSignUp} className='clickLink'>here</span>to sign up for a new account</h3>
          <button className='closeButton' onClick={this.props.closeSignIn}>x</button>
        </div>
      </div>
    )
  }
}

export default SignIn
