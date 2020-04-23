const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Users = require('../models/Users');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
    // console.log(req.user);
    Users.getUserById(req.user.id, (err, data) => {
        if (err) res.sendStatus(403);
        res.json(data);
    });
    // try {
    //     const user = await Users.findById(req.user.id).select('-password');
    //     res.json(user);
    // } catch (err) {
    //     console.error(err.message);
    //     res.status(500).send('Server Error');
    // }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
    '/',
    [
        check('userlogin', 'Login is required').exists(),
        check('password', 'Password is required').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userlogin, password } = req.body;

        try {
            Users.getUserByLogin(userlogin, (err, user) => {
                if (!user) {
                    return res.status(400).json({ msg: 'Invalid Credentials' });
                }
                isMatch = bcrypt.compareSync(password, user.Password);
                if (!isMatch) {
                    return res.status(400).json({ msg: 'Invalid Credentials' });
                }
                const payload = {
                    user: {
                        id: user.Id,
                        login: user.Login,
                    },
                };

                jwt.sign(
                    payload,
                    config.secret,
                    {
                        expiresIn: 360000,
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    },
                );
            });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    },
);

module.exports = router;