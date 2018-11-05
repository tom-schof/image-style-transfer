import React from "react";
import {Container} from "../../components/Grid";
import Signup from "../../components/Signup";
import LoginForm from "../../components/LoginForm"

const Login = (props) => (

    <Container fluid>
        <Signup/>
        <LoginForm updateUser={props.updateUser} loggedIn/>
    </Container>
);

export default Login;