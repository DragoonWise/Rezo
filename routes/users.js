const express = require('express');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin');
const authAdminOrSelf = require('../middleware/authAdminOrSelf');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

const db = require('../models');
const Users = require('../models/Users')(db.sequelize, db.Sequelize.DataTypes);

// Create a new user
// router.post('/users', auth, users.create);
router.post('/', authAdmin, function (req, res) {
    let password = bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(10));
    // const user = await Users.create({
    //     Login: req.params.Login,
    //     Password : password,
    //     IsAdmin: false
    //   });
    res.sendStatus(200);
});

// Retrieve all user
router.get('/', authAdmin, async (req, res) => {
    let users = await Users.findAll({
        paranoid: false,
        attributes: ['id', 'Login', 'IsAdmin', 'createdAt', 'updatedAt', 'deletedAt']
    })
    res.send(users);

});

// Retrieve a single user with login
router.get('/login/:login', authAdmin, async (req, res) => {
    let user = await Users.findOne({ where: { login: req.params.login }, attributes: ['id', 'Login', 'IsAdmin', 'createdAt', 'updatedAt', 'deletedAt'] })
    if (!user) {
        return res.sendStatus(404);
    }
    res.send(user);

});

// Retrieve a single user with userId
router.get('/:userId', authAdmin, async (req, res) => {
    let user = await Users.findByPk(req.params.userId, { attributes: ['id', 'Login', 'IsAdmin', 'createdAt', 'updatedAt', 'deletedAt'] })
    if (!user) {
        return res.sendStatus(404);
    }
    res.send(user);
});

// Update a user with userId
//  router.put('/:userId', auth, users.update);
router.put('/:userId', authAdminOrSelf, async (req, res) => {
    if (req.body.Password)
        req.body.Password = bcrypt.hashSync(req.body.Password, bcrypt.genSaltSync(10));
    let user = await Users.findByPk(req.body.id);
    user._options.attributes.forEach(fieldName => {
        if (fieldName !== 'IsAdmin' && fieldName !== 'id' && eval('req.body.' + fieldName) !== undefined) {
            user.setDataValue(fieldName, eval('req.body.' + fieldName));
        }
    });
    user.save();
    res.sendStatus(200)
    // res.send(user)
});

// Delete a user with userId
// router.delete('/:userId', auth, users.delete);
router.delete('/:userId', authAdminOrSelf, async (req, res) => {
    await Users.destroy({
        where: {
            id: req.params.userId
        }
    })
    // if (err)
    //     res.sendStatus(404);
    res.sendStatus(200);
});

// Restore a user with userId
router.patch('/:userId', authAdmin, async (req, res) => {
    await Users.restore({
        where: {
            id: req.params.userId
        }
    })
    res.sendStatus(200);
})
module.exports = router;