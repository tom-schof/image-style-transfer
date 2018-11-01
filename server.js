const express = require("express");
const app = express();

//assigning PORT;
const PORT = process.env.PORT || 3001; 


app.get("/", (req,res) => {
  res.send("Hello...");
});


app.listen(PORT);




