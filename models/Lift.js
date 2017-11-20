const db = require('../db/config');

const Lift = {};

Lift.findById(id){
  return db.one(`
    INSERT INTO lift
    (name, password_digest)
    VALUES
    ($1, $2)
    RETURNING *
  `, [
    user.name,
    user.password_digest
  ]);
}

module.exports = User;
