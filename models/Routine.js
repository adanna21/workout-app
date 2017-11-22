const db = require('../db/config');

const Routine = {};

Routine.findAll = () => {
  return db.query(`
    SELECT *
    FROM routines
  `);
}

Routine.findByUser = (username) => {
  return db.query(`
    SELECT *
    FROM routines WHERE username = $1
  `,[username]);
}

Routine.create = (routine) => {
  return db.one(`
    INSERT INTO routines
    (name, type, bodyPart, user_id, exercises1, exercises2, exercises3, exercises4)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `, [
    routine.name,
    routine.type,
    routine.bodyPart,
    routine.user_id,
    routine.exercises1,
    routine.exercises2,
    routine.exercises3,
    routine.exercises4
  ]);
}

Routine.update = (newName, name) => {
  return db.one(`
    UPDATE routine SET
    name = $1
    WHERE name = $2
  `, [newName, name])
}


module.exports = Routine;
