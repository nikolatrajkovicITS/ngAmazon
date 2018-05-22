const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config');

router.post('/sigunp', (req, res, next) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.picture = req.gravatar();
    user.isSeller = req.body.isSeller;

    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.json({
                success: false,
                message: 'Account with that email is already exist'
            });
        } else {
            user.save();

            var token = jwt.sign({
                user: user
            }, config.secret, {
                expiresIn: '7d'
            });

            res.json({
                success: true,
                message: 'Enjoy your token',
                token: token
            });
        }
    })
});

module.exports = router;