const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

profileSchema.virtual('profileId').get(function () {
    return this._id;
});

let Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;