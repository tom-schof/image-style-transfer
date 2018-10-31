import React, { Component } from "react";
import './Canvas.css';
import * as ml5 from 'ml5';

class Canvas extends Component {
  state = {
    inputImg: "https://cdn-images-1.medium.com/max/1366/0*ab21Gqm4fDN1K4kg.jpg",
    styleImg: "",
    resultImg: ""
  }

  componentDidMount() {
    //   this.setState({
    //     inputImg: "../../../public/img/patagonia.jpg",
    //     styleImg: "../../style-models/wave"
    //   });
  }

  transferStyle = inputImg => {
    console.log(ml5);
    console.log(ml5.styleTransfer);
    ml5.styleTransfer('models/wave')
      .then(style => {
        console.log(style);
        style.transfer(inputImg);
      })
      .then(result => {
        // const newImage = new Image(350, 350);
        const newImageSrc = result.src;
        this.setState({ resultImg: newImageSrc });
        console.log(this.state.resultImg);
      });
  }

  render() {
    return (
      <main className="canvas">
        <div className="container">
          <button onClick={() => {
            const inputImg = new Image(350, 350);
            inputImg.crossOrigin = "anonymous";
            inputImg.src = this.state.inputImg;
            this.transferStyle(inputImg);
          }
          }>Transfer</button>
          <img src={this.state.inputImg} alt="input" />
          <img src={this.state.resultImg} alt="result" />
        </div>
      </main>
    );
  }
}

export default Canvas;
