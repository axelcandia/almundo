angular
    .module('SearchFilterComponent', [])
    .component('searchFilter', {
        templateUrl: 'views/searchFilter.html',
        controller: searchFilterController,
        bindings: {
          filters: '=',
          onSearch:"&"
        }
      });
function searchFilterController () { 
  var $ctrl = this; 
  //This function is equal to the one of hotel-list.component because of lack of time wasnt able to create helper for both 
  $ctrl.getStars = function(index) {
    return new Array(index);   
  }  
   

}