/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import Popup from '../components/Popup/Popup';

/**
 * Component renders a graphical history of the user's
 * logged runs
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {array} allUsersRuns array of run objects associated with the logged in user
 * @param {string} label used to clarify what the points on the chart represent
 * @param {string} title title of the chart
 * @returns {jsx} renders a line chart (unconnected) showing the runners history of time vs. distance
 */
function LineChart({ verbose, allUsersRuns, label, title }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LineChart /> ***');
    console.log('allUsersRuns:', allUsersRuns);
  }

  const dispatch = useDispatch();

  // Local state variables to handle page changes
  const [openPopup, setOpenPopup] = useState(false);

  // Local variables used for graphing
  let xValues = [];
  let yValues = [];

  // Create x and y axis values to chart run history
  for (let i = 0; i < allUsersRuns.length; i++) {
    xValues.push(moment(allUsersRuns[i].date).format('MM/DD/YYYY'));
    yValues.push(Number(allUsersRuns[i].distance).toFixed(2));
  }

  /*
    Function captures the run's index location in the array
    to determine the id associated with the run from the
    "activities" table

    Used to get the specific run's details for viewing
    and editing
  */
  const viewRunDetails = (element) => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LineChart /> -> viewRunDetails() ***');
      console.log('element:', element);
      console.log('element[0]._index.id:', element[0]._index.id);
    }

    console.log('*** <LineChart /> -> viewRunDetails() ***');
    console.log('element:', element);
    console.log('element[0]:', element[0]);
    console.log('element[0]._index:', element[0]._index);
    console.log('element[0]._index.id:', element[0]._index.id);

    // Find the "activites" table id
    const runId = allUsersRuns[element[0]._index].id;

    // GET run details for clicked event
    // dispatch({
    //   type: 'GET_SINGLE_RUN',
    //   payload: {
    //     id: runId,
    //   },
    // });
    setOpenPopup(true);
  };

  /*
    Function determines graph data necessary to render
    points in the chart
  */
  const data = {
    labels: xValues,
    datasets: [
      {
        label: label,
        data: yValues,
        fill: false,
        backgroundColor: '#ed2939',
        borderColor: '#ed2939',
        showLine: false,
      },
    ],
  };

  /*
    Function determines chart aesthetics
  */
  const options = {
    tooltips: { enabled: false },
    hover: { mode: null },
    scales: {
      xAxes: [
        {
          ticks: {
            padding: 10,
          },
          gridLines: {
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            padding: 10,
            beginAtZero: true,
          },
          gridLines: {
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      ],
    },
  };

  return (
    <section>
      {/* Chart Title */}
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>

      {/* Render Line Chart */}
      <Line
        data={data}
        options={options}
        // getElementAtEvent={getElementAtEvent}
        getElementAtEvent={viewRunDetails}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
    </section>
  );
}

export default LineChart;
