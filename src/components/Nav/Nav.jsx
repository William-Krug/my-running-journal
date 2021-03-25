import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';

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
      <Box ml={5}>
        <Link className="navLink" to="/home">
          <Typography variant="h2" component="h1" gutterBottom>
            <strong>My Running Journal</strong>
          </Typography>
        </Link>
      </Box>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          <Typography variant="body1" component="body1" gutterBottom>
            {loginLinkData.text}
          </Typography>
        </Link>

        {user.authLevel <= 2 && user.id > 0 && (
          <>
            <Link className="navLink" to="/admin">
              <Typography variant="body1" component="body1" gutterBottom>
                Admin
              </Typography>
            </Link>
          </>
        )}

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
      </div>
    </div>
  );
}

export default Nav;
