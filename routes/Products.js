//Router del paquete 
const { Router } = require('express');
const {getProducts} = require('../controllers/productsController')
const router = Router();

router.get('/products', getProducts);

module.exports = router;