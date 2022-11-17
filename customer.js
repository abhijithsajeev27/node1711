const db = require('../db-handler')

function getAll(callback) {
    var sql = "SELECT * FROM customers"
    db.executeQuery(sql, [], callback)
}

function getOne(id, callback) {
    var sql = "SELECT * FROM customers where id=?";
    db.executeQuery(sql, [id], callback)
}

function createOne(data, callback) {
    var sql = "INSERT INTO customers (name, email, country, age) VALUES (?, ?, ?, ?)";

    var values = [
        data.name,
        data.email,
        data.country,
        data.age
    ];
    db.executeQuery(sql, values, callback)
}

module.exports.getAll = getAll
module.exports.getOne = getOne
module.exports.createOne = createOne