import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.styl';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">
            MQ<span> yun</span>
          </h1>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
