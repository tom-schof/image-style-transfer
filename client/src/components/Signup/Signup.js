import React from "react";
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import axios from 'axios';


class Signup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        show: false,
        username: "",
        email: "",
        password: ""
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
    console.log(`username: ${this.state.username} \n email: ${this.state.email} \n password: ${this.state.password}`);
    event.preventDefault();

    axios.post('/login', {
    username: this.state.username,
      email: this.state.email,
      password: this.state.password,

    })
    .then(response => {
      console.log(response);
      if (response.data){
        console.log("successful signup");
        this.setState({
          redirectTo: '/login'
        })
      }else{
        console.log("Sign up error")
      }
    })
    .catch(error =>{
      console.log("Sign up server error: " + error);
      
    })
  }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
    
  
      return (
        <div>
          
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Sign-up!
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
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
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={10}>
                    <FormControl name="email" value={this.state.value} onChange={this.handleChange} type="email" placeholder="Email" />
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
                    <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Button type="submit">Sign in</Button>
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
  
  // render(<Signup />);


  export default Signup;