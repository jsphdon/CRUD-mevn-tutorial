// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));


// database connection
mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to the database"))
  .catch((error) => console.log(error));

// routes prefix
app.use("/api/post", require("./route/routes"));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname+'/dist/'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname+ "/dist/index.html");
  })
}

// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));