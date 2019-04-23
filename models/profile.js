const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    }
});

profileSchema.virtual('profileId').get(function () {
    return this._id;
});

let Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;