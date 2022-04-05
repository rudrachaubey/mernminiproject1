const express = require('express');

const app = express();
const mongoose = require("mongoose");
var cors = require('cors');
const books = require('./routes/api/books');


app.get('/', (req, res) => res.send('Hello world!'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const port = process.env.PORT || 8082;
// use Routes
app.use('/api/books', books);
let mongoConnUrl = "mongodb://localhost/marchnode22";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log("yes, we are connected to mongodb and the database");
});


app.listen(port, () => console.log(`Server running on port ${port}`));