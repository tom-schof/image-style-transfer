import React from "react";
import { Container } from "../../components/Grid";
import Signup from "../../components/Signup";
import LoginForm from "../../components/LoginForm"

const Login = () => (
  <Container fluid>
    <Signup />
    <LoginForm />
  </Container>
);

export default Login;