import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

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
      <Link to="/home">
        <h1 className="nav-title">My Running Journal</h1>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id <= 2 && (
          <Link className="navLink" to="/admin">
            Admin
          </Link>
        )}

        {user.id > 0 && (
          <>
            <Link className="navLink" to="/profile">
              Profile
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
