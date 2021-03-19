/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

/* Import Components */
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import RegisterForm from '../RegisterForm/RegisterForm';

function ProfilePage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <ProfilePage /> ***');
  }

  const history = useHistory();
  const dispatch = useDispatch();

  // Grab user data from the Redux store
  const user = useSelector((store) => store.user);

  // Local state used for toggling <RegisterForm /> component
  const [editButtonClicked, setEditButtonClicked] = useState(true);

  /*
    Function toggle the <ProfileDetails /> and <RegisterForm />
    components
  */
  function registerFormToggle() {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <ProfilePage /> -> registerFormToggle() ***');
    }

    // Set value to opposite state to allow toggling
    setEditButtonClicked(!editButtonClicked);
  }

  /*
    Function prompts user if they really want to delete
    their account.
    
    By clicking yes/continue their account
    is deleted and the user is taken to the home page.

    By clicking no/cancel their account is not delete and
    the user remains on the Profile page
  */
  function deleteUser() {
    swal({
      title: 'Please Confirm',
      text: `Proceeding with this action will delete your 
            account and all related data.`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((sendDelete) => {
      if (sendDelete) {
        swal({
          title: 'Account Deleted',
          text: `Your account has been deleted.  Thank you
                for your involvement with the MRJ community.`,
          icon: 'success',
        });
        dispatch({
          type: 'DELETE_USER',
          payload: {
            data: user.id,
            onComplete: () => {
              history.push('/');
            },
          },
        });
      } else {
        swal({
          title: 'Account Not Deleted',
          text: `Your account has not been deleted and all
                your logged runs are still saved.  Thank you
                for being a member of the MRJ community.`,
          icon: 'info',
        });
      }
    });
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
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default ProfilePage;
