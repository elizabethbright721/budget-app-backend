const transactionValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("item_name") && req.body.hasOwnProperty("amount") && req.body.hasOwnProperty("from")){
        next();
    }else {
        res.status(400).json({error: "Transaction not complete.  It must contain item_name, amount, and from."})
    }
}
    
  

module.exports = { transactionValidator }