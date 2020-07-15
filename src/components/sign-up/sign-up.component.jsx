import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '@redux/user/user.actions';
import { connect } from 'react-redux';

function Signup({ signUpStart }) {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');

      return;
    }

    signUpStart({
      email,
      password,
      displayName,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapDispatchToProps)(Signup);
