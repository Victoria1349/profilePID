const Profile = require('../models/profile');
const Question = require('../models/question');

exports.post = async function (req, res) {
    try {
        let cnt = Profile.length;                            // size?
        
        for (let i = 0; i < cnt; i++) {
            // найти вопрос по id & вывести
            let newQuestion = await Question.findOne(
                { "_id": i },
                { text: 1 }
            );

            let newPict = await Question.findOne(
                { "_id": i },
                { pict: 1 }
            );

            req.body.question = newQuestion;                // в разные формы?
            req.body.pict = newPict;
        }

     
    } catch (err) {
        console.log(err);
    }
}
