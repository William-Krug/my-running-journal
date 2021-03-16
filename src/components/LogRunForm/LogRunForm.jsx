/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  // Local state variables used for form capture
  const [newDate, setNewDate] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [newDistance, setNewDistance] = useState(0);
  const [newHour, setNewHour] = useState('');
  const [newMinute, setNewMinute] = useState('');
  const [newSecond, setNewSecond] = useState('');
  const [newNotes, setNewNotes] = useState('');

  function logRun(event) {
    // Keep page from refreshing
    event.preventDefault();

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LogRunForm /> -> logRun() ***');
    }
  }

  return (
    <div>
      <form onSubmit={logRun}>
        {/* Run Date */}
        <div>
          <label htmlFor="newDate">
            Run Date:
            <input
              type="date"
              name="newDate"
              value={newDate}
              // required
              onChange={(event) => setNewDate(event.target.value)}
            />
          </label>
        </div>

        {/* Route Name */}
        <div>
          <label htmlFor="newRoute">
            Route Name:
            <input
              type="text"
              name="newRoute"
              value={newRoute}
              placeholder="Secret Path"
              // required
              onChange={(event) => setNewRoute(event.target.value)}
            />
          </label>
        </div>

        {/* Distance */}
        <div>
          <label htmlFor="newDistance">
            Distance:
            <input
              type="number"
              name="newDistance"
              value={newDistance}
              placeholder="5.34"
              min="0"
              // required
              onChange={(event) => setNewDistance(event.target.value)}
            />
          </label>
        </div>

        {/* Time */}
        <div>
          <label htmlFor="newTime">
            Time:
            {/* Hours */}
            <input
              type="number"
              name="newTime"
              value={newHour}
              placeholder="hh"
              required
              min="0"
              onChange={(event) => setNewHour(event.target.value)}
            />
            {/* Minutes */}
            <input
              type="number"
              name="newTime"
              value={newMinute}
              placeholder="mm"
              required
              min="0"
              onChange={(event) => setNewMinute(event.target.value)}
            />
            {/* Seconds */}
            <input
              type="number"
              name="newTime"
              value={newSecond}
              placeholder="ss"
              min="0"
              required
              onChange={(event) => setNewSecond(event.target.value)}
            />
          </label>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="newNotes">
            Notes:
            <input
              type="text"
              name="newNotes"
              value={newNotes}
              placeholder="4 x 400m"
              onChange={(event) => setNewNotes(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button>Add Run</button>
        </div>
      </form>
    </div>
  );
}

export default LogRunForm;
