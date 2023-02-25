var express = require('express');
var router = express.Router();
const db = require('../app').db;
import { addDoc, collection, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 

/* GET questionnaire. */
router.get('/', function(req, res) {

  // let weeksString = 'Over the last 2 weeks, ';

  let questionnaire = {
    'phq': [
      'Little interest or pleasure in doing things',
      'Feeling down, depressed, or hopeless',
      'Trouble falling or staying asleep, or sleeping too much',
      'Feeling tired or having little energy',
      'Poor appetite or overeating',
      'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
      'Trouble concentrating on things, such as reading the newspaper or watching television',
      `Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual`,
      'Thoughts that you would be better of dead, or of hurting yourself',
    ],
    'gad': [
      'Feeling nervous, anxious, or on edge',
      'Not being able to stop or control worrying',
      'Worrying too much about different things',
      'Trouble relaxing',
      'Being so restless that it is hard to sit still',
      'Becoming easily annoyed or irritable',
      'Feeling afraid as if something awful might happen'
    ]
  }

  res.send(questionnaire);
});

// save question answers
router.post('/', async function(req, res) {
  let userID = req.body.userID

  let answers = req.body.answers

  let phqScore = answers.phq9.reduce((a, b) => a + b, 0);
  let gadScore = answers.gad7.reduce((a, b) => a + b, 0);

  //store in database
  const docRef = await addDoc(collection(db, "users"), {
    userID: userID,
    phqScore: phqScore,
    gadScore: gadScore,
    datetime: new Date()
  });
  //for now just echo responses
  res.send({userID: userID, phqScore: phqScore, gadScore: gadScore});
})


module.exports = router;
