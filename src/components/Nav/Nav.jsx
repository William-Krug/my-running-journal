import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

/**
 * Component generates the navigation bar and dynamically changes
 * the available links to a user based on:
 * - Login status
 * - Authorization levels
 *
 * @returns {jsx} renders the Navigational bar at the top of the screen
 */
function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != 0) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      {/* Company Name / Home link */}
      <Box ml={5}>
        <Link className="navLink" to="/home">
          <Typography variant="h2" component="h1" gutterBottom>
            <strong>My Running Journal</strong>
          </Typography>
        </Link>
      </Box>
      <Box pr={5}>
        <Link className="navLink" to={loginLinkData.path}>
          <Typography variant="body1" component="body1" gutterBottom>
            {loginLinkData.text}
          </Typography>
        </Link>

        {/* Link to Admin Page.  Auth Level 2 and below required to access */}
        {user.authLevel <= 2 && user.id > 0 && (
          <>
            <Link className="navLink" to="/admin">
              <Typography variant="body1" component="body1" gutterBottom>
                Admin
              </Typography>
            </Link>
          </>
        )}

        {/* Link to Profile page.  Only accessible once logged in */}
        {user.id > 0 && (
          <>
            <Link className="navLink" to="/profile">
              <Typography variant="body1" component="body1" gutterBottom>
                Profile
              </Typography>
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </Box>
    </div>
  );
}

export default Nav;
