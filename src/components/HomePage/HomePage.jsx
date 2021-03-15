/* Import Libraries */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Import Components */
import LoginForm from '../LoginForm/LoginForm';

function HomePage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <HomePage /> ***');
  }

  const history = useHistory();

  const [loginButtonClicked, setLoginButtonClicked] = useState(false);

  function loginForm() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <HomePage /> -> loginForm() ***');
    }

    setLoginButtonClicked(!loginButtonClicked);
  }

  function goToRegistrationForm() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <HomePage /> -> goToRegistrationForm() ***');
    }

    history.push('/registration');
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
        <button onClick={goToRegistrationForm}>Register</button>
      </div>
    </section>
  );
}

export default HomePage;
