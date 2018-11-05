import React from "react";
import "./NavLogout.css";
import Logout from "../../components/Logout";
import {Container, Row, Col} from "../../components/Grid";
import { Link } from "react-router-dom";



const NavLogout = (props) => (
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
          (<Logout updateUser={props.updateUser} /> 
        </Col>
      </Row>
    </nav>
  </Container>
);

export default NavLogout;