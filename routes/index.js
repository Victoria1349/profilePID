const express = require('express');
const router = express.Router();


router.get('/', require ('./main').get);

module.exports = router;
