const { Router } = require('express');
const {getMongo, postMongo} = require('../controllers/userMongoController')
const router = Router();

router.get('/mongo', getMongo);

router.post('/mongo', postMongo);

module.exports = router;