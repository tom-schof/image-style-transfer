import React from "react";
import "./Nav.css";
import LoginForm from "../../components/LoginForm";
import {Container, Row, Col} from "../../components/Grid";
import { Link } from "react-router-dom";



const Nav = (props) => (
  <Container fluid>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-nav">
      <Row>
        <Col size="md-2">
          <div className="links"> 
            <a className="navbar-brand" href="/">neurostyle</a>
            <Link to={"/home"}>Home</Link>
            <br></br>
            <Link to={"/Community"}>Community</Link>
          </div>
         
        </Col>
        <Col size="md-8">
          <h2 className="title">Style your life</h2>
        </Col>
        <Col size="md-2">
         <LoginForm updateUser={props.updateUser} loggedIn /> 
        </Col>
      </Row>
    </nav>
  </Container>
);

export default Nav;