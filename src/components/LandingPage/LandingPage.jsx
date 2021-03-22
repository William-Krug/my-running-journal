/* Import Libraries */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* Import Material-UI components */
import Button from '@material-ui/core/Button';
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
    <section>
      <h2>Welcome</h2>

      {/* About MRJ */}
      <div>
        <p>
          At MRJ, we believe that everyone can achieve anything they put their
          mind to. We simply quantify your dreams.
        </p>
      </div>

      {/* Toggle between home page image and login form */}
      <div>
        {loginButtonClicked ? (
          <LoginForm verbose={verbose} />
        ) : (
          <img
            src={img}
            // src="https://www.focusfitness.net/stock-photos/wp-content/uploads/edd/2017/06/81-man-woman-running-vector.jpg"
            alt="silhouette of two runners"
          />
        )}
      </div>

      {/* Buttons to login / register */}
      <div>
        <Button variant="contained" color="primary" onClick={loginFormToggle}>
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/registration')}
        >
          Register
        </Button>
        {/* <button onClick={loginFormToggle}>Login</button>
        <button onClick={() => history.push('/registration')}>Register</button> */}
      </div>
    </section>
  );
}

export default LandingPage;
