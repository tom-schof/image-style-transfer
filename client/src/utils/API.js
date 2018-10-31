import axios from "axios";

export default {
  // Gets all images
  getImages: function() {
    return axios.get("/api/images");
  },
  // Gets img by id
  getImage: function(id) {
    return axios.get("/api/images/" + id);
  },
  // Deletes the img with the given id
  deleteImage: function(id) {
    return axios.delete("/api/images/" + id);
  },
  // Saves a img to the database
  saveImage: function(articleData) {
    return axios.post("/api/images/", articleData);
  },
};
