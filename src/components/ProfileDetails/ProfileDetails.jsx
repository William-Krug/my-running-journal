/* Import Libraries */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function ProfileDetails({ verbose, user }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <ProfileDetails /> ***');
  }

  const dispatch = useDispatch();

  /*
    Function takes the user's numeric gender value and 
    translates it to a string for user viewing
  */
  const gender = () => {
    switch (user.gender) {
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      case 3:
        return 'Non-binary';
      case 4:
        return 'Prefer Not to Answer';
    }
  };

  /*
    Function takes the user's numeric state value and
    translates it to a string for user viewing
  */
  const state = () => {
    switch (user.state) {
      case 1:
        return 'Alabama';
      case 2:
        return 'Alaska';
      case 3:
        return 'Arizona';
      case 4:
        return 'Arkansas';
      case 5:
        return 'California';
      case 6:
        return 'Colorado';
      case 7:
        return 'Connecticut';
      case 8:
        return 'Delaware';
      case 9:
        return 'Florida';
      case 10:
        return 'Georgia';
      case 11:
        return 'Hawaii';
      case 12:
        return 'Idaho';
      case 13:
        return 'Illinois';
      case 14:
        return 'Indiana';
      case 15:
        return 'Iowa';
      case 16:
        return 'Kansas';
      case 17:
        return 'Kentucky';
      case 18:
        return 'Louisiana';
      case 19:
        return 'Maine';
      case 20:
        return 'Maryland';
      case 21:
        return 'Massachusetts';
      case 22:
        return 'Michigan';
      case 23:
        return 'Minnesota';
      case 24:
        return 'Mississippi';
      case 25:
        return 'Missouri';
      case 26:
        return 'Montana';
      case 27:
        return 'Nebraska';
      case 28:
        return 'Nevada';
      case 29:
        return 'New Hampshire';
      case 30:
        return 'New Jersey';
      case 31:
        return 'New Mexico';
      case 32:
        return 'New York';
      case 33:
        return 'North Carolina';
      case 34:
        return 'North Dakota';
      case 35:
        return 'Ohio';
      case 36:
        return 'Oklahoma';
      case 37:
        return 'Oregon';
      case 38:
        return 'Pennsylvania';
      case 39:
        return 'Rhode Island';
      case 40:
        return 'South Carolina';
      case 41:
        return 'South Dakota';
      case 42:
        return 'Tennessee';
      case 43:
        return 'Texas';
      case 44:
        return 'Utah';
      case 45:
        return 'Vermont';
      case 46:
        return 'Virginia';
      case 47:
        return 'Washington';
      case 48:
        return 'West Virginia';
      case 49:
        return 'Wisconsin';
      case 50:
        return 'Wyoming';
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>First Name:</td>
          <td>{user.first_name}</td>
        </tr>
        <tr>
          <td>Last Name:</td>
          <td>{user.last_name}</td>
        </tr>
        <tr>
          <td>Birth Date:</td>
          <td>{moment(user.birthdate).format('MM/DD/YYYY')}</td>
        </tr>
        <tr>
          <td>Gender:</td>
          <td>{gender()}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>{user.city}</td>
        </tr>
        <tr>
          <td>State:</td>
          <td>{state()}</td>
        </tr>
        <tr>
          <td>Country:</td>
          <td>{user.country}</td>
        </tr>
        <tr>
          <td>Username:</td>
          <td>{user.username}</td>
        </tr>
        <tr>
          <td>Password:</td>
          <td>*********</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfileDetails;
