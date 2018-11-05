import React from "react";
import { Button} from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class Logout extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSubmit = this.handleSubmit.bind(this);
  
      this.state = {
        loggedIn: true,
        redirectTo: null
      };
    }
    
  handleSubmit(event) {
    // alert(`username: ${this.state.username} \n password: ${this.state.password}`);
    event.preventDefault();
    console.log(event.target);
    axios.post('/api/user/logout')
    .then(response => {
      console.log("Response: " + response);
      if (response.status === 200){
        console.log("successfully logged out");
        this.props.updateUser({
            loggedIn: false,
            username: null
        });

        console.log(this.props);
        this.setState({
          redirectTo: '/'
        });
      }else{
        console.log("Logout error");
      }
    })
    .catch(error =>{
      console.log("Logout server error: " + error);
      
    })
  }
  
    render() {
      if (this.state.redirectTo) {
        return (<Redirect to={{ pathname: this.state.redirectTo }} />)
    } else {
  
      return (

        <div>
          
          <Button bsStyle="primary" bsSize="large" onClick={this.handleSubmit}>
            Logout
          </Button>

        </div>
      );
    }
  }
}



  export default Logout;