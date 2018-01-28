angular
    .module('HotelCtrl',['HotelService'] )
    .controller('HotelController', function($scope,Hotel) {  
        $scope.filters={ stars:{}  } ;

        $scope.getHotels=function(){ 
            Hotel.get($scope.filters).then(function successCallback(response) {
                console.log(response);
                $scope.hotels=response.data;
              }, function errorCallback(response) { 
                  console.log(response);
              });

        }
        $scope.getHotels();
        
 
           
    });