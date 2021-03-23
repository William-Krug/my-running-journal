/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

/**
 * Component captures user's run information to be stored
 * in the "activities" table in DB
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders app's log run form
 */
function LogRunForm({ verbose }) {
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
    setNewDistance(0);
    setNewHour('');
    setNewMinute('');
    setNewSecond('');
    setNewNotes('');
  }

  return (
    <div>
      <form onSubmit={logRun}>
        {/* Run Date */}
        <div>
          {/* <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Run Date:"
              value={newDate}
              onChange={(event) => setNewDate(event.target.value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider> */}
          <label htmlFor="newDate">
            Run Date:
            <input
              type="date"
              name="newDate"
              value={newDate}
              required
              onChange={(event) => setNewDate(event.target.value)}
            />
          </label>
        </div>

        {/* Route Name */}
        <div>
          <TextField
            label="Route Name:"
            variant="outlined"
            value={newRoute}
            placeholder="Secret Path"
            required
            onChange={(event) => setNewRoute(event.target.value)}
          />
          {/* <label htmlFor="newRoute">
            Route Name:
            <input
              type="text"
              name="newRoute"
              value={newRoute}
              placeholder="Secret Path"
              onChange={(event) => setNewRoute(event.target.value)}
            />
          </label> */}
        </div>

        {/* Distance */}
        <div>
          <TextField
            label="Distance:"
            variant="filled"
            value={newDistance}
            placeholder="5.34"
            required
            onChange={(event) => setNewDistance(event.target.value)}
          />
          {/* <label htmlFor="newDistance">
            Distance:
            <input
              type="number"
              name="newDistance"
              value={newDistance}
              placeholder="5.34"
              step="0.01"
              min="0"
              required
              onChange={(event) => setNewDistance(event.target.value)}
            />
          </label> */}
        </div>

        {/* Time */}
        <div>
          <TextField
            label="hours"
            value={newHour}
            placeholder="hh"
            required
            onChange={(event) => setNewHour(event.target.value)}
          />
          {/* <label htmlFor="newTime">
          </div>
            Time: */}
          {/* Hours */}
          {/* <input
              type="number"
              name="newTime"
              value={newHour}
              placeholder="hh"
              required
              min="0"
              onChange={(event) => setNewHour(event.target.value)}
            /> */}
          {/* Minutes */}
          <TextField
            label="minutes"
            value={newMinute}
            placeholder="mm"
            required
            onChange={(event) => setNewMinute(event.target.value)}
          />
          {/* <input
              type="number"
              name="newTime"
              value={newMinute}
              placeholder="mm"
              required
              min="0"
              onChange={(event) => setNewMinute(event.target.value)}
            /> */}
          {/* Seconds */}
          <TextField
            label="seconds"
            value={newSecond}
            placeholder="ss"
            required
            onChange={(event) => setNewSecond(event.target.value)}
          />
          {/* <input
              type="number"
              name="newTime"
              value={newSecond}
              placeholder="ss"
              min="0"
              required
              onChange={(event) => setNewSecond(event.target.value)}
            />
          </label> */}
        </div>

        {/* Notes */}
        <div>
          <TextField
            label="Notes:"
            value={newNotes}
            placeholder="Watch out for ice"
            multiline
            rows={5}
            required
            onChange={(event) => setNewNotes(event.target.value)}
          />
          {/* <label htmlFor="newNotes">
            Notes:
            <input
              type="text"
              name="newNotes"
              value={newNotes}
              placeholder="Watch out for ice"
              onChange={(event) => setNewNotes(event.target.value)}
            />
          </label> */}
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Add Run
          </Button>
          {/* <button>Add Run</button> */}
        </div>
      </form>
    </div>
  );
}

export default LogRunForm;
