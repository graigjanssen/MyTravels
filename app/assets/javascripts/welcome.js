var app = angular.module('myTravels', []);

app.controller('main', ['$scope', '$http', function($scope, $http){
  $scope.pastTrips = [];
  $scope.plannedTrips = [];

  $scope.radioClicked = null;

  function sortTrip(trip){
    if (trip.visited){
      $scope.pastTrips.push(trip);
    } else {
      $scope.plannedTrips.push(trip);
    }
  }

  //Get all trips, sort into past and planned
  $http.get('api/trips').then(function(response){
    var allTrips = response.data.trips;
    allTrips.forEach(function(trip){
      sortTrip(trip);
    });
  });

  $scope.newTrip = {};

  $scope.createTrip = function(){
    $http.post('api/trips', { trip: $scope.newTrip }).then(function(response){
      var trip = response.data;
      sortTrip(trip);
      $scope.newTrip = {};
    });
  };

}]);
