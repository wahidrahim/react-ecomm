import React from 'react';

import SignIn from '@components/sign-in/sign-in.component';
import Signup from '@components/sign-up/sign-up.component';

import { SignInAndSignUp } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUp>
    <SignIn />
    <Signup />
  </SignInAndSignUp>
);

export default SignInAndSignUpPage;
