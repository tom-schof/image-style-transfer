import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Nav from '../../components/Nav'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <Grid>
            <h1>About</h1>
            <p></p>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Overview</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <strong>Image Style Transfer in the browser.</strong>

                  > Filter an image through a model trained by a deep learning neural network (upload your own image!)

                  > Recommended image size for upload is 250x250 pixels.

                  > See what other users have created on the community page and vote.

                  > View the styled images you've made on the saved page.


                </Panel.Body>
                <a href='/'><p><Button>Create Account »</Button></p></a>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Technologies Used</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <article>
                    <a href=''>
                      <img src='' />
                    </a>
                  </article>
                </Panel.Body>
                <p><Button>View details »</Button></p>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Neural Style Transfer</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</Panel.Body>
                <p><Button>View details »</Button></p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}