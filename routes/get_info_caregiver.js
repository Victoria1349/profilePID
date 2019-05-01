const Caregiver = require('../models/caregiver');

exports.get = async function (req, res) {
    try {
        let caregiver = await Caregiver.find(
            { "_id": req.params._id },
            { login : 1 }
        );

        res.render('get_info_caregiver', {
            caregiver: caregiver
        });

    } catch (err) {
        console.log(err);
    }

    res.status(200).send('Профиль получен');
}