/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

/**
 * Component renders the login form to allow user's to
 * access the app
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders the app's login form
 */
function LoginForm({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <LoginForm /> ***');
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <LoginForm /> -> in login() ***');
    }

    // Send user credentials for verification
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form className="formPanel" onSubmit={login}>
      <Box mb={3}>
        <Typography variant="h4" component="h2" gutterBottom>
          Login
        </Typography>

        {/* Alert user to incorrect username/password combination */}
        {errors.loginMessage && (
          <Typography variant="h5" component="h3" gutterBottom>
            {errors.loginMessage}
          </Typography>
        )}
      </Box>

      {/* Capture user input */}
      {/* Username */}
      <Box mb={3}>
        <InputLabel id="username">Username</InputLabel>
        <TextField
          labelID="username"
          defaultValue={username}
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
        />
      </Box>

      {/* Password */}
      <Box mb={3}>
        <InputLabel id="password">Password</InputLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          labelId="password"
          defaultValue={password}
          fullWidth
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>

      <Box mb={3}>
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
