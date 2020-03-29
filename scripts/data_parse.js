let trainData;

function parseData(trainData){
    trainData = trainData.ctatt.route[0].train;

    trainData.forEach(function(item){
        plotPoints(item.lat, item.lon, item.lineColor);
      });
}