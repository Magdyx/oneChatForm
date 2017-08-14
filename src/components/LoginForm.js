
import React, { Component } from 'react';
import './LoginForm.css';
import InfoForm2 from '../InfoForm2';

var Parent  = React.createClass({
  getInitialState:function(){
    return {signup:false,login:true}
  },
  switch:function(word){
    var signup,login;
    if(word == "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login,signup:signup})

  },
  render:function(){

    var self = this;
    return (
      <div className="form-holder">
        <div id="buttons">
          <p id="signupButton" onClick={self.switch.bind(null,"signup")}
            className={self.state.signup ? "yellow":"blue"}>
            Sign Up
          </p>
          <p id="loginButton" onClick={self.switch.bind(null,"login")}
            className={self.state.login ? "yellow":"blue"}>
            Login
          </p>
      </div>

      { self.state.signup?<Signup/> : null}
      {self.state.login? <Login /> : null}

      </div>

    )


  }
})


var Signup = React.createClass({


  render:function(){


    return (
      <div>

        <div id="signup">
          <input type="text" id="first" placeholder="First Name"/>
          <input type="text" id="last" placeholder="Last Name"/>
          <input type="email" id="email" placeholder="Email"/>
          <input type="password" id="password" placeholder="Password"/>
          <input type="password" id="confirm" placeholder="Confirm Password"/>
          <button id="send" onClick={signUpAction()} >Register</button>
        </div>
      </div>

    )
  }
})

var Login = React.createClass({
  render:function(){



    return (

      <div>

      <div id="login">
      <input type="email" id="email" placeholder="Email"/>
      <input type="password" id="password" placeholder="Password"/>
        <button id="send" onClick={loginAction()} >Login</button>
      </div>

      </div>

    )
  }
})


function loginAction() {
console.log('loginAction');

  }

  function signUpAction() {
  console.log('signUpAction');

    }
export default Parent;
