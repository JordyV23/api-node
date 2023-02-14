const { Router } = require('express');
const {getAlimentos,postAlimentos} = require('../controllers/alimentosController')
const router = Router();

router.get('/alimentos', getAlimentos);
router.post('/alimentos', postAlimentos);

module.exports = router;