/* Import Libraries */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

/* Import Components */
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import RegisterForm from '../RegisterForm/RegisterForm';

function ProfilePage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <ProfilePage /> ***');
  }

  // Grab user data from the Redux store
  const user = useSelector((store) => store.user);

  // Local state used for toggling <RegisterForm /> component
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  /*
   */
  function registerFormToggle() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <ProfilePage /> -> registerFormToggle() ***');
    }

    // Set value to opposite state to allow toggling
    setEditButtonClicked(!editButtonClicked);
  }

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      {editButtonClicked ? (
        <ProfileDetails verbose={verbose} user={user} />
      ) : (
        <RegisterForm verbose={verbose} user={user} />
      )}

      <button onClick={registerFormToggle}>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ProfilePage;
