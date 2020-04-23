var db = require('../db.js')

// // Fixtures

// var data = {
//     tables: {
//         users: [
//             { Id: 1, Login: "testAdmin", Password: '$2a$10$ZFyIFw5liulmVV8hqdPDy.VqTNNQmZvYtM467akMVkQjBnQHku/cW', IsAdmin: 1 },
//             { Id: 2, Login: "testUser", Password: '$2a$10$ZFyIFw5liulmVV8hqdPDy.VqTNNQmZvYtM467akMVkQjBnQHku/cW', IsAdmin: 0 },
//         ],
//     },
// }

// db.connect(db.MODE_TEST, function () {
//     db.fixtures(data, function (err) {
//         if (err) return console.log(err)
//         console.log('Data has been loaded...')
//     })
// })

// Create

exports.create = function (gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, email, PhoneNumber, done) {
    var values = [gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, email, PhoneNumber]

    db.get().query('INSERT INTO Customers (gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, Email, PhoneNumber) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values, function (err, result) {
        if (err) return done(err)
        done(null, result.insertId)
    })
}

// FindAll

exports.findAll = function (done) {
    db.get().query('SELECT Id,gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, Email, PhoneNumber FROM Customers', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}

// FindOneByEmail

exports.findOneByEmail = function (email, done) {
    db.get().query('SELECT Id, gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, Email, PhoneNumber FROM Customers WHERE Email = ?', email, function (err, rows) {
        if (err) return done(err)
        if (rows.length > 0 ) return done(null, rows[0])
        done('No element');
    })
}

// FindById

exports.findOne = function (Id, done) {
    db.get().query('SELECT Id, gender, lastname, firstname, address1, address2, address3, address4, postcode, city, county, country, Email, PhoneNumber FROM Customers WHERE id = ?', Id, function (err, rows) {
        if (err) return done(err)
        if (rows.length > 0 ) return done(null, rows[0])
        done('No element');
    })
}

// Modify

// Delete

// Reactivate

