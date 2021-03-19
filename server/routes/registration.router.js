/* Import Libraries */
const express = require('express');
const {} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route for /api/registration/allGenders
 *
 * Returns the list of all gender options from the "genders" table
 */
router.get('/allGenders', (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log('### user.router -> GET /api/registration/allGenders ###');

  // SQL query to be sent in pool request
  const sqlQuery = `SELECT * FROM "genders";`;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/registration/allGenders');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in GET /api/registration/allGenders:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/registration/allStates
 *
 * Returns the list of all state options from the "states" table
 */
router.get('/allStates', (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log('### registration.router -> GET /api/registration/allStates ###');

  // SQL query to be sent in pool request
  const sqlQuery = `SELECT * FROM "states";`;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/registration/allStates');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in GET /api/registration/allStates:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/registration/userProfile
 *
 * Returns all user profile details as strings from
 * the "users" table
 */
router.get('/userProfile', (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### registration.router -> GET /api/registration/userProfile ###'
    ();

  // SQL query to be sent in pool request
  const sqlQuery = `
  SELECT
    "users".first_name,
    "users".last_name,
    "users".birthdate,
    "genders".gender,
    "users".city,
    "states".state,
    "users".country,
    "users".username
  FROM "users"
  JOIN "genders" ON "genders".id = "users".gender
  JOIN "states" ON "states".id = "users".state
  WHERE "users".id = $1;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/registration/userProfile');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in GET /api/registration/userProfile:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
