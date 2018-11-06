import React from "react";
import {Container, Row, Col} from "../../components/Grid";
import Signup from "../../components/Signup";
import LoginForm from "../../components/LoginForm";
import Nav from "../../components/Nav";
import "./Login.css";


const style = {
  height: 500,
  justifyContent: 'center',
    alignItems: 'center',

}

const Login = (props) => (

  

    <Container fluid>
    <Nav updateUser={props.updateUser} loggedIn/>

      <Row>
        <Col size="md-6">
          <div className="imgDiv" >
            
             <img className="loginImage" src="./img/LoginImage.png" alt="login image"></img>
          </div>
        </Col>

        <Col size="md-6">
          <Signup/>
        </Col>
      </Row>
    </Container>
);

export default Login;