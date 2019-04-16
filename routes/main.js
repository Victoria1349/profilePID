const Question = require('../models/question');

exports.get = async function (req, res) {
    let questions = await Question.find({});

    res.render('main', {
        fsfaf: questions
    });
}