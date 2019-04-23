const Question = require('../models/question');

exports.post = function (req, res) {
    let newQuestion = new Question();
    newQuestion.profile_id = req.body.profile_id;
    newQuestion.text = req.body.text;
    newQuestion.pict = '1';

    newQuestion.save(function (err) {
        if (err) {
            res.status(403).send(err);
            throw err;
        }

        res.status(200).send('Вопрос успешно создан');
    });
}