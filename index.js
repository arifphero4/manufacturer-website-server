const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.elwai.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

app.get("/", (req, res) => {
  res.send(" Hello World!Hello World!");
});

app.listen(port, () => {
  console.log(`ESTEE app listening on port ${port}`);
});
