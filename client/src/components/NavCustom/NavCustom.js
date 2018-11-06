import React from "react";
import "./NavCustom.css";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-default shadow-nav">
    <p className="navbar-brand">
      <Link to={"/home"}>neurostyle</Link>
    </p>
  <ul className="nav navbar-nav">
    <li><Link to={"/home"}>Home</Link></li>
    <li><Link to={"/about"}>About</Link></li>
    <li><Link to={"/community"}>Community</Link></li>
    <li><Link to={"/"}>Login</Link></li>

  </ul>
  </nav >
);

export default Nav;