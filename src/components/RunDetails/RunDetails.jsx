function RunDetails({ verbose, title, runDetails }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunDetails /> ***');
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Date:</td>
              <td>{runDetails.date}</td>
            </tr>
            <tr>
              <td>Route:</td>
              <td>{runDetails.route}</td>
            </tr>
            <tr>
              <td>Distance:</td>
              <td>{Number(runDetails.distance).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>Speed (mph):</td>
              <td>{runDetails.mph}</td>
            </tr>
            <tr>
              <td>Pace (min/mile):</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>Notes:</td>
              <td>{runDetails.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RunDetails;
