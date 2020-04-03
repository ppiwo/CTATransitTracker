var map;
var marker;
var markerMap = []

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 15
        });
      }

function plotPoints(lati, long, line, routeNumber){
  var myLatLng = {lat: Number(lati), lng: Number(long)};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    routeNumber: routeNumber,
    // icon: {
    //   url: "http://google.com/mapfiles/ms/micons/purple.png"
    // }
  });
  if (marker.typeof != "undefined"){
    markerMap.push(marker);
  }
}

function clearMap(){
  clearMarkers();
  markers = [];
}

function clearMarkers() {
  setMapOnAll(null);
}

function setMapOnAll(map) {
    marker.setMap(map);
}

function getMarkerRouteNumber(marker){
   removeMarkerIfExists (marker.routeNumber);
}

function removeMarkerIfExists(routeNumber){
  if (markerMap.findIndex(routeNumber) != undefined){
  console.log(found);
  }
  removeMarker(found);
}

function removeMarker (marker){
  markers[indexOfMarker].setMap(null);
}

