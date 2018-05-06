import React, {Component} from 'react'
import fire from '../firebase'
import firebase from 'firebase'
import '../CSS/SignIn.css'
import '../App.css';
const database = fire.database()


class SignIn extends Component {

  constructor() {
    super()
    this.state = {}
  }

  handleSubmit(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        console.log(data)
        this.props.authenticate()
        this.props.closeSignIn()
      })
      .catch((error) => console.log('Sorry Incorrect details!. try again'))
  }

  render() {
    return(
      <div>
        <div className='overlay'>
          <div className='signInBox'>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h2>Email:</h2>
              <input type='email' ref={input => this.email = input} className='inputField' />
              <h2>Password:</h2>
              <input type='text' ref={input => this.password = input} className='inputField'/>
              <button type='submit'>Log in</button>
            </form>
            <button onClick={this.props.openSignUp}>Sign up</button>
            <button className='closeButton' onClick={this.props.closeSignIn}>x</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
