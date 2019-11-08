import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

function App() {
  var courses = [
   { prod1 : 'Complete ios course with',price: 199},
   { prod2 : 'Complete ios course with',price: 194},
   { prod3 : 'Complete ios course with',price: 156}
  ];
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


       <Coursesales items={courses} />
       

      </header>

      <form id="form1">
      <h2>Sign Up form</h2>
           <label>User name: </label><br/>
           <input type="text" placeholder="name"/><br/>
           <label>Email:</label><br/><input type="email" placeholder="email"/><br/>
           <label>Password:</label><br/><input type="password" placeholder="email"/><br/>
           <label>Password confirm:</label><br/><input type="password" placeholder="confirm password"/>
           <br/>
           <br/>
           <button type="submit">Sign Up</button>


      </form>
      <br/>


    </div>
  );
}

export default App;
