/* Import Libraries */
import React from 'react';
import { useSelector } from 'react-redux';

/* Import Components */
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import RegisterForm from '../RegisterForm/RegisterForm';

function ProfilePage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <ProfilePage /> ***');
  }

  const user = useSelector((store) => store.user);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <ProfileDetails verbose={verbose} user={user} />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ProfilePage;
