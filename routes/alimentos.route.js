const { Router } = require('express');
const {getAlimentos,postAlimentos,deleteAlimentos,putAlimentos} = require('../controllers/alimentos.Controller');
const router = Router();

router.get('/alimentos', getAlimentos);
router.post('/alimentos', postAlimentos);
router.delete('/alimentos', deleteAlimentos);
router.put('/alimentos', putAlimentos);

module.exports = router;