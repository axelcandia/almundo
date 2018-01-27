angular
    .module('HotelService', [])
    .factory('Hotel', ['$http', function($http) {
    return {
        // call to get all nerds
        get : function() {
            var req= {
                method: 'GET',
                url: '/api/nerds',
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