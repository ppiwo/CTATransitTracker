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
    return "https://i.imgur.com/G87R2fz.png"
  }
  if (line === "blue"){
    return "https://i.imgur.com/G5NXF95.png"
  }
  if (line === "brown"){
    return "https://i.imgur.com/yG803c5.png"
  }
  if (line === "green"){
    return "https://i.imgur.com/ZIlCwii.png"
  }
  if (line === "orange"){
    return "https://i.imgur.com/wMf7NbR.png"
  }
  if (line === "pink"){
    return "https://i.imgur.com/KSHqsW1.png"
  }
  if (line === "purple"){
    return "https://i.imgur.com/CnDLNOO.png"
  }
  if (line === "yellow"){
    return "https://i.imgur.com/3PEJWHZ.png"
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

