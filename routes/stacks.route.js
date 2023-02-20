const { Router } = require('express');
const {getStacks,postStacks,deleteStacks,updateStacks} = require('../controllers/stacks.Controller')
const router = Router();

router.get('/stacks', getStacks);
router.post('/stacks', postStacks);
router.delete('/stacks', deleteStacks);
router.put('/stacks', updateStacks);

module.exports = router;