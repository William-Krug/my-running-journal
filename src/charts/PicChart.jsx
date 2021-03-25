import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';

/**
 * Component renders a graphical breakdown of
 * community demographics
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {string} title title of the chart
 * @param {array} values array of demographics to be displayed
 * @returns {jsx} renders a pie chart showing a specific community breakdown
 */
function PieChart({ verbose, title, values }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <PieChart /> ***');
    console.log('\ttitle:', title);
    console.log('\tvalues:', values);
  }

  // Local variables used for graphing
  let labelsIn = [];
  let dataIn = [];

  // Create labels and data to chart demographics
  for (let i = 0; i < values.length; i++) {
    labelsIn.push(values[i].label);
    dataIn.push(Number(values[i].data).toFixed(2));
  }

  /*
    Determines graph data necessary to render
    the chart
  */
  const data = {
    labels: labelsIn,
    datasets: [
      {
        data: dataIn,
        backgroundColor: [
          '#ed1123',
          '#00188f',
          '#fff100',
          '#009e49',
          '#68217a',
          '#ff8c00',
          '#bad80a',
          '#00bcf2',
          '#ec008c',
          '#00b294',
        ],
        borderWidth: 0.75,
      },
    ],
  };

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h5" component="h3">
            <strong>{title}</strong>
          </Typography>
        </Grid>
      </Grid>
      <Pie data={data} />
    </>
  );
}

export default PieChart;
