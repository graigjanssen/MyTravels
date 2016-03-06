# [MyTravels](https://sleepy-dawn-11128.herokuapp.com/)

#### Collect Memories of Your Greatest Adventures...and Plan Your Next One!

MyTravels is a fun application that lets the user manage and view their past and future travels.  For each destination, the user can grab a photo, enter a date (either specific or general) and describe their memories or plans depending on whether the trip is in the past or future.  

##Technologies Used

MyTravels is built on a Ruby on Rails back end and Angular.js front end.  
- Through ActiveRecord, the back end controller interacts with a PostgreSQL database to create and delete trips for the user.  
- The Angular.js framework allows the application to run on a single page without the need for refreshing.  Angular also streamlines the rendering process and allows for conditional form fields and sorting trips.
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

###Two Form Paths

The create trip form changes depending on whether the destination is in the past or lies in the future.

```html
<div class="two columns center">
  <label for="">Been There?</label>
  <input type="radio" ng-model="newTrip.visited" ng-click="radioClicked = 1" value=true>
</div>
<div class="two columns center">
  <label for="">Wanna Go!</label>
  <input type="radio" ng-model="newTrip.visited" ng-click="radioClicked = 0" value=false>
</div>
</div>
<!-- Display if past trip -->
<div class="row" ng-show="radioClicked === 1">
<div class="offset-by-two four columns date-field">
    <label for="">When Did You Go?</label>
    <input type="text" ng-model="newTrip.date" placeholder="e.g August 2005, Winter 2008">
</div>
<div class="four columns">
  <label for="">Memories</label>
  <textarea ng-model="newTrip.memories" rows="8" cols="32" placeholder="e.g Ate a sno cone"></textarea>
</div>
</div>
```
In this example, the Angular directive `ng-click` is used to set `$scope.radioClicked` to 1 or 0.  That value is then used by  `ng-show` in the following section to display the appropriate fields.  

##Additional Features Planned
Since this is the first version of the app, there are many ways in which the application could be more robust, including...
- Making use of an external API to automatically assign a picture and other relevant data to each destination.
- User authentication to allow users to save their personalized page.
- New layout that incorporates a 'slider' so future and past sections are stacked vertically with trips scrolling horizontally.
