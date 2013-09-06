var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var College = mongoose.model('College');

var _ = require('underscore');

module.exports.signup = function(req, res) {
    var acct = {};
    acct = _.extend(acct, req.body);
    var new_acct = new Account(acct);
    new_acct.save(function(err, account) {
        if (err) {
            res.send({
                'status': 'error',
                'message': 'Error creating account',
                'info': err
            });
        } else {
            res.send({
                'status': 'success',
                'message': 'Account created',
                'info': account
            });
        }
    });
};

module.exports.addcollege = function(req, res) {
    console.log(req.body);
    var college = {};
    college = _.extend(college, req.body);
    var new_college = new College(college);
    new_college.save(function(err, college) {
        if (err) {
            res.send({
                'status': 'error',
                'message': 'Error creating college',
                'info': err
            });
        } else {
            res.send({
                'status': 'success',
                'message': 'College created',
                'info': college
            });
        }
    });
};
