// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies
const axios = require('axios');
const qs = require('query-string');

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier


// Home page - DON'T CHANGE
app.get('/', function (req, res) {
  res.render('pages/NYTimes_home', {
    my_title: "NYTimes search",
    items: '',
    error: false,
    message: ''
  });
});

//to request data from API for given search criteria
//TODO: You need to edit the code for this route to search for movie reviews and return them to the front-end
app.post('/get_feed', function (req, res) {
  var title = req.body.title; //TODO: Remove null and fetch the param (e.g, req.body.param_name); Check the NYTimes_home.ejs file or console.log("request parameters: ", req) to determine the parameter names
  var api_key = 'o83xvruVoMXXVb03gX0xZT4oNDrAZpZk';

  if (title) {
    axios({
      url: `http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${api_key}`,
      method: 'GET',
      dataType: 'json',
    })
      .then(items => {
        res.render('pages/NYTimes_home', {
          my_title: "NYTimes Movie Reviews",
          items: items.data.results,
          error: false,
          message: ''
        })
      })
      .catch(error => {
        res.render('pages/NYTimes_home', {
          my_title: "NYTimes Movie Reviews",
          items: '',
          error: true,
          message: 'Error with NYT API.'
        })
      });
  }

  else {
    res.render('pages/NYTimes_home', {
      my_title: "NYTimes Movie Reviews",
      items: '',
      error: true,
      message: 'Invalid search term'
    })
  }
});

app.listen(3000);
console.log('3000 is the magic port');
