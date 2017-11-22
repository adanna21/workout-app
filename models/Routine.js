const db = require('../db/config');

const Routine = {};

Routine.findByUser = (username) => {
  return db.query(`
    SELECT *
<<<<<<< HEAD
<<<<<<< HEAD
    FROM routines WHERE username = $1
  `,[username]);
=======
    FROM routines WHERE id = ?
  `);
>>>>>>> made find all into find by id in routine.js
=======
    FROM routines WHERE username = $1
  `,[username]);
>>>>>>> deleted image, fixed controller and routine to be get by user
}

Routine.create = (routine) => {
  return db.one(`
    INSERT INTO routines
    (name, category1, category2, user, exercises)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *
  `, [
    routine.name,
    routine.category1,
    routine.category2,
    routine.user,
    routine.exercises,
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
