import React from "react";
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl, } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        show: false,
        username: "",
        password: "",
        redirectTo: null
      };
    }
    
  

    handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  handleSubmit(event) {
    // alert(`username: ${this.state.username} \n password: ${this.state.password}`);
    event.preventDefault();
    console.log(event.target);
    axios.post('/api/user/login', {
      username: this.state.username,
      password: this.state.password,

    })
    .then(response => {
      console.log("Response: " + response);
      if (response.status ===200){
        console.log("successful login");
        this.props.updateUser({
            loggedIn: true,
            username: response.data.username
        });

        console.log(this.props);
        this.setState({
          redirectTo: '/home'
        });
      }else{
        console.log("Login error")
      }
    })
    .catch(error =>{
      console.log("Login server error: " + error);
      
    })
  }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      if (this.state.redirectTo) {
        return (<Redirect to={{ pathname: this.state.redirectTo }} />)
    } else {
  
      return (

        <div>
          
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Login
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmit} horizontal>
              <FormGroup controlId="formHorizontaUsername">
                    <Col componentClass={ControlLabel} sm={2}>
                    Username
                    </Col>
                    <Col sm={10}>
                    <FormControl name="username" value={this.state.value} onChange={this.handleChange} type="username" placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={10}>
                    <FormControl name="password" value={this.state.value} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Log in</Button>
                    </Col>
                </FormGroup>
              </Form>;

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}



  export default LoginForm;