/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

/* Import Material-UI components */
import { Button, Typography } from '@material-ui/core';

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
    <form className="formPanel" onSubmit={registerOrUpdateUser}>
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

      {/* First Name */}
      <div>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Roxy"
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Rahl"
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>

      {/* Birth date */}
      <div>
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
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender">
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
        </label>
      </div>

      {/* City */}
      <div>
        <label htmlFor="City">
          City:
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Chicago"
            required
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
      </div>

      {/* State */}
      <div>
        <label htmlFor="state">
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
        </label>
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country">
          Country:
          <input
            type="text"
            name="country"
            value={country}
            placeholder="United States"
            required
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>
      </div>

      {/* Username */}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        {user.id !== 0 ? (
          <Button variant="contained" color="primary">
            Update
          </Button>
        ) : (
          <Button variant="contained" color="primary">
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
      </div>
    </form>
  );
}

export default RegisterForm;
