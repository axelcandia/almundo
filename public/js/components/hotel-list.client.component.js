angular
    .module('HotelListComponent', [])
    .component('hotelList', {
        templateUrl: 'views/hotelList.html',
        controller: function GroupController(){
          this.innerProp = "inner";
          },
        bindings: {
          hero: '='
        }
      });