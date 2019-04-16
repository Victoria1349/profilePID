const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

employerSchema.virtual('employerId').get(function () {
    return this._id;
});

let Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;