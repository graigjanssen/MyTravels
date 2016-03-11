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

  //Animate Slider

  $scope.animateSlider = function(e){
    // Determines previous or next
    var buttonType = e.target.classList[0];
    // Matching slides element
    var $slides = $(e.target.parentElement.nextElementSibling.firstElementChild);
    var margin = parseInt($slides.css('marginLeft'));
    console.log('current margin-left: ', margin);

    if (buttonType === "prev-button"){
      $slides.animate({
        marginLeft: (margin + 720)
      }, 350, function(){
        updateButtons($slides);
      });
    } else if (buttonType === "next-button"){
      $slides.animate({
        marginLeft: (margin - 720)
      }, 350, function(){
        updateButtons($slides);
      });
    }
  };
  // Update buttons for a given slider
  function updateButtons($slides){
    var buttonsEl = $slides.get(0).parentElement.previousElementSibling;
    var margin = (parseInt($slides.css('marginLeft')) * -1);
    var width = parseInt($slides.css('width'));

    var $prevButton = $(buttonsEl.children[0]);
    var $nextButton = $(buttonsEl.children[1]);

    if (margin === 0){
      $prevButton.hide();
      $nextButton.show();
    } else if (width - margin === 720) {
      $prevButton.show();
      $nextButton.hide();
    } else {
      $prevButton.show();
      $nextButton.show();
    }
  }

  // On page load...

  function init() {
    $scope.updateTrips();
  }

  init();

}]);
