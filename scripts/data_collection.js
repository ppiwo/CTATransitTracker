let route = ["red", "blue", "brown", "green", "orange", "pink", "purple", "yellow"];
let requestUrl = "https://corsproxy22.herokuapp.com/"; //Using CORS proxy written in Node to prevent CORS errors
let trainData = []; //Storing all JSON data from API requests

function async gatherRequests(){
  route.forEach(function(trainLine){
    getRequest(trainLine);
  });
}


    //making api call for each route, appending route color and adding to trainData array
     function getRequest async (route) {
              await fetch(requestUrl + route)
              .then(res => res.json())
              .then((out) => {
                for (var i = 0; i < out.ctatt.route[0].train.length; i++){ //add route color prop to each train
                  out.ctatt.route[0].train[i].lineColor = route;
                }
                trainData.push(out);
                console.log(trainData);
                //plotPoints();
              })
              .catch(err => { throw err });
          };



