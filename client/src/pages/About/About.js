import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Nav from '../../components/Nav';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <Grid>
            <h1>About</h1>
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
                  <h3><strong>Image Style Transfer</strong></h3>
                  <h4>in your browser.</h4>
                  <ul>
                    <li>
                      <p>
                        Filter an image through a model trained by a deep learning neural network (upload your own image!)   </p>
                    </li>
                    <li>
                      <p>
                        Recommended image size for upload is 250x250 pixels.
                      </p>
                    </li>
                    <li>
                      <p>
                        See what other users have created on the community page and vote.
                      </p>
                    </li>
                    <li>
                      <p>
                        View the styled images you've made on the saved page.
                      </p>
                    </li>
                  </ul>
                </Panel.Body>
                <p>
                  <a href='/'><Button className='col-md-offset-4'>Create Account »</Button></a>
                </p>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Technologies Used</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <article>
                    <a href='https://reactjs.org/'>
                      <img src='./img/icons/react.png' />
                    </a>
                  </article>
                  <article>
                    <a href='https://nodejs.org/'>
                      <img src='./img/icons/node.png' />
                    </a>
                  </article>
                  <article>
                    <a href='https://mongodb.com/'>
                      <img src='./img/icons/mongo.png' />
                    </a>
                  </article>
                  <article>
                    <a href='https://expressjs.com/'>
                      <img src='./img/icons/express.png' />
                    </a>
                  </article>

                  <article>
                    <a href='https://js.tensorflow.org/'>
                      <img src='./img/icons/tensorflow.png' />
                    </a>
                  </article>
                  <article>
                    <a href='https://react-bootstrap.github.io/'>
                      <img className='bootstrap'src='./img/icons/bootstrap.png' />
                    </a>
                  </article>
                  <article>
                    <a href='https://ml5js.org/'>
                      <img src='./img/icons/ml5.png' />
                    </a>
                  </article>
                </Panel.Body>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Neural Style Transfer</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <h4>
                    <strong>A technique that allow's an input image to be stylized by a style reference image.</strong>
                  </h4>
                  <ul>
                    <li>
                      <p>
                        Tensorflow.js and ml5.js allow us to quickly transfer a style from a trained model image onto an input image of the user's choice.
                      </p>
                    </li>
                    <li>
                      <p>
                        Some image style models were trained through <a href='https://www.paperspace/com'>Paperspace</a> using this docker container, <a href='https://hub.docker.com/r/cvalenzuelab/styletransfer/'>cvalenzuelab/styletransfer/</a>
                      </p>
                    </li>
                  </ul>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}