var app = angular.module('myTravels', ['angular-carousel']);

app.controller('main', ['$scope', '$http', function($scope, $http){

  $scope.radioClicked = null;

  function sortTrip(trip){
    if (trip.visited){
      $scope.pastTrips.push(trip);
    } else {
      $scope.plannedTrips.push(trip);
    }
  }

  // Get all trips, sort into past and planned

  $scope.updateTrips = function(){
    $scope.pastTrips = [];
    $scope.plannedTrips =[];

    $http.get('api/trips').then(function(response){
      var allTrips = response.data.trips;
      allTrips.forEach(function(trip){
        sortTrip(trip);
      });
    });
  };

  // Trip Creation

  $scope.newTrip = {};

  $scope.createTrip = function(){
    $http.post('api/trips', { trip: $scope.newTrip }).then(function(){
      $scope.updateTrips();
      $scope.newTrip = {};
    });
  };

  // Trip Deletion

  $scope.deleteTrip = function( id ){
    $http.delete('api/trips/' + id).then(function(response){
      $scope.updateTrips();
    });
  };

  // On page load...

  function init() {
    $scope.updateTrips();
  }

  init();

}]);
