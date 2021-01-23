const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Porting
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongodb+srv://sambishop3015:Owen.Bishop1@testcluster.dckcn.mongodb.net/workout?retryWrites=true&w=majority
// OVKWWi5QMgSZOSH9

//DB Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//API & HTML Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//Starting Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});