var express = require('express');
var router = express.Router();

/* GET questionnaire. */
router.get('/', function(req, res) {

  // let weeksString = 'Over the last 2 weeks, ';

  let questionnaire = [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    `Moving or speaking so slowly that other people could have noticed. Or the opposite —
    being so fidgety or restless that you have been moving around a lot more than usual`,
    'Thoughts that you would be better of dead, or of hurting yourself',
  ]

  res.send(questionnaire);
});

// save question answers
router.post('/', function(req, res) {
  let userID = req.body.userID

  let answers = req.body.answers

  console.log('userID: ', userID)
  console.log('answers: ', answers)

  //store in database
  //for now just echo responses
  res.send({userID: userID, answers: answers, test: 'test'});

})


module.exports = router;
