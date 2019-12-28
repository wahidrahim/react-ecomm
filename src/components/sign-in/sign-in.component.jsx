import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'

const defaultState = {
  email: '',
  password: ''
}

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState(defaultState)
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
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
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default SignIn
