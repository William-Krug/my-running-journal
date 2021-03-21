import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

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

  const data = {
    labels: labelsIn,
    datasets: [
      {
        data: dataIn,
        backgroundColor: ['#ed2939', '#002395', '#fdc651', '#00a86b'],
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>
      <Pie data={data} />
    </>
  );
}

export default PieChart;
