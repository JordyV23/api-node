//Router del paquete 
const { Router } = require('express');
const {getProducts,getById,putUser} = require('../controllers/products.Controller')
const router = Router();

router.get('/products', getProducts);

router.get('/products/:id', getById);

router.put('/products/:id',putUser);

module.exports = router;