import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API.js";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Community Style Transfer Images</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.uploads.length ? (
              <List>
                {this.state.uploads.map(image => (
                  <ListItem key={image._id}>
                    <a href={image.url}>
                      <strong>
                        <img src={image.url} /> created on {image.date} by {image.user}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Style Transfer Images to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Uploads;
