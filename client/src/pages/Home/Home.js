import React from "react";
import Jumbotron from '../../components/Jumbotron';
import Canvas from '../../components/Canvas';
import NavLogout from "../../components/NavLogout";

const Home = (props) => (
  <div>
    {/* <Logout updateUser={props.updateUser} /> */}
    <NavLogout updateUser={props.updateUser} />
      <Jumbotron />
      <Canvas />

  </div>
);

export default Home;