import React from "react";
import "./NavLogout.css";
import Logout from "../../components/Logout";
import {Container, Row, Col} from "../../components/Grid";
import { Link } from "react-router-dom";

const NavLogout = (props) => (
  <nav className="navbar navbar-default shadow-nav">
  <div className="container-fluid">
    <p className="navbar-brand">
      <Link to={"/home"}>neurostyle</Link>
    </p>
  <ul className="nav navbar-nav">
    <li><Link to={"/home"}>Create</Link></li>
    <li><Link to={"/saved"}>Your Images</Link></li>
    <li><Link to={"/community"}>Community</Link></li>
  </ul>
  <Logout updateUser={props.updateUser} />
  </div>
  </nav >
);

export default NavLogout;