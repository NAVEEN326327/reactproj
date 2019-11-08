import React, { Component } from 'react'
import './AllCss.css';




export default class Header extends Component {
    onLogin(){
        this.props.onLogin();
    }
    render() {
        return (
         <div className="div1">
            <ul>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Home</li></a>
               
<a onClick={this.onLogin.bind(this)} href="#">    <li>Login</li>  </a>

<a href="#">  <li>SignUp</li>  </a>
            </ul>

         </div>
        )
    }
}
