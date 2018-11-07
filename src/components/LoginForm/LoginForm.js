import React, { Component } from 'react';
import './LoginForm.styl'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    }
  }

  render() {
    return (
      <form className="login-form" autoComplete="off">
        <input className="login-item" type="text" name="account" placeholder="account" onChange={this.getAccount} />
        <input className="login-item" type="password" name="password" placeholder="password" onChange={this.getPassword} />
        <button className="btn-login" type="button" onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</button>
      </form>
    );
  }

  login = () => {
    console.log(this.state)
  }

  getAccount = (e) => {
    this.setState({
      account: e.target.value
    })
  }

  getPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
}

export default LoginForm;
