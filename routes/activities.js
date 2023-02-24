var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

function getActivities() {
  //just returning example list for now 
  return [
    'Walk',
    'Meditation/Mindfulness',
    'CBT Exercises'
  ]
}

function getUserModel() {
  //example user model for now
  return {
    'anxietyScore': 0,
    'depressionScore': 0,
    'activitiesHistory': [
      //example activity object
      {'activity': 'Walk', 'datetime': '2023-02-23 00:00:00', 'mood': 50},
    ]
  }
}

/* Get activities, recommended based on personal model */
router.get('/', function(req, res) {

  let userID = req.query.userID

  //get personal model info from database

  //get context information
  //weather
  let lat = req.query.latitude
  let lon = req.query.longitude

  let weather = fetch(`https://api.openweathermap.or/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=96e13a02452b273b788ced0c95138859`)

  res.send();
});



module.exports = router;
