const mongoose = require('mongoose');

const pidSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    id_caregiver: {
        type: String,
        required: true
    },
    id_employer: {
        type: String,
        required: true
    }
});

pidSchema.virtual('pidId').get(function () {
    return this._id;
});

let Pid = mongoose.model('PID', pidSchema);

module.exports = Pid;