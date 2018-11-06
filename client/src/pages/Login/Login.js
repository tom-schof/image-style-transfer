import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import Signup from "../../components/Signup";
import LoginForm from "../../components/LoginForm";
import NavCustom from "../../components/NavCustom";
import "./Login.css";
import Jumbotron from "../../components/Jumbotron";

const Login = (props) => (
  <div>
    <NavCustom updateUser={props.updateUser} loggedIn />
    <div className="container">
    <div className="header-message text-center shadow">Style Your Life</div>
    </div>
    <div className="container login-container">
    <Row>
      <div className="col-md-6 login-col">
        <div className="imgDiv" >
          <img className="loginImage" src="./img/LoginImage.png" alt="login image"></img>
        </div>
      </div>
      <div className="col-md-6 login-col">
        <Signup updateUser={props.updateUser} loggedIn />
      </div>
    </Row>
    </div>
  </div>
);

export default Login;