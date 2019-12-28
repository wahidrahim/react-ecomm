import React from 'react'

import './sign-in.styles.scss'

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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default SignIn
