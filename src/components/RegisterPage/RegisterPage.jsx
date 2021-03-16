/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
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
    </div>
  );
}

export default RegisterPage;
