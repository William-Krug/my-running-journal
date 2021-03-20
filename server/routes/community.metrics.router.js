/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

/* Create Router */
const router = express.Router();

/**
 * GET route for /api/communityMetrics/dailyAverages
 *
 * Returns the community's calculated daily averages for
 * distance, time, speed, and pace from the
 * "activities" table
 */
router.get('/dailyAverages', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  console.log(
    '### community.metrics.router -> GET /api/communityMetrics/dailyAverages ###'
  );

  // SQL query
  const sqlQuery = `
  SELECT
    AVG("distance") as "averageDistance",
    AVG("time") as "averageTime",
    AVG("speed") as "averageSpeed",
    AVG("pace") as "averagePace"
  FROM "activities";
  `;

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/dailyAverages');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in POST /api/communityMetrics/dailyAverages:', error);
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
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/weeklyDistanceAverage'
  //   ();

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
      console.log('SUCCESS in GET /api/activities/user/weeklyDistanceAverage');
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
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/weeklyTimeAverage'
  //   ();

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
      console.log('SUCCESS in GET /api/activities/user/weeklyTimeAverage');
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
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/weeklySpeedAverage'
  //   ();

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
      console.log('SUCCESS in GET /api/activities/user/weeklySpeedAverage');
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
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/weeklyPaceAverage'
  //   ();

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
      console.log('SUCCESS in GET /api/activities/user/weeklyPaceAverage');
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
 * GET route for /api/activities/user/monthlyDistanceAverage
 *
 * Returns the user's calculated monthly distance from the
 * "activities" table
 */
router.get(
  '/user/monthlyDistanceAverage',
  rejectUnauthenticated,
  (req, res) => {
    // Breadcrumbs for testing and debugging
    // console
    //   .log
    //   '### activities.router -> POST /api/activities/user/monthlyDistanceAverage'
    //   ();

    // SQL query
    const sqlQuery = `
  SELECT AVG("averageDistance")
  FROM
    (SELECT SUM(DISTANCE) as "averageDistance"
  FROM
    (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".distance
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".distance) as "monthlyDistance"
  GROUP BY "month") as "monthlyDistanceAverage";
  `;

    // Ping DB
    pool
      .query(sqlQuery, [req.user.id])
      .then((dbResponse) => {
        // Breadcrumbs for testing and debugging
        console.log(
          'SUCCESS in GET /api/activities/user/monthlyDistanceAverage'
        );
        res.send(dbResponse.rows);
      })
      .catch((error) => {
        // Breadcrumbs for testing and debugging
        console.log(
          'ERROR in POST /api/activities/user/monthlyDistanceAverage:',
          error
        );
        res.sendStatus(500);
      });
  }
);

/**
 * GET route for /api/activities/user/monthlyTimeAverage
 *
 * Returns the user's calculated monthly time from the
 * "activities" table
 */
router.get('/user/monthlyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/monthlyTimeAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageTime")
  FROM
    (SELECT SUM(TIME) as "averageTime"
  FROM
    (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".time
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".time) as "monthlyDistance"
  GROUP BY "month") as "monthlyTimeAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/monthlyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/monthlyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/monthlySpeedAverage
 *
 * Returns the user's calculated monthly speed from the
 * "activities" table
 */
router.get('/user/monthlySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/monthlySpeedAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageSpeed")
  FROM
    (SELECT AVG(SPEED) as "averageSpeed"
  FROM
    (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".speed
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".speed) as "monthlyDistance"
  GROUP BY "month") as "monthlySpeedAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/monthlySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/monthlySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/monthlyPaceAverage
 *
 * Returns the user's calculated monthly pace from the
 * "activities" table
 */
router.get('/user/monthlyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/monthlyPaceAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averagePace")
  FROM
    (SELECT AVG(PACE) as "averagePace"
  FROM
    (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".pace
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".pace) as "monthlyDistance"
  GROUP BY "month") as "monthlyPaceAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/monthlyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/monthlyPaceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/yearlyDistanceAverage
 *
 * Returns the user's calculated yearly distance from the
 * "activities" table
 */
router.get('/user/yearlyDistanceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/yearlyDistanceAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageDistance")
  FROM
    (SELECT SUM(DISTANCE) as "averageDistance"
  FROM
    (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".distance
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".distance) as "yearlyDistance"
  GROUP BY "year") as "yearlyDistanceAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/yearlyDistanceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/yearlyDistanceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/yearlyTimeAverage
 *
 * Returns the user's calculated yearly time from the
 * "activities" table
 */
router.get('/user/yearlyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/yearlyTimeAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageTime")
  FROM
    (SELECT SUM(TIME) as "averageTime"
  FROM
    (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".time
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".time) as "yearlyDistance"
  GROUP BY "year") as "yearlyTimeAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/yearlyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/yearlyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/yearlySpeedAverage
 *
 * Returns the user's calculated yearly speed from the
 * "activities" table
 */
router.get('/user/yearlySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/yearlySpeedAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averageSpeed")
  FROM
    (SELECT AVG(SPEED) as "averageSpeed"
  FROM
    (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".speed
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".speed) as "yearlyDistance"
  GROUP BY "year") as "yearlySpeedAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/yearlySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/yearlySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/activities/user/yearlyPaceAverage
 *
 * Returns the user's calculated yearly pace from the
 * "activities" table
 */
router.get('/user/yearlyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console
  //   .log
  //   '### activities.router -> POST /api/activities/user/yearlyPaceAverage'
  //   ();

  // SQL query
  const sqlQuery = `
  SELECT AVG("averagePace")
  FROM
    (SELECT AVG(PACE) as "averagePace"
  FROM
    (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".pace
    FROM "activities"
    WHERE "activities".user_id = $1
    GROUP BY "activities".date, "activities".user_id, "activities".pace) as "yearlyDistance"
  GROUP BY "year") as "yearlyPaceAverage";
  `;

  // Ping DB
  pool
    .query(sqlQuery, [req.user.id])
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/activities/user/yearlyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/activities/user/yearlyPaceAverage:',
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
      console.log('SUCCESS in POST /api/activities');
      res.sendStatus(201);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log('ERROR in POST /api/activities:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
