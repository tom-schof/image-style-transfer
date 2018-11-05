import React from "react";
import Jumbotron from '../../components/Jumbotron';
import Canvas from '../../components/Canvas';
import Logout from '../../components/Logout';

const Home = (props) => (
  <div>
      <Jumbotron title={"Image Creator"} body={"Apply one of our style models to an image of your choice and produce art using machine learning!"} />
      <Canvas />
  </div>
);

export default Home;