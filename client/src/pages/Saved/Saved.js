
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API.js";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./Saved.css";
import NavLogout from "../../components/NavLogout";

class Saved extends Component {
  state = {
    uploads: []
  };

  componentDidMount() {
    this.loadUploads();
  }

  loadUploads = () => {
    API.getUserImages(this.props.username)
      .then(res => this.setState({ uploads: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavLogout updateUser={this.props.updateUser} username={this.props.username} />
        <Jumbotron title={"Your Images"} body={"Check out the art that you created!"} />
        {this.state.uploads.length ? (
          <div className="container">
            <div className="row mx-auto text-center">
              {this.state.uploads.map(image => (
                <div className="col-xs-12 col-sm-6 col-md-4 mx-auto text-center img-container-community" key={image._id}>
                  <img className="img-thumbnail shadow" src={image.url} />
                  <p className="likes text-shadow">Likes: <span>{image.likes}</span></p>
                </div>
              ))}
            </div>
          </div>
        ) : (
            <h3 className="text-center">No Style Transfer Images to Display</h3>
          )}
      </div>
    );
  }
}

export default Saved;