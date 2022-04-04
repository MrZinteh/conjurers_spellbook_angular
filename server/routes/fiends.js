const db = require('../../db');

exports.fiendsGet = async (req, res, next) => {
    db.query('SELECT * FROM fiends', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.lesserDemonsGet = async (req, res, next) => {
    db.query("SELECT * from fiends WHERE type = 'Demon' AND cr <= 1", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.greaterDemonsGet = async (req, res, next) => {
    db.query("SELECT * from fiends WHERE type = 'Demon' AND cr <= 5 AND cr > 1", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.devilsGet = async (req, res, next) => {
    db.query("SELECT * from fiends WHERE type = 'Devil'", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}