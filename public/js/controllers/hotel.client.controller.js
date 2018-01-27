angular
    .module('HotelCtrl',['HotelService'] )
    .controller('HotelController', function($scope,Hotel) { 
        var input={};
        Hotel.get(input).then(function successCallback(response) {
            console.log(response);
            $scope.hotels=response.data;
          }, function errorCallback(response) { 
              console.log(response);
          });
    });