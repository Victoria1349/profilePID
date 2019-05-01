const Question = require('../models/question');
var express = require('express');
const app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

// app.use(bodyParser.json());


// создание хранилища для сессий
// var sessionHandler = require('./session_handler');
// var store = sessionHandler.createStore;

// // регистрируем промежуточный обработчик, чтобы парсить куки
// app.use(cookieParser);
// // создание сессии
// app.use(session({
//     store: store,
//     resave: false,
//     saveUninitialized: true,
//     secret: 'supersecret'
// }));

exports.get = async function (req, res) {
    let questions = await Question.find({});

    res.render('main', {
        fsfaf: questions
    });
}