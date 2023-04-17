//DEPENDENCIES 
const express = require("express")
const cors = require("cors")
const transactionController = require("./controllers/transactionController.js")
//CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors())

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my Budget App")
});

app.use("/transactions" , transactionController)

//ERROR
app.get("*", (req, res) => {
    res.status(404).json({error : "Page Not Found"})
})

//EXPORT
module.exports = app;