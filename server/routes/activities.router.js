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
  console.log('### activities.router -> POST /api/activities');
  console.log('req.body', req.body);
});

module.exports = router;
