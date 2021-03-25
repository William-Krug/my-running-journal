/* Import Libraries */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import moment from 'moment';

/**
 * Component display's the logged in user's profile details (from the
 * "users" table) in a table format for easy viewing
 *
 * Any db values that are references to other tables are converted into
 * strings for user consumption
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {object} user logged in user's information from the "users" table
 * @returns {jsx} renders the user's profile details
 */
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
    <TableContainer>
      <Table>
        <TableBody>
          {/* First Name */}
          <TableRow>
            <TableCell align="right">
              <strong>First Name</strong>
            </TableCell>
            <TableCell>{user.first_name}</TableCell>
          </TableRow>

          {/* Last Name */}
          <TableRow>
            <TableCell align="right">
              <strong>Last Name</strong>
            </TableCell>
            <TableCell>{user.last_name}</TableCell>
          </TableRow>

          {/* Birth Date */}
          <TableRow>
            <TableCell align="right">
              <strong>Birth Date</strong>
            </TableCell>
            <TableCell>{moment(user.birthdate).format('MM/DD/YYYY')}</TableCell>
          </TableRow>

          {/* Gender */}
          <TableRow>
            <TableCell align="right">
              <strong>Gender</strong>
            </TableCell>
            <TableCell>{gender()}</TableCell>
          </TableRow>

          {/* City */}
          <TableRow>
            <TableCell align="right">
              <strong>City</strong>
            </TableCell>
            <TableCell>{user.city}</TableCell>
          </TableRow>

          {/* State */}
          <TableRow>
            <TableCell align="right">
              <strong>State</strong>
            </TableCell>
            <TableCell>{state()}</TableCell>
          </TableRow>

          {/* Country */}
          <TableRow>
            <TableCell align="right">
              <strong>Country</strong>
            </TableCell>
            <TableCell>{user.country}</TableCell>
          </TableRow>

          {/* Username */}
          <TableRow>
            <TableCell align="right">
              <strong>Username</strong>
            </TableCell>
            <TableCell>{user.username}</TableCell>
          </TableRow>

          {/* Password */}
          <TableRow>
            <TableCell align="right">
              <strong>Password</strong>
            </TableCell>
            <TableCell>*********</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProfileDetails;
