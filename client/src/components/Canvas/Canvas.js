import React, { Component } from "react";
import './Canvas.css';
import * as ml5 from 'ml5';
import Axios from "axios";
import API from "../../utils/API";
import { FacebookIcon, TwitterIcon, } from "react-share";
import { FacebookShareButton, TwitterShareButton, } from "react-share";

class Canvas extends Component {
  state = {
    inputImg: "",
    styleModel: "",
    styleImg: "",
    resultImg: "",
    transferMsg: "Transform your image!",
    transferStatus: false
  }

  styleKey = {
    splatter: {
      model: "./models/training-img_model",
      img: "./img/training-img.jpg"
    },
    la_muse: {
      model: "./models/la_muse",
      img: "./img/la_muse.jpeg"
    },
    mathura: {
      model: "./models/mathura",
      img: "./img/unknown.png"
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
    },
    booty: {
      model: "./models/ambassador-booty",
      img: "./img/ambassador-booty.jpg"
    },
    bororo: {
      model: "./models/bororo",
      img: "./img/bororo.jpg"
    },
    moth: {
      model: "./models/moth",
      img: "./img/moth.jpg"
    },
    snorre: {
      model: "./models/snorre",
      img: "./img/snorre.jpg"
    },
    simpsons: {
      model: "./models/generic-square",
      img: "./img/generic-square-image.jpg"
    },
    reflection: {
      model: "./models/reflection",
      img: "./img/reflection.jpg"
    },
    rickmorty: {
      model: "./models/rickmorty",
      img: "./img/rickmorty.jpg"
    },
    lion: {
      model: "./models/lion",
      img: "./img/lion.jpg"
    },
    zebra: {
      model: "./models/zebra",
      img: "./img/zebra.jpg"
    }
  };

  styleArray = ["splatter", "la_muse", "mathura", "matta", "rain_princess", "scream", "udnie", "wave", "wreck", "booty", "bororo", "moth", "snorre", "simpsons", "reflection", "rickmorty", "lion", "zebra"];

  componentDidMount() {
    //   this.setState({
    //     inputImg: "../../../public/img/patagonia.jpg",
    //     styleImg: "../../style-models/wave"
    //   });
  }

