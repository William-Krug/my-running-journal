/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route for /api/activities/user
 *
 * Returns all of the user's runs from the "activities" table
 */
router.get('/user', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### activities.router -> POST /api/activities/user');

  // SQL query
  const sqlQuery = `
  SELECT *
  FROM "activities"
  WHERE "activities".user_id = $1;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/activities/user');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/fastest
 *
 * Returns the user's fastest run from the "activities" table
 */
router.get('/user/fastest', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### activities.router -> POST /api/activities/user/fastest');

  // SQL query
  const sqlQuery = `
  SELECT *, MAX("mph")
  FROM "activities"
  WHERE "activities".user_id = $1
  GROUP BY "activities".id
  ORDER BY "mph", "date" ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/activities/user/fastest');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities/user/fastest:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/longest
 *
 * Returns the user's longest run from the "activities" table
 */
router.get('/user/longest', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### activities.router -> POST /api/activities/user/longest');

  // SQL query
  const sqlQuery = `
  SELECT *, MAX("distance")
  FROM "activities"
  WHERE "activities".user_id = $1
  GROUP BY "activities".id
  ORDER BY "distance", "date" ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/activities/user/longest');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities/user/longest:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/mostRecent
 *
 * Returns the user's longest run from the "activities" table
 */
router.get('/user/mostRecent', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log('### activities.router -> POST /api/activities/user/mostRecent');

  // SQL query
  const sqlQuery = `
  SELECT *, MAX("date")
  FROM "activities"
  WHERE "activities".user_id = $1
  GROUP BY "activities".id
  ORDER BY "date" ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/activities/user/mostRecent');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities/user/mostRecent:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/dailyAverages
 *
 * Returns the user's longest run from the "activities" table
 */
router.get('/user/dailyAverages', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log(
    '### activities.router -> POST /api/activities/user/dailyAverages'
  );

  // SQL query
  const sqlQuery = `
  SELECT
    AVG("distance") as "averageDistance",
    AVG("time") as "averageTime",
    AVG("mph") as "averageSpeed",
    AVG("pace") as "averagePace"
  FROM "activities"
  WHERE "activities".user_id = $1;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      console.log('SUCCESS in GET /api/activities/user/dailyAverages');
      console.log('dailyAverages:', dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/activities/user/dailyAverages:', error);
      res.sendStatus(500);
    });
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
router.post('/', rejectUnauthenticated, (req, res) => {
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

  // SQL query
  const sqlQuery = `
  INSERT INTO "activities"
    ("user_id", "date", "route", "distance", "time", "mph", "pace", "notes")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
  `;

  // Ping DB
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
