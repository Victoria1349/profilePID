const mongoose = require('mongoose');

const pidSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

pidSchema.virtual('pidId').get(function () {
    return this._id;
});

let Pid = mongoose.model('PID', pidSchema);

module.exports = Pid;