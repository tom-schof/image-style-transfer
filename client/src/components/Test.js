import React, {Component} from 'react';
import Axios from "axios";

// let imagePreview = document.getElementById("preview-image-section");

const styles = {
  imageSize: {
    height: "200px",
    width: "300px",
    padding: "5px",
    margin: "20px",
    boxShadow: "5px 5px 4px 5px #888888",

  }
}

class Test extends Component {

    state = {
        selectedImageUrl: null,
        imagePreview: "https://res.cloudinary.com/cloudrohit/image/upload/v1541039425/cold-light-landscape-302743_hjujpl.jpg"
    }

    saveImage = (res) => {
      let userImageUrl = res.data.secure_url;
      console.log("UserImageUrl: ", userImageUrl);

      this.setState({
        // selectedImageUrl: userImageUrl,
        imagePreview: userImageUrl
      })
        // .src expects a source attribute of image
        // imgPreview.src = res.data.secure_url
    }//end of saveImage

    onSubmitImage = (event) => {
      event.preventDefault();
      const cloudUrl = "https://api.cloudinary.com/v1_1/cloudrohit/upload";
      const cloudUploadPreset = "yftncb0g"; //under cloud settings

      // built in constructor in
      // JS(https://developer.mozilla.org/en-US/docs/Web/API/FormData) Constructing a
      // set of prop/value pairts to represent form field (to post)
      let formData = new FormData();

      // formData.append =>>> creating a prop, value pair property = "file", value =
      // (fileObject)
      formData.append("file", this.state.imageObject);

      // preset for upload (cloudinary is looking for "upload_preset" ( allows for
      // uploadfrom Client Side));
      formData.append("upload_preset", cloudUploadPreset);
      console.log("FormData: ", formData);

      Axios({
        url: cloudUrl,
        method: "POST",
        //setting content type as formdata
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: formData
      })
      .then(this.saveImage)
      .catch((err) => (console.log(err)))
    }
    onChangeImage = (event) => {
      //file 
        console.log(event.target);
        let imageObject = event.target.files[0];
        console.log("Imageobject:", imageObject);
        this.setState({imageObject})

        const reader = new FileReader();

        reader.onload = (event) => {
          this.setState({
            inputImagePreview: event.target.result
          })
        };
        
        reader.readAsDataURL(imageObject);

        //setting up cloudnairy variables
        
    };

    render() {

        return (
            <div className="card">
                <form onSubmit={this.onSubmitImage}>
                  <img
                   src={this.state.inputImagePreview} 
                   alt="Placeholder" 
                   id=""
                   style ={styles.imageSize}
                   ></img>
                  <label htmlFor="image-upload" className="upload-container"></label>
                  <input id="image-upload" type="file" accept="image/*;capture=camera" capture="user" onChange={this.onChangeImage}/>
                  <button type="submit">Upload Image</button>

                </form>
            </div>

        );
    }
}

export default Test;
