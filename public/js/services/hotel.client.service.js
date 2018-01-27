angular
    .module('HotelService', [])
    .factory('Hotel', ['$http', function($http) {
    return {
        // call to get all nerds
        get : function(input) {
            var req= {
                method: 'GET',
                url: '/api/hotel',
                data: input
            };
            return $http(req);
        }, 
        create : function(data) {
            return $http.post('/api/hotel', data);
        },
 
        delete : function(id) {
            return $http.delete('/api/hotel/' + id);
        }
    }       

}]);