const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const db = require('../models');
const Users = require('../models/Users')(db.sequelize, db.Sequelize.DataTypes);

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
    const data = await Users.findByPk(req.user.id);
    if (data === null) return res.sendStatus(403);
    const user = {
        id: data.id,
        Login: data.Login,
        IsAdmin: data.IsAdmin,
    };
    res.json(user);
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
            const user = await Users.findOne({ where: { login: userlogin } });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }
            isMatch = bcrypt.compareSync(password, user.Password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }
            const payload = {
                user: {
                    id: user.id,
                    Login: user.Login,
                    IsAdmin: user.IsAdmin,
                },
            };

            jwt.sign(
                payload,
                config.jwt.secret,
                {
                    expiresIn: 360000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                },
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    },
);

module.exports = router;