import React from "react";
import Jumbotron from '../../components/Jumbotron';
import Canvas from '../../components/Canvas';
import NavLogout from "../../components/NavLogout";

const Home = (props) => (
  <div>
    {/* <Logout updateUser={props.updateUser} /> */}
    <NavLogout updateUser={props.updateUser} />
     

      <Jumbotron title={"Image Creator"} body={"Apply one of our style models to an image of your choice and produce art using machine learning!"} />
      <Canvas username={props.username}/>
  </div>
);

export default Home;