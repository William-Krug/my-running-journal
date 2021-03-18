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
  // console.log('### activities.router -> POST /api/activities/user');

  // SQL query
  const sqlQuery = `
  SELECT *
  FROM "activities"
  WHERE "activities".user_id = $1
  ORDER BY "activities".date;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // console.log('SUCCESS in GET /api/activities/user');
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
  // console.log('### activities.router -> POST /api/activities/user/fastest');

  // SQL query
  const sqlQuery = `
  SELECT *, MAX("speed")
  FROM "activities"
  WHERE "activities".user_id = $1
  GROUP BY "activities".id
  ORDER BY "speed", "date" ASC;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // console.log('SUCCESS in GET /api/activities/user/fastest');
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
  // console.log('### activities.router -> POST /api/activities/user/longest');

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
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/longest');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
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
  // console.log('### activities.router -> POST /api/activities/user/mostRecent');

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
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/mostRecent');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in POST /api/activities/user/mostRecent:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/dailyAverages
 *
 * Returns the user's calculated daily averages for
 * distance, time, speed, and pace from the
 * "activities" table
 */
router.get('/user/dailyAverages', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### activities.router -> POST /api/activities/user/dailyAverages'
    ();

  // SQL query
  const sqlQuery = `
  SELECT
    AVG("distance") as "averageDistance",
    AVG("time") as "averageTime",
    AVG("speed") as "averageSpeed",
    AVG("pace") as "averagePace"
  FROM "activities"
  WHERE "activities".user_id = $1;
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/dailyAverages');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in POST /api/activities/user/dailyAverages:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/weeklyDistanceAverage
 *
 * Returns the user's calculated weekly distance from the
 * "activities" table
 */
router.get('/user/weeklyDistanceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### activities.router -> POST /api/activities/user/weeklyDistanceAverage'
    ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageDistance")
  FROM
	  (SELECT SUM(DISTANCE) as "averageDistance"
    FROM
	  (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".distance
	  FROM "activities"
	  WHERE "activities".user_id = $1
	  GROUP BY "activities".date, "activities".user_id, "activities".distance) as "weeklyDistance"
  GROUP BY "week") as "weeklyAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/weeklyDistanceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/weeklyDistanceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/weeklyTimeAverage
 *
 * Returns the user's calculated weekly time from the
 * "activities" table
 */
router.get('/user/weeklyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### activities.router -> POST /api/activities/user/weeklyTimeAverage'
    ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageTime")
  FROM
	  (SELECT SUM(TIME) as "averageTime"
    FROM
	  (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".time
	  FROM "activities"
	  WHERE "activities".user_id = $1
	  GROUP BY "activities".date, "activities".user_id, "activities".time) as "weeklyDistance"
  GROUP BY "week") as "weeklyAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/weeklyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/weeklyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/weeklySpeedAverage
 *
 * Returns the user's calculated weekly speed from the
 * "activities" table
 */
router.get('/user/weeklySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### activities.router -> POST /api/activities/user/weeklySpeedAverage'
    ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageSpeed")
  FROM
	  (SELECT AVG(SPEED) as "averageSpeed"
    FROM
	  (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".speed
	  FROM "activities"
	  WHERE "activities".user_id = $1
	  GROUP BY "activities".date, "activities".user_id, "activities".speed) as "weeklyDistance"
  GROUP BY "week") as "weeklyAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/weeklySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/weeklySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/weeklyPaceAverage
 *
 * Returns the user's calculated weekly pace from the
 * "activities" table
 */
router.get('/user/weeklyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console
    .log
    // '### activities.router -> POST /api/activities/user/weeklyPaceAverage'
    ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averagePace")
  FROM
    (SELECT AVG(PACE) as "averagePace"
  FROM
    (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".pace
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".pace) as "weeklyDistance"
  GROUP BY "week") as "weeklyAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in GET /api/activities/user/weeklyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/weeklyPaceAverage:',
        error
      );
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
 *  speed: 6.70  -- number (float)
 *  pace: 8.96  -- number
 *  notes: Dreadmill  --string
 * }
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log('### activities.router -> POST /api/activities');
  // console.log('req.body', req.body);

  // Data encapsulation
  const queryArguments = [
    req.user.id,
    req.body.date,
    req.body.route,
    req.body.distance,
    req.body.time,
    req.body.speed,
    req.body.pace,
    req.body.notes,
  ];

  // SQL query
  const sqlQuery = `
  INSERT INTO "activities"
    ("user_id", "date", "route", "distance", "time", "speed", "pace", "notes")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
  `;

  // Ping DB
  pool
    .query(sqlQuery, queryArguments)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      // console.log('SUCCESS in POST /api/activities');
      res.sendStatus(201);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in POST /api/activities:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
