const Profile = require('../models/profile');

exports.post = function (req, res) {
    let newProfile = new Profile();
    newProfile.name = req.body.name;

    newProfile.save(function (err) {
        if (err) {
            res.status(403).send(err);
            throw err;
        }

        res.status(200).send('Профайл успешно создан');
    });
} 