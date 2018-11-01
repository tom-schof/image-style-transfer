const mongoose = require("mongoose");
const db = require("../models");

// This file empties the styledb collection and inserts dummy data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/styledb"
);

const uploadSeed = [
  {
    url: "https://www.pexels.com/photo/adult-animal-beautiful-cold-313104/",
    style: "interesting",
    user: "Some guy1",
    date: new Date(Date.now())
  },
  {
    url: "https://images.pexels.com/photos/1374551/pexels-photo-1374551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    style: "what",
    user: "some dude 2",
    date: new Date(Date.now())
  }
];

db.Upload
  .remove({})
  .then(() => db.Upload.collection.insertMany(uploadSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
