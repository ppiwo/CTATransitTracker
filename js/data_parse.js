let trainData;
let firstInterval = true;

let parseData = (trainData) => {
  trainData = trainData.ctatt.route[0].train;
  trainData.forEach((item) =>
    plotPoints(item.lat, item.lon, item.lineColor, item.rn, item.heading)
  );
};
