/* Import Libraries */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@material-ui/core';

import './LandingPage.css';

/* Import Components */
import LoginForm from '../LoginForm/LoginForm';
import img from '../images/runners3.jpg';

/**
 * Component renders the app's home page.
 *
 * Buttons take user to the respective login and registration page
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders the app's home page
 */
function LandingPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LandingPage /> ***');
  }

  const history = useHistory();

  // Local state used for toggling <LoginForm /> component
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);

  /*
    Function sets local state variable to allow the <LoginForm />
    display to be toggled
  */
  function loginFormToggle() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LandingPage /> -> loginFormToggle() ***');
    }

    // Set value to opposite state to allow toggling
    setLoginButtonClicked(!loginButtonClicked);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <Box mb={3}>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h3" component="h1">
                Welcome
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* About MRJ */}
        <Box mb={3}>
          <Grid container justify="center">
            <Grid item xs={4}>
              <Typography variant="h6" component="p">
                At MRJ, we believe that everyone can achieve anything they put
                their mind to. We simply quantify your dreams.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Toggle between home page image and login form */}
        <Box mb={3}>
          <Grid container justify="center">
            <Grid item xs={6}>
              {loginButtonClicked ? (
                <LoginForm verbose={verbose} />
              ) : (
                <img src={img} alt="silhouette of two runners" />
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Buttons to login / register */}
        <Grid container justify="center">
          <Grid item>
            <Box mr={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={loginFormToggle}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box ml={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/registration')}
              >
                Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
