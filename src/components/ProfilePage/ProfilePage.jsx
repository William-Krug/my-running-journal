/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import swal from 'sweetalert';

/* Import Components */
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import RegisterForm from '../RegisterForm/RegisterForm';

/**
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders container page for `<ProfileDetails />` and `<RegisterForm />` components
 */
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

    Sends user's information to Redux store to be grabbed and
    populated on <RegisterForm /> page
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
    <Grid container justify="center">
      <Grid item xs={8}>
        <Grid container justify="center">
          {/* Page Heading*/}
          <Grid item>
            <Typography variant="h3" component="h1">
              <strong>{user.username}'s Profile</strong>
            </Typography>
          </Grid>
        </Grid>
        <Box mb={3} mt={5}>
          <Grid container justify="center">
            {/* Display <ProfileDetails /> until "Edit" button is clicked */}
            <Grid item xs={4}>
              {editButtonClicked ? (
                <Card variant="elevation" elevation="5">
                  <Box p={3}>
                    <ProfileDetails verbose={verbose} user={user} />
                  </Box>
                </Card>
              ) : (
                <RegisterForm verbose={verbose} />
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Buttons to edit/cancel / delete */}
        <Grid container justify="center">
          <Grid item>
            <Box mr={3}>
              {editButtonClicked ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={registerFormToggle}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={registerFormToggle}
                >
                  Cancel
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item>
            <Box ml={3}>
              <Button variant="contained" color="primary" onClick={deleteUser}>
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
