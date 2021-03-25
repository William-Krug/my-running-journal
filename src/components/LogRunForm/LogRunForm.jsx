/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Grid, InputLabel, TextField } from '@material-ui/core';

/**
 * Component captures user's run information to be stored
 * in the "activities" table in DB
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {function} setOpenPopup function that sets the state of `openPopup` to close popup after logging new run
 * @returns {jsx} renders app's log run form
 */
function LogRunForm({ verbose, setOpenPopup }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LogRunForm /> ***');
  }

  const dispatch = useDispatch();

  // Local state variables used for form capture
  const [newDate, setNewDate] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [newDistance, setNewDistance] = useState('');
  const [newHour, setNewHour] = useState('');
  const [newMinute, setNewMinute] = useState('');
  const [newSecond, setNewSecond] = useState('');
  const [newNotes, setNewNotes] = useState('');

  /*
    Function captures inputs from the form, makes calculations
    to determine the speed and pace of the run and sends all
    data as an object to the "activities" table
  */
  function logRun(event) {
    // Keep page from refreshing
    event.preventDefault();

    // Local variables used for speed and pace calculations
    let totalMilliseconds = 0;
    let speed = 0;
    let pace = 0;

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LogRunForm /> -> logRun() ***');
      console.log('\tnewDistance:', newDistance);
      console.log('\tnewHour:', newHour);
      console.log('\tnewMinute:', newMinute);
      console.log('\tnewSecond:', newSecond);
    }

    // Calculate the total run time in milliseconds
    totalMilliseconds =
      Number(newHour) * 3600000 + // Convert hours to milliseconds
      Number(newMinute) * 60000 + // Convert minutes to milliseconds
      Number(newSecond) * 1000; // Convert seconds to milliseconds

    // Calculate the speed (mph) of the run [distance / hours]
    speed = (Number(newDistance) / (totalMilliseconds / 3600000)).toFixed(2);

    // Calculate the pace (minutes/mile) of the run
    pace = (totalMilliseconds / Number(newDistance)).toFixed(2);

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('\ttotalMilliseconds:', totalMilliseconds);
      console.log('\tspeed:', speed);
      console.log('\tpace:', pace);
    }

    // Send run to "activities" table
    dispatch({
      type: 'LOG_NEW_RUN',
      payload: {
        date: newDate,
        route: newRoute,
        distance: newDistance,
        time: totalMilliseconds,
        speed: speed,
        pace: pace,
        notes: newNotes,
      },
    });

    // Clear inputs
    setNewDate('');
    setNewRoute('');
    setNewDistance('');
    setNewHour('');
    setNewMinute('');
    setNewSecond('');
    setNewNotes('');

    // Close Popup component
    setOpenPopup(false);
  }

  return (
    <div>
      <form onSubmit={logRun}>
        {/* Run Date */}
        <Box mb={3}>
          <Grid container>
            <Grid item xs={12}>
              <InputLabel id="date">Date</InputLabel>
              <TextField
                type="date"
                labelId="date"
                value={newDate}
                required
                fullWidth
                onChange={(event) => setNewDate(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Route Name */}
        <Box mb={3}>
          <Grid container>
            <Grid item xs={12}>
              <InputLabel id="routeName">Route Name</InputLabel>
              <TextField
                labelId="routName"
                value={newRoute}
                fullWidth
                onChange={(event) => setNewRoute(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Distance */}
        <Box mb={3}>
          <Grid container>
            <Grid item xs={12}>
              <InputLabel id="distance">Distance</InputLabel>
              <TextField
                labelId="distance"
                value={newDistance}
                required
                fullWidth
                onChange={(event) => setNewDistance(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Time */}
        <Box mb={3}>
          <Grid container justify="space-between">
            {/* Hours */}
            <Grid item xs={3}>
              <InputLabel id="hours">Hours</InputLabel>
              <TextField
                labelID="hours"
                value={newHour}
                required
                onChange={(event) => setNewHour(event.target.value)}
              />
            </Grid>
            {/* Minutes */}
            <Grid item xs={3}>
              <InputLabel id="minutes">Minutes</InputLabel>
              <TextField
                labelId="minutes"
                value={newMinute}
                required
                onChange={(event) => setNewMinute(event.target.value)}
              />
            </Grid>
            {/* Seconds */}
            <Grid item xs={3}>
              <InputLabel id="seconds">Seconds</InputLabel>
              <TextField
                labelId="seconds"
                value={newSecond}
                required
                onChange={(event) => setNewSecond(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Notes */}
        <Box mb={3}>
          <Grid container>
            <Grid item xs={12}>
              <InputLabel id="notes">Notes</InputLabel>
              <TextField
                labelId="notes"
                value={newNotes}
                multiline
                rows={5}
                fullWidth
                onChange={(event) => setNewNotes(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box mb={3}>
          <Button type="submit" variant="contained" color="primary">
            Log Run
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LogRunForm;
