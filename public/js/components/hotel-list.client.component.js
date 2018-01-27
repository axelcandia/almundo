angular
    .module('HotelListComponent', [])
    .component('hotelList', {
        templateUrl: 'views/hotelList.html', 
        bindings: {
          hotel: '='
        }
      });