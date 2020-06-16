var map;
var marker;
var markerMap = []

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 15,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          styles: [
            {
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]
            }
          ]
        });
        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
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
    title: line,
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
  if (line === "red"){
    return "http://127.0.0.1:5500/assets/train_markers/red_line.png"
  }
  if (line === "blue"){
    return "http://127.0.0.1:5500/assets/train_markers/blue_line.png"
  }
  if (line === "brown"){
    return "http://127.0.0.1:5500/assets/train_markers/brown_line.png"
  }
  if (line === "green"){
    return "http://127.0.0.1:5500/assets/train_markers/green_line.png"
  }
  if (line === "orange"){
    return "http://127.0.0.1:5500/assets/train_markers/orange_line.png"
  }
  if (line === "pink"){
    return "http://127.0.0.1:5500/assets/train_markers/pink_line.png"
  }
  if (line === "purple"){
    return "http://127.0.0.1:5500/assets/train_markers/purple_line.png"
  }
  if (line === "yellow"){
    return "http://127.0.0.1:5500/assets/train_markers/yellow_line.png"
  }







window.localStorage.setItem('user', JSON.stringify(person));
}

function checkIfMarkerExists(routeNumberNew, lat, long){
  for (var i = 0; i < markerMap.length; i++){
    if (markerMap[i].routeNumber == routeNumberNew){
      var latLng = {lat: Number(lat), lng: Number(long)};
      markerMap[i].setPosition(latLng);
      return true;
    }
    // return false;
  }
}


//hiding existing markers of a certain line color. Line colors are stored under title propery
function hideLine (lineColor){
  for (var i = 0; i < markerMap.length; i++){
    if (markerMap[i].title == lineColor && markerMap[i].visible == true){
      console.log('removing ' +lineColor);
      markerMap[i].setVisible(false);
}
  }
}

//unhiding existing markers
function addLine (lineColor){
  for (var i = 0; i < markerMap.length; i++){
    if (markerMap[i].title == lineColor && markerMap[i].visible == false){
    console.log('adding back ' +lineColor);
    markerMap[i].setVisible(true);
}
  }
}
