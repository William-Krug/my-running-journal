/* Import Libraries */
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

/* Import Components */
import LogRunForm from '../LogRunForm/LogRunForm';

function UserPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <UserPage /> ***');
  }

  return (
    <div>
      {/* Log a new run */}
      <section>
        <LogRunForm verbose={verbose} />
      </section>

      {/* Dashboard */}
      <section></section>

      {/* Metrics */}
      <section></section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
