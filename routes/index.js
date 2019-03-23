const express = require('express');
const router = express.Router();


router.get('/', require ('./main').get);
router.post('/test', require ('./test').post);

module.exports = router;
