const transactionValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("id") && req.body.hasOwnProperty("item_name") && req.body.hasOwnProperty("amount") && req.body.hasOwnProperty("date") && req.body.hasOwnProperty("from")&& req.body.hasOwnProperty("category")){
        next();
    }else {
        res.status(400).json({error: "Transaction not complete.  It must contain id, item_name, amount, date, from and category."})
    }
}
    
  

module.exports = { transactionValidator }