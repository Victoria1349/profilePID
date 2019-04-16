const mongoose = require('mongoose');

const caregiverSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    access_level: {
        type: Number,
        required: true,
        default: 2
    }
});

caregiverSchema.virtual('caregiverId').get(function () {
    return this._id;
});

let Caregiver = mongoose.model('Caregiver', caregiverSchema);

module.exports = Caregiver;