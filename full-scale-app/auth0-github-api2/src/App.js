import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import GIthub from './GIthub';
import Header from './Components/Header';
import Form from './Components/Form';
import Auth0Lock from 'auth0-lock';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       idToken: '',
       profile: {}
    };
  }
  

  static defaultProps ={
    clientID: 'kA7R2A9OVwoquRHhK4aRYB1k51b417Yl',
    domain: 'dev-ytzackd4.au.auth0.com'
  }
componentWillMount()
{
this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

this.lock.on('authenticated', (authResult)=>{
  console.log(authResult);
});
}
 showLock(){
   this.lock.show();
 }


  render() {
    return (
      <div>
        <Header
        onLogin={this.showLock.bind(this)}
        />
     <Form/>
     <GIthub/>
      </div>
    )
  }
}


