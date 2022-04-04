const db = require('../../db');

exports.elementalsGet = async (req, res, next) => {
    db.query('SELECT * FROM elementals', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}

exports.minorElementalsGet = async (req, res, next) => {
    db.query('SELECT * FROM elementals WHERE cr <= 2', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    })
}