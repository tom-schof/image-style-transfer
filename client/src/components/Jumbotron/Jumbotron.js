import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron shadow">
    <div className="container text-center">
      {/* <h1 className="display-4">Image Creator</h1>
      <p className="lead">Apply one of our style models to an image of your choice and produce art using machine learning!</p> */}
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.body}</p>
    </div>
  </div>
);

export default Jumbotron;