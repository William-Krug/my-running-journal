/* Import Libraries */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 *
 * @param {boolean} param0 global variable used for testing and debugging
 * @returns {jsx} renders app's registration form
 */
function RegisterForm({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RegisterForm /> ***');
  }

  useEffect(() => {
    fetchAllGenders();
    fetchAllStates();
  });

  // Local state variable used for form capture
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState(0);
  const [city, setCity] = useState('');
  const [state, setState] = useState(0);
  const [country, setCountry] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const fetchAllGenders = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> fetchAllGenders() ***');
    }

    dispatch({
      type: 'FETCH_ALL_GENDERS',
    });
  };

  const fetchAllStates = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <RegisterForm /> -> fetchAllStates() ***');
    }

    dispatch({
      type: 'FETCH_ALL_STATES',
    });
  };

  const registerUser = (event) => {
    event.preventDefault();

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

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
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
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>

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
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
