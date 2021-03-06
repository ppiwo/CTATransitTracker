let route = [
  "red",
  "blue",
  "brown",
  "green",
  "orange",
  "pink",
  "purple",
  "yellow",
];
let requestUrl = "https://corsproxy22.herokuapp.com/"; //Using CORS proxy written in Node to prevent CORS errors

const getData = (routes) => {
  let trainmappings = [];

  const getRes = async (route) => {
    await fetch(requestUrl + route)
      .then((res) => res.json())
      .then((out) => {
        for (var i = 0; i < out.ctatt.route[0].train.length; i++) {
          //add route color prop to each train
          if (out.ctatt.route[0].train[i] != null) {
            out.ctatt.route[0].train[i].lineColor = route;
          }
        }
        trainmappings.push(out);
        parseData(trainmappings.pop());
      })
      .catch((err) => {
        console.log(
          "Error: fetching data from CTA API - no response for " +
            route +
            " line. There may not be any trains scheduled."
        );
      });
  };

  routes.map((i) => {
    getRes(i);
  });
};
const interval = setInterval(() => {
  getData(route);
}, 8000);


//adding or removing train lines, toggled by levers in the settings
function addRemoveTrainLines(lineColor) {
  var index = route.indexOf(lineColor);

  if (index !== -1) {
    route.splice(index, 1);
    //make call to hide existing markers
    hideLine(lineColor);
  } else {
    route.push(lineColor);
    addLine(lineColor);
  }
}
