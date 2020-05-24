let route = ["red", "blue", "brown", "green", "orange", "pink", "purple", "yellow"];
let requestUrl = "https://corsproxy22.herokuapp.com/"; //Using CORS proxy written in Node to prevent CORS errors
// let trainData = [""]; //Storing all JSON data from API requests

      const getData = (routes)=>{

        let trainmappings = [];

        const getRes = async (route) =>{
                  await fetch(requestUrl + route)
                  .then(res => res.json())
                  .then((out) => {
                    for (var i = 0; i < out.ctatt.route[0].train.length; i++){ //add route color prop to each train
                      out.ctatt.route[0].train[i].lineColor = route;
                    }
                    trainmappings.push(out);
                    parseData(trainmappings.pop());
                  })
                  .catch(err => { console.log('error') });
              };
      function successCallback(){
        console.log('success')
      }

      function failCallback(){
        console.log('fail')
      }

        routes.map(i => {
          getRes(i, successCallback, failCallback)
        })


      }
    const interval = setInterval(function() {
      // getData(route);
      }, 5000);
      interval();
      console.log(trainmappings);