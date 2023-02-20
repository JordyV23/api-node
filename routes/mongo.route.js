const { Router } = require('express');
const {getMongo, postMongo} = require('../controllers/userMongo.Controller')
const router = Router();

router.get('/mongo', getMongo);

router.post('/mongo', postMongo);

module.exports = router;