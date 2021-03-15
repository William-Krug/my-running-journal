const express = require('express');
const {} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/allGenders', (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### user.router -> GET /api/registration/allGenders ###');

  const sqlQuery = `SELECT * FROM "genders";`;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/registration/allGenders');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/registration/allGenders:', error);
      res.sendStatus(500);
    });
});

router.get('/allStates', (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### registration.router -> GET /api/registration/allStates ###');

  const sqlQuery = `SELECT * FROM "states";`;

  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/registration/allStates');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in GET /api/registration/allStates:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
