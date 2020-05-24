let trainData;
let firstInterval = true;

function parseData(trainData){
  console.log(trainData)
    trainData = trainData.ctatt.route[0].train;

      trainData.forEach(function(item){
        plotPoints(item.lat, item.lon, item.lineColor, item.rn);
      });
}