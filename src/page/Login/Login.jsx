import React, { Component } from 'react';
import './Login.styl';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">
            MQ<span> yun</span>
          </h1>
          <form className="login-form" autoComplete="off">
            <input className="login-item" type="text" name="account" placeholder="account" />
            <input className="login-item" type="password" name="password" placeholder="password" />
            <button className="btn-login" type="button">登&nbsp;&nbsp;&nbsp;录</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
