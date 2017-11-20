const db = require('../db/config');

const Lift = {};

Lift.findAll = () => {
  return db.query(`
    SELECT *
    FROM lift
  `);
}

Lift.findById = (id) => {
  return db.oneOrNone(`
    SELECT *
    FROM lift
    WHERE id = $1
  `, [id]);
}

module.exports = Lift;
