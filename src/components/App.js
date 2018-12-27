import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import Navbar from'./Navbar';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes/>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App
