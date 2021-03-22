/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route for /api/userRunDetails/getSingleRun/:id
 *
 * Returns the percentage of community members who identify
 * as each gender
 */
router.get('/getSingleRun/:id', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.dashboard.router -> GET /api/userRunDetails/getSingleRun/:id ###'
  // );

  // Query arguments
  const queryArguments = [req.params.id, req.user.id];

  // SQL query
  const sqlQuery = `
  SELECT *
  FROM "activities"
  WHERE "activities".id = $1 AND "activities".user_id = $2;
  `;

  // Ping DB
  pool
    .query(sqlQuery, queryArguments)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/userRunDetails/getSingleRun/:id');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in GET /api/userRunDetails/getSingleRun/:id:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
