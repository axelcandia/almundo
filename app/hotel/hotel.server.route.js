var log       = require('bole')('customers/router')
var router    = require('express').Router()
var data      = require("./data.json");


function getHotels (req, res) {
   var filter = data.filter(function(hotel){
    return hasName(hotel.name,req.query.hotelName) && hasStars(hotel.stars,req.query.stars);
   })
    res.json(filter); 
}

function hasName(hotel,name){
  name = name||"";
  return hotel.toUpperCase().indexOf(name.toUpperCase())>-1;
}

function hasStars(hotel,stars){ 
  stars=JSON.parse(stars);
  
  if(stars["0"]==true || Object.keys(stars).length == 0 ){
    return true;
  }else{  
    return stars[String(hotel)];
  }
}

function createCustomer (req, res) {
  res.status(201).send()
}
 
router.get('/hotel', getHotels);
router.post('/hotel', getHotels); 
router.delete('/hotel', getHotels);

module.exports = router
