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
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/dailyAverages ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT
      AVG("distance") as "averageDistance",
      AVG("time") as "averageTime",
      AVG("speed") as "averageSpeed",
      AVG("pace") as "averagePace"
    FROM "activities";
    `;
  }

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
      console.log('ERROR in GET /api/communityMetrics/dailyAverages:', error);
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/weeklyDistanceAverage
 *
 * Returns the community's calculated weekly distance from the
 * "activities" table
 */
router.get('/weeklyDistanceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/weeklyDistanceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageDistance")
    FROM
      (SELECT SUM(DISTANCE) as "averageDistance"
    FROM
      (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".distance
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".distance) as "weeklyDistance"
    GROUP BY "week") as "weeklyAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/weeklyDistanceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/weeklyDistanceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/weeklyTimeAverage
 *
 * Returns the community's calculated weekly time from the
 * "activities" table
 */
router.get('/weeklyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/weeklyTimeAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageTime")
    FROM
      (SELECT SUM(TIME) as "averageTime"
    FROM
      (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".time
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".time) as "weeklyDistance"
    GROUP BY "week") as "weeklyAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/weeklyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/weeklyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/weeklySpeedAverage
 *
 * Returns the community's calculated weekly speed from the
 * "activities" table
 */
router.get('/weeklySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/weeklySpeedAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageSpeed")
    FROM
      (SELECT AVG(SPEED) as "averageSpeed"
    FROM
      (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".speed
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".speed) as "weeklyDistance"
    GROUP BY "week") as "weeklyAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/weeklySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/weeklySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/weeklyPaceAverage
 *
 * Returns the community's calculated weekly pace from the
 * "activities" table
 */
router.get('/weeklyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/weeklyPaceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averagePace")
    FROM
      (SELECT AVG(PACE) as "averagePace"
    FROM
      (SELECT EXTRACT(WEEK FROM "activities".date) as "week", "activities".user_id, "activities".pace
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".pace) as "weeklyDistance"
    GROUP BY "week") as "weeklyAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/weeklyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/weeklyPaceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/monthlyDistanceAverage
 *
 * Returns the community's calculated monthly distance from the
 * "activities" table
 */
router.get('/monthlyDistanceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/monthlyDistanceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageDistance")
    FROM
      (SELECT SUM(DISTANCE) as "averageDistance"
    FROM
      (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".distance
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".distance) as "monthlyDistance"
    GROUP BY "month") as "monthlyDistanceAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'SUCCESS in GET /api/communityMetrics/monthlyDistanceAverage'
      );
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/monthlyDistanceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/monthlyTimeAverage
 *
 * Returns the community's calculated monthly time from the
 * "activities" table
 */
router.get('/monthlyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/monthlyTimeAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageTime")
    FROM
      (SELECT SUM(TIME) as "averageTime"
    FROM
      (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".time
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".time) as "monthlyDistance"
    GROUP BY "month") as "monthlyTimeAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/monthlyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/monthlyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/monthlySpeedAverage
 *
 * Returns the community's calculated monthly speed from the
 * "activities" table
 */
router.get('/monthlySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/monthlySpeedAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageSpeed")
    FROM
      (SELECT AVG(SPEED) as "averageSpeed"
    FROM
      (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".speed
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".speed) as "monthlyDistance"
    GROUP BY "month") as "monthlySpeedAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/monthlySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in POST /api/communityMetrics/monthlySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/monthlyPaceAverage
 *
 * Returns the community's calculated monthly pace from the
 * "activities" table
 */
router.get('/monthlyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/monthlyPaceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averagePace")
    FROM
      (SELECT AVG(PACE) as "averagePace"
    FROM
      (SELECT EXTRACT(MONTH FROM "activities".date) as "month", "activities".user_id, "activities".pace
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".pace) as "monthlyDistance"
    GROUP BY "month") as "monthlyPaceAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/monthlyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/monthlyPaceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/yearlyDistanceAverage
 *
 * Returns the community's calculated yearly distance from the
 * "activities" table
 */
router.get('/yearlyDistanceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/yearlyDistanceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageDistance")
    FROM
      (SELECT SUM(DISTANCE) as "averageDistance"
    FROM
      (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".distance
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".distance) as "yearlyDistance"
    GROUP BY "year") as "yearlyDistanceAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/yearlyDistanceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/yearlyDistanceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/yearlyTimeAverage
 *
 * Returns the community's calculated yearly time from the
 * "activities" table
 */
router.get('/yearlyTimeAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/yearlyTimeAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageTime")
    FROM
      (SELECT SUM(TIME) as "averageTime"
    FROM
      (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".time
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".time) as "yearlyDistance"
    GROUP BY "year") as "yearlyTimeAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/yearlyTimeAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/yearlyTimeAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/yearlySpeedAverage
 *
 * Returns the community's calculated yearly speed from the
 * "activities" table
 */
router.get('/yearlySpeedAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/yearlySpeedAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averageSpeed")
    FROM
      (SELECT AVG(SPEED) as "averageSpeed"
    FROM
      (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".speed
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".speed) as "yearlyDistance"
    GROUP BY "year") as "yearlySpeedAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/yearlySpeedAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/yearlySpeedAverage:',
        error
      );
      res.sendStatus(500);
    });
});

/**
 * GET route for /api/communityMetrics/yearlyPaceAverage
 *
 * Returns the community's calculated yearly pace from the
 * "activities" table
 */
router.get('/yearlyPaceAverage', rejectUnauthenticated, (req, res) => {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '### community.metrics.router -> GET /api/communityMetrics/yearlyPaceAverage ###'
  // );

  let sqlQuery = '';

  // SQL query and authorization check
  if (req.user.authLevel > 2) {
    res.sendStatus(404);
    return;
  } else {
    sqlQuery = `
    SELECT AVG("averagePace")
    FROM
      (SELECT AVG(PACE) as "averagePace"
    FROM
      (SELECT EXTRACT(YEAR FROM "activities".date) as "year", "activities".user_id, "activities".pace
      FROM "activities"
      GROUP BY "activities".date, "activities".user_id, "activities".pace) as "yearlyDistance"
    GROUP BY "year") as "yearlyPaceAverage";
    `;
  }

  // Ping DB
  pool
    .query(sqlQuery)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('SUCCESS in GET /api/communityMetrics/yearlyPaceAverage');
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(
        'ERROR in GET /api/communityMetrics/yearlyPaceAverage:',
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
