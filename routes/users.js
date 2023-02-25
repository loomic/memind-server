var express = require('express');
var router = express.Router();
const db = require('../app').db;
import { addDoc, collection, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 


router.post('/createUser', function(req, res) {
  
});

module.exports = router;
