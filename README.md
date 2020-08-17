#  :station: CTA Transit Tracker

CTA train tracker uses the Chicago Transit Authority API in conjunction with Google Maps API V3 in order to map realtime GPS data to a visual overview of Chicago. Every 5000ms requests for each train route are made to the CTA API, then the returned JSON data is stored in an array of objects which is then mapped used the Google Maps API. Key features include: color coded lines, train filtering based on train line colors, and heading detection (the markers face either north, south, east or west depending on GPS heading data).

## Technologies Used

* Vanilla Javascript
* Node.js (Used for CORS proxy)

## APIs

* [Chicago Transit Authority API](https://www.transitchicago.com/developers/traintracker/) - Used for retrieving train data
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Heroku](https://www.heroku.com/) - CORS Proxy built in Node.js


## Screenshots
Desktop | Mobile
--------|-------
![Desktop](https://i.imgur.com/4cx2DWZ.png?1) | ![Mobile](https://i.imgur.com/f0V40gx.png?1)


## Running This Project
* Clone this repository 
``` 
git clone https://github.com/ppiwo/CTATransitTracker.git 
```
* Create a new file in ```./config.js```
``` 
const API_KEY = "{YOUR CTA API KEY}";
```
* Open index.html in your favorite editor, on line 24 replace ```{YOUR GOOGLE MAPS API KEY HERE}``` with your Google Maps API key
* Open index.html in your favorite web browser


## License
[MIT](https://choosealicense.com/licenses/mit/)

## Feedback
Feedback is always welcomed and highly appreciated. If you notice any improvements I can make in my code please feel free to drop a comment. Thanks!
