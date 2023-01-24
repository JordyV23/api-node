//Router del paquete 
const { Router } = require('express');
const { getMethod,postMethod,deleteMethod} = require('../controllers/usersController');
const router = Router();

router.get('/', getMethod);

//post verb
router.post('/', postMethod);

//delete verb
router.delete('/', deleteMethod);

module.exports = router;