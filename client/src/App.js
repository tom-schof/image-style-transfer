import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Callback from './Callback';
import Auth from './auth';
import history from './history';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history} component={Login}>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/" render={(props) => <Login auth={auth} {...props} />} />
      <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route exact path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>

      
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/community" component={Community} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
