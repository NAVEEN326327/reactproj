import React, { Component } from 'react';
import './App.css';
var firebase = require('firebase');
var uuid = require('uuid');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdF9FkbmPgBr4Wxb9bZZSo6pP8vLk8Nks",
    authDomain: "usurvey-6f210.firebaseapp.com",
    databaseURL: "https://usurvey-6f210.firebaseio.com",
    projectId: "usurvey-6f210",
    storageBucket: "",
    messagingSenderId: "934017891028",
    appId: "1:934017891028:web:13fc802a3294ea20ad1941"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default class Usurvey extends Component {
    nameSubmit(){
        var studentName = this.refs.name.value;
        this.setState({studentName: studentName}, function(){
            console.log(this.state);
        });
    }
    
    answerSelected(event){

    }

    constructor(props) {
        super(props)
    
        this.state = {
             uid: uuid.v1(),
             studentName: '',
             answers: {
                 answer1: "",
                 answer2: '',
                 answer3: '',
             },
             isSubmitted: false
        };
    
    }
    
    render() {
        var studentName;
        var questions;

        if(this.state.studentName == '' && this.state.isSubmitted == false){
            studentName = <div className= "div1">
                <h3>Let us know your name</h3>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" id="first_name" type="text" placeholder="Enter your name" ref="name" />

                </form>
            </div>;
            questions =""
        }
        else if (this.state.studentName !== "" && this.state.isSubmitted == false)
        studentName = <h1>Welcome to Usurvey, {this.state.studentName}</h1>
        questions = <div className="card">
            <form onSubmit={this.questionSubmit}>

                <div className="card">
                    <label> What kind of course you like the most:</label><br/>
                    <input type='radio' name='answer1' value="Tech" onSubmit={this.answerSelected}/>Tech
                    <input type='radio' name='answer1' value="Design" onSubmit={this.answerSelected}/>Design
                    <input type='radio' name='answer1' value="Paint" onSubmit={this.answerSelected}/>Paint

                </div>
            </form>
        </div>
        return (
            <div>
                
            </div>
        )
    }
}
