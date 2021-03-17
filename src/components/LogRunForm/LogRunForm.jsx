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

  const dispatch = useDispatch();

  // Local state variables used for form capture
  const [newDate, setNewDate] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [newDistance, setNewDistance] = useState(0);
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
    let totalSeconds = 0;
    let totalMilliseconds = 0;
    let mph = 0;
    let pace = 0;

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LogRunForm /> -> logRun() ***');
      console.log('\tnewDistance:', newDistance);
      console.log('\tnewHour:', newHour);
      console.log('\tnewMinute:', newMinute);
      console.log('\tnewSecond:', newSecond);
    }

    // totalSeconds =
    // Number(newHour) * 3600 + Number(newMinute) * 60 + Number(newSecond);

    totalMilliseconds =
      Number(newHour) * 3600000 +
      Number(newMinute) * 60000 +
      Number(newSecond) * 1000;

    // mph = (Number(newDistance) / (totalSeconds / 3600)).toFixed(2);

    mph = (Number(newDistance) / (totalMilliseconds / 3600000)).toFixed(2);

    // pace = (totalSeconds / Number(newDistance)).toFixed(2);

    pace = (totalMilliseconds / Number(newDistance)).toFixed(2);

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('\ttotalSeconds:', totalSeconds);
      console.log('\tmph:', mph);
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
        mph: mph,
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
          <label htmlFor="newRoute">
            Route Name:
            <input
              type="text"
              name="newRoute"
              value={newRoute}
              placeholder="Secret Path"
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
              step="0.01"
              min="0"
              required
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
              placeholder="Watch out for ice"
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
