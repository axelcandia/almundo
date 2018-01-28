var log       = require('bole')('customers/router')
var router    = require('express').Router()
var data      = require("./data.json");


function getHotels (req, res) {
  filter=data;
  //If it has filter then filter, else its unnnecesary
  if( starHasContent(req.query.stars) || req.query.hotelName){
     filter = data.filter(function(hotel){
      return hasName(hotel.name,req.query.hotelName) && hasStars(hotel.stars,req.query.stars);
     }) 
  }
  
    res.json(filter); 
}

function hasName(hotel,name){
  name = name||"";
  return hotel.toUpperCase().indexOf(name.toUpperCase())>-1;
}

function hasStars(hotel,stars){ 
  stars=JSON.parse(stars);  
  if(stars["0"]==true || Object.keys(stars).length == 0 || !starHasContent(stars)){
    return true;
  }else{   
    return stars[String(hotel)];
  }
}
/**
 * If all the stars are on false, then return false
 */
function starHasContent(stars){ 
  for(number in stars){ 
    if(stars[number]) return true;
  }
  return false;
}

function createCustomer (req, res) {
  res.status(201).send()
}
 
router.get('/hotel', getHotels);
router.post('/hotel', getHotels); 
router.delete('/hotel', getHotels);

module.exports = router
