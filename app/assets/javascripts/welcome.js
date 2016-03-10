var app = angular.module('myTravels', []);

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
    $scope.plannedTrips = [];

    $http.get('api/trips').then(function(response){
      var allTrips = response.data.trips;
      allTrips.forEach(function(trip){
        sortTrip(trip);
      });
      // Once trips are sorted, check how many are in each category, use to set width of each slider
      var tripTotals = [$scope.pastTrips.length, $scope.plannedTrips.length];
      setSliderWidths(tripTotals);
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

  // Set Slider widths
  function setSliderWidths(tripTotals){
    for (var i = 0; i < tripTotals.length; i++) {
      $($('.slides')[i]).css('width', ((tripTotals[i] * 720) + 'px'));
    }
  }

  // On page load...

  function init() {
    $scope.updateTrips();
  }

  init();

}]);
