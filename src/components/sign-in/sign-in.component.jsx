import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name] : value})
  }

  render() {
    return(
    <div className='sign-in'>
      <h2>I already have an account peepoHappy</h2>
      <div className='form-sign-in'>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            label='Email' 
            required 
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput 
            type='password' 
            name='password' 
            label='Password' 
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton name='submit' type='submit'> SIGN IN </CustomButton>
            <CustomButton name='signinwithgoogle' isGoogleSignIn onClick={signInWithGoogle}> Sign in with google </CustomButton>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default SignIn;