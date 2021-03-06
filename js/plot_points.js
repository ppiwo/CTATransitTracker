var map;
var marker;
var markerMap = [];

let loader = {
  loaderEnabled: true
}

let markerMapSize = 0;

//Showing a spinner with a loading message until CTA train data is parsed
function disableLoader() {
  if (markerMapSize > 20) {
    loader.loaderEnabled = false;
    document.getElementById('loader').className = 'loaderHide';
    document.getElementById('map').className = '';
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.881832, lng: -87.623177 },
    zoom: 14,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  });
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}

let plotPoints = (lati, long, line, routeNumber, heading) => {
  if (routeNumber.typeof != "undefined" && markerMap.typeof != "undefined") {
    if (checkIfMarkerExists(routeNumber, lati, long)) {
      return;
    }

    var myLatLng = { lat: Number(lati), lng: Number(long) };

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: line,
      routeNumber: routeNumber,
      icon: {
        url: setMarkerColor(line, heading),
        scaledSize: new google.maps.Size(50, 50), // scaled size
        rotation: 180,
      },
    });
    if (marker.typeof != "undefined") {
      markerMap.push(marker);
      markerMapSize = markerMap.length;
      disableLoader();
    }
  }
};
//setting the marker image depending on train line and heading of the train
let setMarkerColor = (line, heading) => {
  //train marker images are organized in directories by direction, setDirection() converts heading degrees to a direction (N,S,E,W, etc.)
  var direction = setDirection(heading);
  var path = "./assets/train_markers/" + direction + "/";

  if (line === "red") {
    return path + "red_line.png";
  }
  if (line === "blue") {
    return path + "blue_line.png";
  }
  if (line === "brown") {
    return path + "brown_line.png";
  }
  if (line === "green") {
    return path + "green_line.png";
  }
  if (line === "orange") {
    return path + "orange_line.png";
  }
  if (line === "pink") {
    return path + "pink_line.png";
  }
  if (line === "purple") {
    return path + "purple_line.png";
  }
  if (line === "yellow") {
    return path + "yellow_line.png";
  }
};

let setDirection = (heading) => {
  if (heading > 300 || heading <= 60) {
    return "north";
  }
  if (heading > 61 && heading < 120) {
    return "east";
  }
  if (heading <= 120 < heading <= 240) {
    return "south";
  }
  return "west";
};

let checkIfMarkerExists = (routeNumberNew, lat, long) => {
  for (var i = 0; i < markerMap.length; i++) {
    if (markerMap[i].routeNumber == routeNumberNew) {
      var latLng = { lat: Number(lat), lng: Number(long) };
      markerMap[i].setPosition(latLng);
      return true;
    }
  }
};

//hiding existing markers of a certain line color. Line colors are stored under title propery
let hideLine = (lineColor) => {
  for (var i = 0; i < markerMap.length; i++) {
    if (markerMap[i].title == lineColor && markerMap[i].visible == true) {
      console.log("removing " + lineColor);
      markerMap[i].setVisible(false);
    }
  }
};

//unhiding existing markers
let addLine = (lineColor) => {
  for (var i = 0; i < markerMap.length; i++) {
    if (markerMap[i].title == lineColor && markerMap[i].visible == false) {
      console.log("adding back " + lineColor);
      markerMap[i].setVisible(true);
    }
  }
};
