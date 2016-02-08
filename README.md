# [MyTravels](https://sleepy-dawn-11128.herokuapp.com/)

#### Collect Memories of Your Greatest Adventures...and Plan Your Next One!

MyTravels is a fun application that lets the user manage and view their past and future travels.  For each destination, the user can grab a photo, enter a date (either specific or general) and describe their memories or plans depending on whether the trip is in the past or future.  

##Technologies Used

MyTravels is built on a Ruby on Rails back end and Angular.js front end.  
- Through ActiveRecord, the back end controller interacts with a PostgreSQL database to create and delete trips for the user.  
- The Angular.js framework allows the application to run on a single page without the need for refreshing the page.
- Skeleton CSS is used to align the content within a grid layout, also making the app more mobile friendly.   

##Example Code

###Grouping Trips

```JavaScript
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
```
Within the main Angular controller, this function first ensures that the two trip 'buckets' are empty.  The `$http` service is then used to call the local trips API to get all of the trips.  The array that is returned is passed to the following sort function:

```JavaScript
function sortTrip(trip){
  if (trip.visited){
    $scope.pastTrips.push(trip);
  } else {
    $scope.plannedTrips.push(trip);
  }
}
```
