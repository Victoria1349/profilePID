const Question = require('../../models/question');

exports.post = async function (req, res) {
    try {
        // получить id текущего вопроса
        let questionID = req.body.question_id;
        let answer = req.body.answer;

        // записать данные в поле answer
        await Question.findOneAndUpdate(
            { "_id": questionID },
            {  
                "$set": {
                    "answer": answer
                }
            }
        );
     
    } catch (err) {
        console.log(err);
    }
}