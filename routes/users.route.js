//Router del paquete 
const { Router } = require('express');
const { getMethod,postMethod,deleteMethod} = require('../controllers/users.Controller');
const router = Router();

router.get('/users', getMethod);
//!Ruta con parametro
//router.get('/users/:id', getMethod);

//post verb
router.post('/users', postMethod);

//delete verb
router.delete('/users', deleteMethod);

module.exports = router;