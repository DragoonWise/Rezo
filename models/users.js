var db = require('../db.js')

// Fixtures

var data = {
    tables: {
        users: [
            { Id: 1, Login: "testAdmin", Password: '$2a$10$ZFyIFw5liulmVV8hqdPDy.VqTNNQmZvYtM467akMVkQjBnQHku/cW', IsAdmin: 1 },
            { Id: 2, Login: "testUser", Password: '$2a$10$ZFyIFw5liulmVV8hqdPDy.VqTNNQmZvYtM467akMVkQjBnQHku/cW', IsAdmin: 0 },
        ],
    },
}

db.connect(db.MODE_TEST, function () {
    db.fixtures(data, function (err) {
        if (err) return console.log(err)
        console.log('Data has been loaded...')
    })
})

// Create

exports.create = function (login, password, isAdmin, done) {
    var values = [login, password, isAdmin]

    db.get().query('INSERT INTO Users (Login, Password, IsAdmin) VALUES(?, ?, ?)', values, function (err, result) {
        if (err) return done(err)
        done(null, result.insertId)
    })
}

// Get All

exports.getAll = function (done) {
    db.get().query('SELECT Id,Login,Password,IsAdmin FROM Users', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}

// FindByLogin

exports.getUserByLogin = function (login, done) {
    db.get().query('SELECT Id, Login, Password, IsAdmin FROM Users WHERE Login = ?', login, function (err, rows) {
        if (err) return done(err)
        if (rows.length > 0 ) return done(null, rows[0])
        done('No element');
    })
}

// FindById

exports.getUserById = function (userId, done) {
    db.get().query('SELECT Id, Login, IsAdmin FROM users WHERE id = ?', userId, function (err, rows) {
        if (err) return done(err)
        if (rows.length > 0 ) return done(null, rows[0])
        done('No element');
    })
}

// Modify

// Delete

// Reactivate

