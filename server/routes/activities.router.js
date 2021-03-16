/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route for /api/activities
 *
 * Adds new run to the "activities" table
 *
 * req.body looks like:
 * {
 *  date: 2021-03-16  -- date
 *  route: Treadmill  -- string
 *  distance: 3.35  -- number (float)
 *  time: 1800  -- number (total time in seconds)
 *  mph: 6.70  -- number (float)
 *  pace: 8.96  -- number
 *  notes: Dreadmill  --string
 * }
 */
router.post('/', (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### activities.router -> POST /api/activities');
  console.log('req.body', req.body);

  // Data encapsulation
  const queryArguments = [
    req.user.id,
    req.body.date,
    req.body.route,
    req.body.distance,
    req.body.time,
    req.body.mph,
    req.body.pace,
    req.body.notes,
  ];

  const sqlQuery = `
  INSERT INTO "activities"
    ("user_id", "date", "route", "distance", "time", "mph", "pace", "notes")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
  `;

  pool
    .query(sqlQuery, queryArguments)
    .then((dbResponse) => {
      console.log('SUCCESS in POST /api/activities');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
