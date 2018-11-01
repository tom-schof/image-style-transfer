const express = require("express");
const app = express();
const mongoose = require("mongoose");

//assigning PORT;
const PORT = process.env.PORT || 3001; 

//database connection:

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/styletransferdb",
  {
    useNewUrlParser: true
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(PORT);




