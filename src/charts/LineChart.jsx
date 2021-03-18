/* Import Libraries */
import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

function LineChart({ verbose, allUsersRuns, label, title }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LineChart /> ***');
    console.log('allUsersRuns:', allUsersRuns);
  }

  const dispatch = useDispatch();

  // Local variables used for graphing
  let xValues = [];
  let yValues = [];

  for (let i = 0; i < allUsersRuns.length; i++) {
    xValues.push(moment(allUsersRuns[i].date).format('MM/DD/YYYY'));
    yValues.push(Number(allUsersRuns[i].distance).toFixed(2));
  }

  const getElementAtEvent = (element) => {
    console.log('*** <LineChart /> -> getElementAtEvent() ***');
    console.log('element:', element);

    console.log(communityRuns[element[0]._index].id);

    dispatch({
      type: 'GET_SINGLE_RUN',
      payload: {
        id: '',
      },
    });
  };

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
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>
      <Line
        data={data}
        options={options}
        getElementAtEvent={getElementAtEvent}
      />
    </section>
  );
}

export default LineChart;
