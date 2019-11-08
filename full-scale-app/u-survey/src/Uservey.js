
import React, { Component } from 'react'

var firebase = require('firebase');
var uuid = require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyCFSBTSGn024PRcs1VLu8lGS4jYVjv8Gj8",
    authDomain: "uservey-e9932.firebaseapp.com",
    databaseURL: "https://uservey-e9932.firebaseio.com",
    projectId: "uservey-e9932",
    storageBucket: "uservey-e9932.appspot.com",
    messagingSenderId: "84854631701",
    appId: "1:84854631701:web:154bac224f9528110f0d1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default class Uservey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
                answers: {
                    answers1: "",
                    answers2: "",
                    answers3: ""
                },
                isSubmitted: false
            };
        }
    



    render() {
        var studentName;
        var questions;
        return (
            <div className="App">
                {studentName}

                -------------------

                {questions}
            </div>
        );
    
}
}

