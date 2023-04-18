const express = require("express");
const transactionsArr = require("../models/transaction.js")
const transactions = express.Router();
const { transactionValidator } = require("../models/transactionValidator.js")
//INDEX
transactions.get("/" , (req, res) => {
    res.json(transactionsArr)
})

//SHOW - GET ON ID
transactions.get('/:index', (req, res) => {
    const {index} = req.params;
    if(transactionsArr[index]){
        res.json(transactionsArr[index]);
    }else {
        res.redirect("/").status(404).json({ error: "Not Found"})
    }
})

//CREATE
transactions.post("/" , transactionValidator, (req, res) => {
    transactionsArr.push(req.body);
    res.status(201).json(transactionsArr[transactionsArr.length -1])
})

//UPDATE
transactions.put("/:index", transactionValidator, (req, res) => {
    const { index } = req.params;
    if(transactionsArr[index]) {
        transactionsArr[index] = req.body
        res.status(200).json(transactionsArr[index])
    }else {
        res.status(400).json( {error: "Not Found"})
    }
})

//DELETE
transactions.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArr[index]){
        const deleteTransaction = transactionsArr.splice(index, 1);
        res.status(200).json(deleteTransaction);
    }else {
        res.status(400).json({error: "Not Found"})
    }
})
//EXPORT 
module.exports = transactions;