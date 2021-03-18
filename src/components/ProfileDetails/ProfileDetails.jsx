/* Import Libraries */
import moment from 'moment';

function ProfileDetails({ verbose, user }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <ProfileDetails /> ***');
  }
  console.log('user:', user);

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
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>{user.city}</td>
        </tr>
        <tr>
          <td>State:</td>
          <td>{user.state}</td>
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
          <td>{user.password}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfileDetails;
