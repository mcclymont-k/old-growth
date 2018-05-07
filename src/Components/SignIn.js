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
        // Retrieving the user data from the database and setting it to state.
        let usersRef = database.ref('users')
        usersRef.orderByChild('email').equalTo(this.email.value).on('value', e =>  {
          let key = Object.keys(e.val())
          let currentUserData = e.val()[key[0]]
          this.props.authenticate(currentUserData)
          this.props.closeSignIn()
        })
      })
      .catch((error) => console.log(error))
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
              <input type='password' ref={input => this.password = input} className='inputField'/>
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
