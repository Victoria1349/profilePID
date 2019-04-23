const Profile = require('../models/profile');
const Question = require('../models/question');

exports.get = async function (req, res) {
    try {
        let profile = await Profile.findOne(
            { "_id": req.params._id }
        );

        let questions = await Question.find(
            { "profile_id": profile._id },
            { text: 1, pict: 1, answer: 1 }         ///////
        );

        res.render('get_answers', {
            profile: profile,
            questions: questions
        });

    } catch (err) {
        console.log(err);
    }
}