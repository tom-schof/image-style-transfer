import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavCustom from "./components/NavCustom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Footer from "./pages/Footer";
import Test from "./components/Test";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <div>
          <NavCustom />
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} updateUser={this.updateUser} />} />
            <Route exact path="/home" render={(props) => this.state.loggedIn ? (<Home {...props} updateUser={this.updateUser} username={this.state.username} />) : (<Login {...props} updateUser={this.updateUser} />)} />
            <Route exact path="/saved" render={(props) => this.state.loggedIn ? (<Saved {...props} updateUser={this.updateUser} />) : (<Login {...props} updateUser={this.updateUser} />)} /> />
              <Route exact path="/community" component={Community} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
