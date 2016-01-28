var app = angular.module('myTravels', []);

app.controller('main', ['$scope', '$http', function($scope, $http){
  $scope.pastTrips = [];
  $scope.plannedTrips = [];

  $scope.radioClicked = null;
  
  $http.get('api/trips').then(function(response){
    var allTrips = response.data.trips;
    allTrips.forEach(function(trip){
      if (trip.visited){
        $scope.pastTrips.push(trip);
      } else {
        $scope.plannedTrips.push(trip);
      }
    });
  });
}]);
