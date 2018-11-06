import React from "react";
import "./NavCustom.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

const NavCustom = (props) => (
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
  <LoginForm updateUser={props.updateUser} loggedIn /> 
  </div>
  </nav >
);

export default NavCustom;