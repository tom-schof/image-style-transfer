import React from "react";
import "./NavCustom.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";


const NavCustom = (props) => (
  <nav className="navbar navbar-default navbar-collapse shadow-nav">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <p className="navbar-brand">
          <Link to={"/home"}>freaky-styley</Link>
        </p>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to={"/home"}>Create</Link></li>
          <li><Link to={"/saved"}>Your Images</Link></li>
          <li><Link to={"/community"}>Community</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><LoginForm updateUser={props.updateUser} loggedIn /></li>
        </ul>
      </div>
    </div>
  </nav >
);

export default NavCustom;