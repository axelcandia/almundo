angular
    .module('HotelListComponent', [])
    .component('hotelList', {
        templateUrl: 'views/hotelList.html', 
        controller: hotelListController,
        bindings: {
          hotel: '='
        }, 
      });
function hotelListController () { 
  var $ctrl = this; 
  
  $ctrl.getStars = function() {
    return new Array($ctrl.hotel.stars);   
  }
}