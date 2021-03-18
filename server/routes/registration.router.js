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
      // console.log('SUCCESS in GET /api/registration/allGenders');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      // console.log('ERROR in GET /api/registration/allGenders:', error);
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
  console.log('### registration.router -> GET /api/registration/allStates ###');

  // SQL query to be sent in pool request
  const sqlQuery = `SELECT * FROM "states";`;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/registration/allStates');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      // console.log('ERROR in GET /api/registration/allStates:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
