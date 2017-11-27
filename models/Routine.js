const db = require('../db/config');

const Routine = {};

Routine.findAll = () => {
  return db.query(`
    SELECT *
    FROM routines
  `);
}

Routine.findById = (id) => {
  return db.one(`
    SELECT *
    FROM routines
    WHERE id = $1
  `, [id])
}

Routine.create = (routine) => {
  return db.one(`
    INSERT INTO routines
    (name, type, bodypart, user_id, exercises1, exercises2, exercises3, exercises4)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `, [
    routine.name,
    routine.type,
    routine.bodypart,
    routine.user_id,
    routine.exercises1,
    routine.exercises2,
    routine.exercises3,
    routine.exercises4
  ]);
}

Routine.update = (name, id) => {
  return db.one(`
    UPDATE routines SET
    name = $1
    WHERE id = $2
    RETURNING *
  `, [name, id])
}

Routine.destroy = (id) => {
  return db.none(`
    DELETE FROM routines
    WHERE id = $1
  `, [id])
}

module.exports = Routine;
