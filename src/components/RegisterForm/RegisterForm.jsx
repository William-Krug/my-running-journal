/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

/**
 * Component captures new user information to be stored
 * in the "users" table in DB
 *
 * @param {boolean} param0 global variable used for testing and debugging
 * @returns {jsx} renders app's registration form
 */
function RegisterForm({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RegisterForm /> ***');
  }

  const history = useHistory();

  // Get all user registration options from DB
  // to keep data in sync
  useEffect(() => {
    fetchAllGenders();
    fetchAllStates();
  }, []);

  // State data stored in reducers that will dynamically update with changes to DB
  const errors = useSelector((store) => store.errors);
  const user = useSelector((store) => store.user);
  const allGenders = useSelector((store) => store.registration.allGenders);
  const allStates = useSelector((store) => store.registration.allStates);

  // Local state variables used for form capture
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [birthdate, setBirthdate] = useState(
    moment(user.birthdate).format('yyyy-MM-DD')
  );
  const [gender, setGender] = useState(user.gender);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  /*
    Function gets the list of all available gender options
    from the DB for form dropdown options
  */
  const fetchAllGenders = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> fetchAllGenders() ***');
    }

    // GET latest "genders" table data
    dispatch({
      type: 'FETCH_ALL_GENDERS',
    });
  };

  /*
    Function gets the list of all available state options
    from the DB for form dropdown options
  */
  const fetchAllStates = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> fetchAllStates() ***');
    }

    // GET latest "states" table data
    dispatch({
      type: 'FETCH_ALL_STATES',
    });
  };

  /**
   * Function determines form submission path (GET vs PUT)
   * based on user.id
   *
   * @param {object} event handles button click / form submission
   */
  const registerOrUpdateUser = (event) => {
    // Keep page from reloading
    event.preventDefault();

    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> registerOrUpdateUser() ***');
    }

    // New user needs to be registered
    if (user.id === 0) {
      registerUser();
    }
    // current user's profile needs to be updated
    else {
      updateUserProfile();
    }
  };

  /*
    Toggle local state value to allow user's password
    to be displayed as plain text or encrypted
  */
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*
    Function captures new user input and bundles it up to
    be stored in the DB
  */
  const registerUser = () => {
    // Store new user information in DB
    dispatch({
      type: 'REGISTER',
      payload: {
        first_name: firstName,
        last_name: lastName,
        birthdate: birthdate,
        gender: gender,
        city: city,
        state: state,
        country: country,
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  /*
    Function captures updated user input and bundles it up 
    to be stored in the DB
  */
  const updateUserProfile = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> updateUserProfile() ***');
    }

    // Store new user information in DB
    dispatch({
      type: 'UPDATE_USER_PROFILE',
      payload: {
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        birthdate: birthdate,
        gender: gender,
        city: city,
        state: state,
        country: country,
        username: username,
        password: password,
        onComplete: () => {
          history.push('/user'); // send user page to <UserPage /> after updating profile
        },
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerOrUpdateUser}>
      {/* Display proper Form Header */}
      <Box mb={3}>
        {user.id !== 0 ? (
          <Typography variant="h4" component="h2" gutterBottom>
            <strong>Update User</strong>
          </Typography>
        ) : (
          <Typography variant="h4" component="h2" gutterBottom>
            <strong>Register User</strong>
          </Typography>
        )}
        {errors.registrationMessage && (
          <Typography variant="h5" component="h3" gutterBottom>
            {errors.registrationMessage}
          </Typography>
        )}
      </Box>

      {/* First Name */}
      <Box mb={3}>
        <InputLabel id="firstName">First Name</InputLabel>
        <TextField
          labelId="firstName"
          defaultValue={firstName}
          fullWidth
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Box>

      {/* Last Name */}
      <Box mb={3}>
        <InputLabel id="lastName">Last Name</InputLabel>
        <TextField
          labelId="lastName"
          defaultValue={lastName}
          fullWidth
          required
          onChange={(event) => setLastName(event.target.value)}
        />
      </Box>

      {/* Birth date */}
      <Box mb={3}>
        <InputLabel id="birthDate">Birth Date</InputLabel>
        <TextField
          type="date"
          labelId="birthDate"
          value={birthdate}
          required
          fullWidth
          onChange={(event) => setBirthdate(event.target.value)}
        />
      </Box>

      {/* Gender */}
      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            defaultValue={gender}
            required
            onChange={(event) => setGender(event.target.value)}
          >
            <MenuItem value="">
              <em>Select a Gender</em>
            </MenuItem>
            {allGenders.map((gender) => {
              return (
                <MenuItem key={gender.id} value={gender.id}>
                  {gender.gender}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      {/* City */}
      <Box mb={3}>
        <InputLabel id="city">City</InputLabel>
        <TextField
          labelId="city"
          defaultValue={city}
          // placeholder="Chicago"
          fullWidth
          required
          onChange={(event) => setCity(event.target.value)}
        />
      </Box>

      {/* State */}
      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel id="state">State:</InputLabel>
          <Select
            labelId="state"
            defaultValue={state}
            required
            onChange={(event) => setState(event.target.value)}
          >
            <MenuItem value="">
              <em>Select a State</em>
            </MenuItem>
            {allStates.map((state) => {
              return (
                <MenuItem key={state.id} value={state.id}>
                  {state.state}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      {/* Country */}
      <Box mb={3}>
        <InputLabel id="country">Country</InputLabel>
        <TextField
          labelId="country"
          variant="standard"
          defaultValue={country}
          // placeholder="United States"
          fullWidth
          required
          onChange={(event) => setCountry(event.target.value)}
        />
      </Box>

      {/* Username */}
      <Box mb={3}>
        <InputLabel id="username">Username</InputLabel>
        <TextField
          labelId="username"
          defaultValue={username}
          fullWidth
          required
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
          required
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

      {/* Button Display */}
      <Box mb={3}>
        {user.id !== 0 ? (
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        )}
      </Box>
    </form>
    // }
  );
}

export default RegisterForm;
