import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    uploadedImage: null
  }

  handleOnChange = (event) =>{
    console.log(event.target.files[0]);
    this.setState({
      uploadedImage: event.target.files[0]
    })
  }

  handleOnClick =() => {
    Axios.post("")
  }

  render() {
    return (
      <div className="App">
      <input type ="file" onChange={this.handleOnChange}/>
      <button onClick={this.handleOnClick}> Post Image</button>
      </div>
    );
  }
}

export default App;
