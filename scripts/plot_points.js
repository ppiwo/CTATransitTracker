var map;
var marker;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 15
        });
      }

function plotPoints(lati, long, line){
  var myLatLng = {lat: Number(lati), lng: Number(long)};
  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    // icon: {
    //   url: "http://google.com/mapfiles/ms/micons/purple.png"
    // }
  });
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

