/* Import Libraries */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// ToDo - edit/update/remove for material-ui
import './LandingPage.css';

/* Import Comoponents */
import LoginForm from '../LoginForm/LoginForm';

function LandingPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <HomePage /> ***');
  }

  const history = useHistory();

  // Local state used for toggling <LoginForm /> component
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);

  /*
    Function sets local state variable to allow the <LoginForm />
    display to be toggled
  */
  function loginForm() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <HomePage /> -> loginForm() ***');
    }

    // Set value to opposite state to allow toggling
    setLoginButtonClicked(!loginButtonClicked);
  }

  return (
    <section>
      <h2>Welcome</h2>
      <div>
        <p>
          At MRJ, we believe that everyone can achieve anything they put their
          mind to. We simply quantify your dreams.
        </p>
      </div>
      <div>
        {loginButtonClicked ? (
          <LoginForm />
        ) : (
          <img
            src="https://www.focusfitness.net/stock-photos/wp-content/uploads/edd/2017/06/81-man-woman-running-vector.jpg"
            alt="silhouette of two runners"
          />
        )}
      </div>
      <div>
        <button onClick={loginForm}>Login</button>
        <button onClick={() => history.push('/registration')}>Register</button>
      </div>
    </section>
  );
}

export default LandingPage;