  transferStyle = inputImg => {
    this.setState({ transferMsg: "Styling Image..." });
    ml5.styleTransfer(this.state.styleModel)
      .then(style => style.transfer(inputImg))
      .then(result => {
        const newImageSrc = result.src;
        this.setState({ resultImg: newImageSrc, transferMsg: "Done!" });
        const cloudUrl = "https://api.cloudinary.com/v1_1/cloudrohit/upload";
        const cloudUploadPreset = "yftncb0g"; //under cloud settings

        // built in constructor in
        // JS(https://developer.mozilla.org/en-US/docs/Web/API/FormData) Constructing a
        // set of prop/value pairts to represent form field (to post)
        let formData = new FormData();

        // formData.append =>>> creating a prop, value pair property = "file", value =
        // (fileObject)
        formData.append("file", this.state.resultImg);

        // preset for upload (cloudinary is looking for "upload_preset" ( allows for
        // uploadfrom Client Side));
        formData.append("upload_preset", cloudUploadPreset);

        Axios({
          url: cloudUrl,
          method: "POST",
          //setting content type as formdata
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: formData
        })
          .then(res => {
            console.log(res.data.secure_url);
            API.saveImage({ url: res.data.secure_url });
          })
          .catch(err => console.log(err))
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

  handleFileChange = event => {
    let imageObject = event.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      this.setState({
        inputImg: event.target.result
      })
    };

    reader.readAsDataURL(imageObject);
  };

  handleSubmit = () => {
    const inputImg = new Image(300, 300);
    inputImg.crossOrigin = "anonymous";
    inputImg.src = this.state.inputImg;

    this.transferStyle(inputImg);
  }

  generateShareButtons = () => {
    return (
      <div>
        <FacebookShareButton
          url={this.state.imageUrl}>
          <FacebookIcon size={32} round={true}></FacebookIcon >
        </FacebookShareButton>
        <br />
        <br />
        <TwitterShareButton
          url={this.state.imageUrl}>
          <TwitterIcon size={32} round={true}></TwitterIcon >
        </TwitterShareButton>
      </div>
    )
  }

  render() {
    return (
      <main className="canvas">
        <div className="container">
          <div className="row mx-auto text-center">
            <div className="col-lg-3 col-md-5 text-center column">
              <div className="img-container text-center mx-auto shadow">
                {this.state.inputImg ? <img src={this.state.inputImg} alt="input" className="img-thumbnail" /> : <p className="img-placeholder">Input Image</p>}
              </div>
              <form>
                <div className="form-group shadow">
                  <label htmlFor="input-select" className="caption text-shadow">Select Input Image</label>
                  <select className="form-control" id="input-select" name="inputImg" onChange={this.handleImgChange}>
                    <option value=""></option>
                    <option value="./img/dc.jpg">DC</option>
                    <option value="./img/mountain.jpg">Mountain</option>
                    <option value="./img/patagonia.jpg">Patagonia</option>
                    <option value="./img/waterfall.jpeg">Waterfall</option>
                    <option value="./img/dog.jpg">Dog</option>
                    <option value="./img/lambo.jpg">Lambo</option>
                    <option value="./img/pug.jpg">Pug</option>
                  </select>
                  <div className="input-group mb-3 shadow">
                    <div className="custom-file">
                      <input onChange={this.handleFileChange} type="file" className="custom-file-input" id="file-input" aria-describedby="inputGroupFileAddon" />
                      <label className="custom-file-label text-left" htmlFor="file-input">Choose file</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-1 col-md-1 text-center">
              <h1 className="mx-auto op text-shadow">+</h1>
            </div>

            <div className="col-lg-3 col-md-5 text-center column">
              <div className="img-container text-center mx-auto shadow">
                {this.state.styleImg ? <img src={this.state.styleImg} alt="result" className="img-thumbnail" /> : <p className="img-placeholder">Style Image</p>}
              </div>
              <form>
                <div className="form-group shadow">
                  <label htmlFor="style-select" className="caption text-shadow">Select Style Image</label>
                  <select className="form-control" id="style-select" name="styleImg" onChange={this.handleImgChange}>
                    <option value=""></option>
                    <option value="rain_princess">Rain Princess</option>
                    <option value="splatter">Splatter</option>
                    <option value="la_muse">La Muse</option>
                    <option value="wave">Wave</option>
                    <option value="scream">Scream</option>
                    <option value="udnie">Udnie</option>
                    <option value="wreck">Wreck</option>
                    <option value="matta">Matta</option>
                    <option value="mathura">Unknown (B&amp;W)</option>
                    <option value="booty">Booty</option>
                    <option value="bororo">Bororo</option>
                    <option value="moth">Moth</option>
                    <option value="snorre">Snorre</option>
                    <option value="simpsons">Simpsons</option>
                    <option value="reflection">Reflection</option>
                    <option value="rickmorty">Rick &amp; Morty</option>
                    <option value="lion">Lion</option>
                    <option value="zebra">Zebra</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="col-lg-1 col-md-1 text-center">
              <h1 className="mx-auto op text-shadow">=</h1>
            </div>

            <div className="col-lg-3 col-md-5 text-center column">
              <div className="img-container text-center mx-auto shadow">
                {this.state.resultImg ? <img src={this.state.resultImg} alt="result" className="img-thumbnail" /> : <p className="img-placeholder">Result Image</p>}
              </div>
              <label className="caption text-shadow">{this.state.transferMsg}</label>
              <div className="col-sm-12 text-center">
                <button className="btn btn-light shadow transfer-button" onClick={() => {
                  this.state.inputImg && this.state.styleImg ? this.handleSubmit() : this.setState({ transferMsg: "Select input and style image!" })
                }
                }>Transfer Style</button>
                <div className="share-container">
                  {
                    this.state.transferStatus ?
                      this.generateShareButtons()
                      : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Canvas;