const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    profile_id: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    pict: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    }
});

questionSchema.virtual('questionId').get(function () {
    return this._id;
});

let Question = mongoose.model('Question', questionSchema);

module.exports = Question;