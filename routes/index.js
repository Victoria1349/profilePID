const express = require('express');
const router = express.Router(); 
const swaggerJSDoc = require('swagger-jsdoc');

router.get('/', require ('./main').get);
router.post('/test', require ('./test').post);
router.post('/create-profile', require ('./create_profile').post);
router.post('/create-question', require ('./create_question').post);
router.post('/pid-answers', require ('./pid_answers').post);
router.get('/get-profile/id:_id', require ('./get_profile').get);
router.get('/get-answers/id:_id', require ('./get_answers').get);


// API

// swagger definition 
const swaggerDefinition = require('../swagger.json'); 

// options for the swagger docs 
const options = { 
// import swaggerDefinitions 
swaggerDefinition: swaggerDefinition, 
// path to the API docs 
apis: ['./routes/*.js'], 
}; 

// initialize swagger-jsdoc 
const swaggerSpec = swaggerJSDoc(options); 

// serve swagger 
router.get('/swagger.json', function (req, res) { 
res.setHeader('Content-Type', 'application/json'); 
res.send(swaggerSpec); 
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tarun
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully created
 */

 
module.exports = router;