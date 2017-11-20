const db = require('../db/config');

const User = {};

User.create(user){
  return db.one(`
    INSERT INTO users
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
