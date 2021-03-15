/* Import Libraries */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

/* Import Components */
import LoginForm from '../LoginForm/LoginForm';

function HomePage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <HomePage /> ***');
  }

  const [loginButtonClicked, setLoginButtonClicked] = useState(false);

  function loginForm() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <HomePage /> -> loginForm() ***');
    }
  }

  function registerForm() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <HomePage /> -> registerForm() ***');
    }
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
        <img
          src="../../../images/runners2.jpg"
          alt="silhouette of two runners"
        />
      </div>
      <div>
        <button onClick={loginForm}>Login</button>
        <button onClick={registerForm}>Register</button>
      </div>
    </section>
  );
}

export default HomePage;
