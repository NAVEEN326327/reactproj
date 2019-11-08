import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
        <Numbers name1={this.props.name}/>
      </div>
    )
  }
}

App.defaultProps={
  name :"Naveen"
}


class Body extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);

    {this.props.name1}
  }
  
  getRandomNumber(){
   // console.log("random number called");
   this.setState({r:Math.floor(Math.random()*10)})
  }
  
  render() {
    return (
      <div>
        <p>Hello jdljakjdflkajdfkjasddfaklsdfjalksdflkaskjaldjl</p>
  
  
        <button onClick={this.getRandomNumber}>Random Number</button>
     <Numbers myNumber={this.state.r}/>
     
      </div>
    );
  }
  }
  
  class Numbers extends Component {
    render(){
      return (
        <div>
          <br/>
  {this.props.myNumber}
  {this.props.name1}
       <Child/>
  
        </div>
      )
    }
  }
  
  
  class Child extends Component {
    render() {
      return (
        <div>
           <p>Hello Here I'm from child class</p>
           <GrandChild msg="Cars are cool " msg1="First msg " msg2={this.props.cars}/>
        </div>
      )
    }
  }

  Child.defaultProps ={
    cars : [" BMW"," METC", " HONDA"]
  
  }
  
  
  
  class GrandChild extends Component {
    render() {
      return (
        <div>
           <p>Hello Here I'm from Grand child class</p>
           {this.props.msg}
           {this.props.msg1}
           {this.props.msg2}
        </div>
      )
    }
  }

export default App;