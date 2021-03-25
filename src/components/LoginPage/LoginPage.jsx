/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

/* Import Components */
import LoginForm from '../LoginForm/LoginForm';

/**
 * Component renders the app's login page.
 *
 * User has the option to switch to the register page
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders the app's login page
 */
function LoginPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LoginPage /> ***');
  }

  const history = useHistory();

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        {/* Display login form */}
        <LoginForm />

        {/* Button to switch to register page */}
        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
