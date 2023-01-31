//Router del paquete 
const { Router } = require('express');
const { getMethod,postMethod,deleteMethod} = require('../controllers/usersController');
const router = Router();

router.get('/users', getMethod);

//post verb
router.post('/users', postMethod);

//delete verb
router.delete('/users', deleteMethod);

module.exports = router;