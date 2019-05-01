const Pid = require('../../models/pid');
const Caregiver = require('../../models/caregiver');
const Employer = require('../../models/employer');

exports.post = async function (req, res) {
    try {
        let pid = await Pid.findOne(
            { "_id": req.params._id }
        );
 
        let caregivers = await Caregiver.find(
            { "_id": pid.id_caregiver },
            { login : 1 }
        );

        let employers = await Employer.find(
            { "_id": pid.id_employer },
            { login : 1 }
        );

    } catch (err) {
        console.log(err);
    }

    res.status(200).send('Профиль получен');
}