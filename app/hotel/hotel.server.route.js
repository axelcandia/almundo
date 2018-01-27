var log       = require('bole')('customers/router')
var router    = require('express').Router()
var data      = require("./data.json");


function getHotels (req, res) {
   
    res.json(data); 
}

function createCustomer (req, res) {
  res.status(201).send()
}
 
router.get('/hotel', getHotels);
router.post('/hotel', getHotels); 
router.delete('/hotel', getHotels);

module.exports = router
