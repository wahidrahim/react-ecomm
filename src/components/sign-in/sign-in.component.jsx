import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

const defaultState = {
  email: '',
  password: '',
}

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState(defaultState)
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
