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
  saveImage: function(articleData) {
    return axios.post("/api/uploads/", articleData);
  },
  // Adds like to the database
  addLike: function(id, num) {
    return axios.put("/api/uploads/" + id, { $inc: { likes: 1} });
  },
  addDislike: function(id) {
    return axios.put("/api/uploads/" + id, { $inc: { likes: -1} });
  }
};