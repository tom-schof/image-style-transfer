import React from "react";
import Jumbotron from '../../components/Jumbotron';
import Canvas from '../../components/Canvas';
import Logout from '../../components/Logout';

const Home = (props) => (
  <div>
    <Logout updateUser={props.updateUser} />
    
      <Jumbotron />
      <Canvas />

  </div>
);

export default Home;