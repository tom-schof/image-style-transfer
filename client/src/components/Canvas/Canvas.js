import React, { Component } from "react";
import './Canvas.css';
import * as ml5 from 'ml5';

class Canvas extends Component {
  state = {
    inputImg: "",
    styleModel: "",
    styleImg: "",
    resultImg: "",
    transferMsg: ""
  }

  styleKey = {
    new: {
      model: "./models/training-img_model",
      img: "./img/training-img.jpg"
    },
    la_muse: {
      model: "./models/la_muse",
      img: "./img/la_muse.jpeg"
    },
    mathura: {
      model: "./models/mathura",
      img: "./img/maturana.jpg"
    },
    matta: {
      model: "./models/matta",
      img: "./img/matta.jpg"
    },
    rain_princess: {
      model: "./models/rain_princess",
      img: "./img/rain_princess.jpg"
    },
    scream: {
      model: "./models/scream",
      img: "./img/scream.jpg"
    },
    udnie: {
      model: "./models/udnie",
      img: "./img/udnie.jpg"
    },
    wave: {
      model: "./models/wave",
      img: "./img/wave.jpg"
    },
    wreck: {
      model: "./models/wreck",
      img: "./img/wreck.jpg"
    }
  };

  styleArray = ["new","la_muse","mathura","matta","rain_princess","scream","udnie","wave","wreck"];

  componentDidMount() {
      //   this.setState({
      //     inputImg: "../../../public/img/patagonia.jpg",
      //     styleImg: "../../style-models/wave"
      //   });
    }

  transferStyle = inputImg => {
      this.setState({transferMsg: "Styling Image..."});
      ml5.styleTransfer(this.state.styleModel)
        .then(style => style.transfer(inputImg))
        .then(result => {
          const newImageSrc = result.src;
          this.setState({ resultImg: newImageSrc, transferMsg: "Done!" });
        });
    }

  handleImgChange = event => {
      const { name, value } = event.target;
      if (this.styleArray.includes(value)) {
        this.setState({
          [name]: this.styleKey[value].img,
          styleModel: this.styleKey[value].model
        })
      } else {
        this.setState({ [name]: value });
      }
    }

  render() {
      return (
        <main className="canvas">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="img-container text-center mx-auto">
                  {this.state.inputImg ? <img src={this.state.inputImg} alt="input" className="img-thumbnail" /> : <p className="img-placeholder">Input Image</p>}
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="input-select">Select Input Image</label>
                    <select className="form-control" id="input-select" name="inputImg" onChange={this.handleImgChange}>
                      <option value=""></option>
                      <option value="./img/patagonia.jpg">Patagonia</option>
                      <option value="./img/dc.jpg">DC</option>
                      <option value="./img/pug.jpg">Pug</option>
                      <option value="./img/dog.jpg">Dog</option>
                      <option value="./img/dubai.jpeg">Dubai</option>
                      <option value="./img/jessie.jpeg">Jessie</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 col-md-6 text-center">
                <div className="img-container text-center mx-auto">
                  {this.state.styleImg ? <img src={this.state.styleImg} alt="result" className="img-thumbnail" /> : <p className="img-placeholder">Style Image</p>}
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="style-select">Select Style Image</label>
                    <select className="form-control" id="style-select" name="styleImg" onChange={this.handleImgChange}>
                      <option value=""></option>
                      <option value="new">New</option>
                      <option value="la_muse">La Muse</option>
                      <option value="mathura">Mathura</option>
                      <option value="matta">Matta</option>
                      <option value="rain_princess">Rain Princess</option>
                      <option value="scream">Scream</option>
                      <option value="udnie">Udnie</option>
                      <option value="wave">Wave</option>
                      <option value="wreck">Wreck</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 col-md-6 text-center">
                <div className="img-container text-center mx-auto">
                  {this.state.resultImg ? <img src={this.state.resultImg} alt="result" className="img-thumbnail" /> : <p className="img-placeholder">Result Image</p>}
                </div>
                <p>{this.state.transferMsg}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <button className="btn btn-primary" onClick={() => {
                  const inputImg = new Image(300, 300);
                  inputImg.crossOrigin = "anonymous";
                  inputImg.src = this.state.inputImg;
                  this.state.inputImg && this.state.styleImg ? this.transferStyle(inputImg) : this.setState({transferMsg: "Select both an input and a style image!"})  
                }
                }>Transfer Style</button>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }

  export default Canvas;
