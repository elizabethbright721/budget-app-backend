const transactionValidator = (req, res, next) => {
    const validationRule = {
        "item_name": "",
        "amount": 0,
        "date": "",
        "from": "",
        "category": "",
    };    

    if (!validationRule){
        res.status(400).json({error: "Transaction not complete"})
    }else {
        next();
    }
}
    
  

module.exports = { transactionValidator }