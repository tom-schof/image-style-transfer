import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{  clear: "both", paddingTop: 30, textAlign: "center", width: '90%', margin: '0 auto' }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
