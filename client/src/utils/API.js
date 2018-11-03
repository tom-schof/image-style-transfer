import axios from "axios";

export default {
  // Gets all images
  getImages: function() {
    return axios.get("/api/uploads");
  },
  // Gets img by id
  getImage: function(id) {
    return axios.get("/api/uploads/" + id);
  },
  // Deletes the img with the given id
  deleteImage: function(id) {
    return axios.delete("/api/uploads/" + id);
  },
  // Saves a img to the database
  saveImage: function(imageData) {
    return axios.post("/api/uploads/", imageData);
  },

  loginUser: function(userData) {
    return axios.post("/user/login", userData);
  }
};