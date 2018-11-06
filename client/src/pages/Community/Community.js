
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API.js";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./Community.css";
import NavLogout from "../../components/NavLogout";

class Community extends Component {
  state = {
    uploads: [],
    voted: {}
  };

  componentDidMount() {
    this.loadUploads();
  }

  loadUploads = () => {
    API.getImages()
      .then(res => this.setState({ uploads: res.data }))
      .catch(err => console.log(err));
  };

  handleVote = event => {
    event.preventDefault();

    const arr = event.currentTarget.id.split("-");
    const voteType = arr[0];
    const id = arr[1];

    voteType === "like" ? this.castVote(id, true) : this.castVote(id, false);
  }

  castVote = (id, like) => {
    if (like) {
      if (!this.state.voted[id]) {
        API.addLike(id)
        .then(() => {
          this.setState({ voted: { [id]: 1 } });
          this.loadUploads()
        });
      }
      else if (this.state.voted[id] < 1) {
        API.addLike(id)
        .then(() => {
          this.setState({ voted: { [id]: (this.state.voted[id] + 1) } });
          this.loadUploads()
        });
      }
    } else {
      if (!this.state.voted[id]) {
        API.addDislike(id)
        .then(() => {
          this.setState({ voted: { [id]: -1 } });
          this.loadUploads()
        });
      } else if (this.state.voted[id] > -1) {
        API.addDislike(id)
        .then(() => {
          this.setState({ voted: { [id]: (this.state.voted[id] - 1) } });
          this.loadUploads()
        });
      }
    }
  }

  render() {
    return (
      <div>
        <NavLogout updateUser={this.props.updateUser} username={this.props.username} />
        <Jumbotron title={"Community Images"} body={"Check out the art that other users created!"} />
        {this.state.uploads.length ? (
          <div className="container">
            <div className="row mx-auto text-center">
              {this.state.uploads.map(image => (
                <div className="col-xs-12 col-sm-6 col-md-4 mx-auto text-center img-container-community" key={image._id}>
                  <img className="img-thumbnail shadow" src={image.url} />
                  <p className="created-by text-shadow">Created by: <span>{image.user}</span></p>
                  <p className="likes text-shadow">Likes: <span>{image.likes}</span></p>
                  <button className="btn btn-light like-button shadow" id={`like-${image._id}`} name={image._id} onClick={this.handleVote}><span className="far fa-thumbs-up"></span></button>
                  <button className="btn btn-light like-button shadow" id={`dislike-${image._id}`} name={image._id} onClick={this.handleVote}><span className="far fa-thumbs-down"></span></button>
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

export default Community;