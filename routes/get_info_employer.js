const Employer = require('../models/employer');

exports.get = async function (req, res) {
    try {
        let employer = await Employer.find(
            { "_id": req.params._id },
            { login : 1 }
        );

        res.render('get_info_employer', {
            employer: employer
        });

    } catch (err) {
        console.log(err);
    }

    res.status(200).send('Профиль получен');
}