/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route for /api/communityDashboard/genderBreakdown
 *
 * Returns the percentage of community members who identify
 * as each gender
 */
router.get('/genderBreakdown', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.dashboard.router -> GET /api/communityDashboard/genderBreakdown ###'
  // );

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  }

  const sqlQuery = `
  SELECT "genders".gender as "label", count("users".gender) * 100.0 / sum(count("users".gender)) over() as "data"
  FROM "users"
  JOIN "genders" ON "genders".id = "users".gender
  GROUP BY "genders".gender
  ORDER BY "genders".gender ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityDashboard/genderBreakdown');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityDashboard/genderBreakdown:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityDashboard/stateBreakdown
 *
 * Returns the percentage of community members who identify
 * as each gender
 */
router.get('/stateBreakdown', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.dashboard.router -> GET /api/communityDashboard/stateBreakdown ###'
  // );

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  }

  const sqlQuery = `
  SELECT "states".state as "label", count("users".state) * 100.0 / sum(count("users".state)) over() as "data"
  FROM "users"
  JOIN "states" ON "states".id = "users".state
  GROUP BY "states".state
  ORDER BY "states".state ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityDashboard/stateBreakdown');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityDashboard/stateBreakdown:',
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
