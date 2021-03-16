/* Import Libraries */
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

/* Create Router */
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

/**
 * POST route for /api/user/register
 *
 * Adds new user to the "users" table
 *
 * req.body looks like:
 * {
 *  first_name: Roxy    -- string
 *  last_name: Rahl     -- string
 *  birthdate: 02/22/1983   -- date
 *  gender: 1         -- number (references "genders" table)
 *  city: Chicago   -- string
 *  state: 13   -- number (references "states" table)
 *  country: United States -- string
 *  username: RoxyR   --string
 *  password: badBanana   -- password
 * }
 */
router.post('/register', (req, res, next) => {
  const queryArguments = [
    req.body.first_name,
    req.body.last_name,
    req.body.birthdate,
    req.body.gender,
    req.body.city,
    req.body.state,
    req.body.country,
    req.body.username,
    encryptLib.encryptPassword(req.body.password),
    3,
  ];

  const sqlQuery = `
  INSERT INTO "users"
    ("first_name", "last_name", "birthdate", "gender", "city", "state", "country", "username", "password", "authLevel")
  VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  RETURNING id;
  `;

  pool
    .query(sqlQuery, queryArguments)
    .then((dbResponse) => {
      console.log('SUCCESS in POST /api/user/register');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR in POST /api/user/register:', error);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
