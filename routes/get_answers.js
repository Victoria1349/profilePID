const Profile = require('../models/profile');
const Question = require('../models/question');

exports.post = async function (req, res) {
    try {
        let cnt = Profile.length;                            // size?

        for (let i = 0; i < cnt; i++) {
            // найти вопрос по id & вывести ответ
            let newQuestion = await Question.findOne(
                { "_id": i },
                { text: 1 }
            );
            
            let newAnswer = await Question.findOne(
                { "_id": i },
                { answer: 1 }
            );

            req.body.question = newQuestion;                // в разные формы?
            req.body.answer = newAnswer;
        }
     
    } catch (err) {
        console.log(err);
    }
}
