# CTA Transit Tracker

CTA train tracker uses the Chicago Transit Authority API in conjunction with Google Maps API V3 in order to map realtime GPS data to a visual overview of Chicago. Every 5000ms requests for each train route are made to the CTA API, then the returned JSON data is stored in an array of objects which is then mapped used the Google Maps API. Key features include: color coded lines, train filtering based on train line colors, and heading detection (the markers face either north, south, east or west depending on GPS heading data).

## Getting Started

To view this project, please visit www.placeholderlink.com. Alternativley, this project can also be run locally on your machine by cloning this repository and opening index.html.

## Built With

* [Chicago Transit Authority API](https://www.transitchicago.com/developers/traintracker/) - Train Tracker REST API
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) - Maps Javascript API
* [Heroku](https://www.heroku.com) - CORS Proxy built in Node.js
* [Materialize](https://materializecss.com) - Styling

## Authors

* **Patrick Piwowarczyk** - [ppiwo](https://github.com/ppiwo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
