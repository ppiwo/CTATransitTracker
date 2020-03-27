var map;
var marker;

var latPosition = 'out.ctatt.route[0].train';
var longPosition;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 15
        });
        CentralPark = new google.maps.LatLng(41.881832, -87.623177);
        plotPoints(CentralPark);
      }

function plotPoints(location){
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Hello World!'
      });
      console.log('hi');
}