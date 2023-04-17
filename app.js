//DEPENDENCIES 
const express = require("express")
const cors = require("cors")

//CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors())

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my Budget App")
});


//EXPORT
module.exports = app;