
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API.js";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./Community.css";

class Uploads extends Component {
  state = {
    uploads: []
  };

  componentDidMount() {
    this.loadUploads();
  }

  loadUploads = () => {
    API.getImages()
      .then(res => this.setState({ uploads: res.data }))
      .catch(err => console.log(err));
  };

  addLike = event => {
    event.preventDefault();
    API.addLike(event.currentTarget.name)
      .then(this.loadUploads());
  }

  addDislike = event => {
    event.preventDefault();
    API.addDislike(event.currentTarget.name)
      .then(this.loadUploads());
  }

  render() {
    return (
      <div>
        <Jumbotron title={"Community Style Transfer Images"} body={"Check out the art that other users created!"} />
        {this.state.uploads.length ? (
          <div className="container">
            <div className="row mx-auto text-center">
              {this.state.uploads.map(image => (
                <div className="col-md-4 mx-auto text-center img-container-community" key={image._id}>
                  <img className="img-thumbnail" src={image.url} />
                  <p className="likes">Likes: <span>{image.likes}</span></p>
                  <button className="btn btn-light like-button" id={`like-${image._id}`} name={image._id} onClick={this.addLike}><span className="far fa-thumbs-up"></span></button>
                  <button className="btn btn-light like-button" id={`dislike-${image._id}`} name={image._id} onClick={this.addDislike}><span className="far fa-thumbs-down"></span></button>
                </div>
              ))}
            </div>
          </div>
        ) : (
            <h3>No Style Transfer Images to Display</h3>
          )}
      </div>
    );
  }
}

export default Uploads;