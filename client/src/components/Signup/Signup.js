import React from "react";
import Jumbotron from "../Jumbotron";
import Style from "./Signup.css";
import { Button } from 'react-bootstrap';



const Signup = () => (

<form id="signup">
  <Jumbotron>
    <h3>Sign up</h3>
    <h4>
      <input type="text" id="name" placeholder="Username" required/>
    </h4>
    <h4>
      <input type="email" id="signup-email" placeholder="Email" required/>
    </h4>
    <h4>
      <input type="password" id="signup-password" placeholder="Password"
             required/>
    </h4>
    <Button id="submit" type="submit" value="Sign up" bsStyle="primary">Submit</Button>
  </Jumbotron>
</form>
);



export default Signup;