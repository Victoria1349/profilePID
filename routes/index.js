const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');

router.get('/', require ('./main').get);
router.post('/test', require ('./test').post);
router.post('/create-profile', require ('./create_profile').post);
router.post('/create-question', require ('./create_question').post);
router.post('/pid-answers', require ('./api/pid_answers').post);
router.get('/get-profile/id:_id', require ('./get_profile').get);
router.get('/get-answers/id:_id', require ('./get_answers').get);
router.post('/get-info-pid/id:_id', require ('./api/get_info_pid').post);


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
    * /api/v1/applications/moneygame/get/currency:
    *   post:
    *     tags:
    *       - ""
    *     summary: "Get currency for MoneyGame"
    *     description: ""
    *     produces:
    *       - application/json
    *     parameters:
    *     - name: "x-access-token"
    *       in: "header"
    *       description: "PID token"
    *       required: true
    *       type: "string"
    *     responses:
    *       200:  
    *        description: Information about currency for MoneyGame
    *        examples:
    *           application/json: { 
    *           banknotes: [{ "count": 5, "image": "test-ait.herokuapp.com/system_images/currency/euro/banknotes/5.png" },
    *           { "count": 10, "image": "test-ait.herokuapp.com/system_images/currency/euro/banknotes/10.png" }],
    *           coins: [{ "count": 0.01, "image": "test-ait.herokuapp.com/system_images/currency/euro/coins/0,01.png" }], 
    *           currency: "euro"  
    *           }
    *       401:
    *         description: Invalid data entered
    *         examples:
    *           application/json: 
    *            {  
    *              errors:
    *              [
    *               {
    *                "id": 1, "title": Required fields are not filled, "detail": "Empty token value"
    *                },{
    *                "id": 2, "code": token-Invalid, "title": Invalid data entered, "detail": "Invalid token entered, or token expired"
    *                },{
    *                "id": 2, "token": token-Invalid, "title": Invalid data entered, "detail": "The PID with the token entered has been deleted."
    *                }         
    *              ]
    *            }
    *           
    */
router.post('/api/v1/get-answers', require('./api/v1/get_answers').post);

module.exports = router;