/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

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

  // Data stored in reducers that will update with changes to DB
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

  const dispatch = useDispatch();

  const showFields = user.id !== 0 ? true : false;

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
          history.push('/user');
        },
      },
    });
  }; // end registerUser

  return (
    // {showFields &&
    <form className="formPanel" onSubmit={registerOrUpdateUser}>
      <Box mb={3}>
        {user.id !== 0 ? (
          <Typography variant="h4" component="h2" gutterBottom>
            Update User
          </Typography>
        ) : (
          <Typography variant="h4" component="h2" gutterBottom>
            Register User
          </Typography>
        )}
        {/* {user.id !== 0 ? <h2>Update User</h2> : <h2>Register User</h2>} */}
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
      </Box>

      {/* First Name */}
      <Box mb={3}>
        <TextField
          label="First Name:"
          variant="filled"
          defaultValue={firstName}
          placeholder="Roxy"
          fullWidth
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        {/* <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Roxy"
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label> */}
      </Box>

      {/* Last Name */}
      <Box mb={3}>
        <TextField
          label="Last Name:"
          variant="outlined"
          defaultValue={lastName}
          placeholder="Rahl"
          fullWidth
          required
          onChange={(event) => setLastName(event.target.value)}
        />
      </Box>
      {/* <div> */}
      {/* <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Rahl"
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label> */}
      {/* </div> */}

      {/* Birth date */}
      <Box mb={3}>
        <label htmlFor="birthdate">
          Birth Date:
          <input
            type="date"
            name="birthdate"
            value={birthdate}
            required
            onChange={(event) => setBirthdate(event.target.value)}
          />
        </label>
      </Box>

      {/* Gender */}
      <Box mb={3}>
        <FormControl variant="filled" fullWidth>
          <InputLabel id="gender-selection">Gender:</InputLabel>
          <Select
            labelId="gender-selection"
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
        {/* <label htmlFor="gender">
          Gender:
          <select
            name="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="0">- Gender -</option>
            {allGenders.map((gender) => {
              return (
                <option key={gender.id} value={gender.id}>
                  {gender.gender}
                </option>
              );
            })}
          </select>
        </label> */}
      </Box>

      {/* City */}
      <Box mb={3}>
        <TextField
          label="City:"
          variant="standard"
          defaultValue={city}
          placeholder="Chicago"
          fullWidth
          required
          onChange={(event) => setCity(event.target.value)}
        />
        {/* <label htmlFor="City">
          City:
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Chicago"
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </label> */}
      </Box>

      {/* State */}
      <Box mb={3}>
        <FormControl variant="filled" fullWidth>
          <InputLabel id="state-selection">State:</InputLabel>
          <Select
            labelId="state-selection"
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
        {/* <label htmlFor="state">
          State:
          <select
            name="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
          >
            <option value="0">- State -</option>
            {allStates.map((state) => {
              return (
                <option key={state.id} value={state.id}>
                  {state.state}
                </option>
              );
            })}
          </select>
        </label> */}
      </Box>

      {/* Country */}
      <Box mb={3}>
        <TextField
          label="Country:"
          variant="standard"
          defaultValue={country}
          placeholder="United States"
          fullWidth
          required
          onChange={(event) => setCountry(event.target.value)}
        />
        {/* <label htmlFor="country">
          Country:
          <input
            type="text"
            name="country"
            value={country}
            placeholder="United States"
            required
            onChange={(event) => setCountry(event.target.value)}
          />
        </label> */}
      </Box>

      {/* Username */}
      <Box mb={3}>
        <TextField
          label="Username:"
          variant="standard"
          defaultValue={username}
          fullWidth
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label> */}
      </Box>

      {/* Password */}
      <Box mb={3}>
        <TextField
          label="Password:"
          variant="filled"
          defaultValue={password}
          fullWidth
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label> */}
      </Box>
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
        {user.id !== 0 ? (
          <button className="btn" type="submit" name="submit">
            Update
          </button>
        ) : (
          <input className="btn" type="submit" name="submit" value="Register" />
        )}
      </Box>
    </form>
    // }
  );
}

export default RegisterForm;
