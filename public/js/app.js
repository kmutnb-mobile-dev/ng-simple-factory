angular.module('ngApp', [])
  .factory('MyData', function() {
    var data = {
      name: "Sutee",
      tel:  "086-123-8765"
    };
    return {
      get: function(){
        return data;
      },
      set: function(name, tel){
        data.name = name;
        data.tel = tel;
      }
    };
  })
  .controller('ngCtrl', ['$scope','MyData', function($scope,MyData) {
    $scope.data = MyData.get();
  }])
  ;
