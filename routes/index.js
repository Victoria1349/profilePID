const express = require('express');
const router = express.Router(); 


router.get('/', require ('./main').get);
router.post('/test', require ('./test').post);
router.post('/create-profile', require ('./create_profile').post);
router.post('/create-question', require ('./create_question').post);
router.post('/pid-answers', require ('./pid_answers').post);

module.exports = router;