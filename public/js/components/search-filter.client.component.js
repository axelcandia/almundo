angular
    .module('SearchFilterComponent', [])
    .component('searchFilter', {
        templateUrl: 'views/searchFilter.html',
        controller: function GroupController(){
          this.innerProp = "inner";
          },
        bindings: {
          hero: '='
        }
      });