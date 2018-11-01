import React, { Component } from 'react';
import Canvas from './components/Canvas';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Jumbotron />
      <Canvas />
      </div>
    );
  }
}

export default App;
