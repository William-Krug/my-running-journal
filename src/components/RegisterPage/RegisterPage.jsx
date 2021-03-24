/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

/* Import Components */
import RegisterForm from '../RegisterForm/RegisterForm';

/**
 * Component renders the app's registration page
 *
 * User has option to switch to the login page
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns renders the app's registration page
 */
function RegisterPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RegisterPage /> ***');
  }

  const history = useHistory();

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        {/* Display registration from */}
        <RegisterForm verbose={verbose} />

        {/* Allow user to go to login page */}
        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </center>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
