const Caregiver = require('../models/caregiver');
const Pid = require('../models/pid');

exports.post = function (req, res) {
    var newCaregiver = new Caregiver();
    newCaregiver.email = 'req.body.email';
    newCaregiver.password = 'createHash(req.body.password)';

    var newPid= new Pid();
    newPid.email = 'req.body.email';
    newPid.password = 'createHash(req.body.password)';

    newCaregiver.save(function (err) {
        if (err) {
            console.log('Error in Saving coach: ' + err);
            throw err;
        }
        newPid.save(function (err) {
            if (err) {
                console.log('Error in Saving coach: ' + err);
                throw err;
            }
            res.status(200).send('dada');
        });
  
    });
}