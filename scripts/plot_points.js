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
  if (routeNumber.typeof != "undefined" && markerMap.typeof != "undefined"){
  if (checkIfMarkerExists(routeNumber, lati, long)){
    return;
  }
  var myLatLng = {lat: Number(lati), lng: Number(long)};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    routeNumber: routeNumber,
    icon: {
      url: setMarkerColor(line)
    }
  });
  if (marker.typeof != "undefined"){
    markerMap.push(marker);
  }
}
}

function setMarkerColor(line){

}

function checkIfMarkerExists(routeNumberNew, lat, long){
  for (var i = 0; i < markerMap.length; i++){
    console.log (markerMap[i].routeNumber)
    if (markerMap[i].routeNumber == routeNumberNew){
      console.log('exists')
      var latLng = {lat: Number(lat), lng: Number(long)};
      markerMap[i].setPosition(latLng);
      return true;
    }
    // return false;
  }
}



// function clearMap(){
//   clearMarkers();
//   markers = [];
// }

// function clearMarkers() {
//   setMapOnAll(null);
// }

// function setMapOnAll(map) {
//     marker.setMap(map);
// }

// function getMarkerRouteNumber(marker){
//    removeMarkerIfExists (marker.routeNumber, marker);
// }

// function removeMarkerIfExists(routeNumberOfMarker, marker){
//   for (var i = 0; i < markerMap.length; i++){
//     console.log(routeNumberOfMarker)
//     if (markerMap[i].routeNumber == routeNumberOfMarker){
//       console.log('exists' + markerMap[i].routeNumber);
//       console.log(i)
//       // removeMarker(i);
//     } 
//   }
//   // console.log(marker.routeNumber);
//   // let found = markerMap.findIndex(marker.routeNumber)
//   // console.log(found);
//   // // if (markerMap.findIndex(marker.routeNumber) != -1){
//   // // console.log(found);
//   // // removeMarker(found);
//   // }
// }

function removeMarker (indexOfMarker){
  markerMap[indexOfMarker].setMap(null);
  markerMap.splice(indexOfMarker,1);
}

