import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./Calculator";

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
