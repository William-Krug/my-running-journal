/* Import Libraries */
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

/* Import Components */
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import AdminPage from '../AdminPage/AdminPage';

/* Import CSS */
import './App.css';
import { mcgpalette0400 as primaryLight } from './colorTheme';
import { mcgpalette0500 as primary } from './colorTheme';
import { mcgpalette0600 as primaryDark } from './colorTheme';
import { mcgpalette2300 as secondaryLight } from './colorTheme';
import { mcgpalette2500 as secondary } from './colorTheme';
import { mcgpalette2700 as secondaryDark } from './colorTheme';
import { mcgpalette4300 as errorLight } from './colorTheme';
import { mcgpalette4500 as error } from './colorTheme';
import { mcgpalette4700 as errorDark } from './colorTheme';
import { mcgpalette2700 as warningLight } from './colorTheme';
import { mcgpalette2800 as warning } from './colorTheme';
import { mcgpalette2900 as warningDark } from './colorTheme';
import { mcgpalette3400 as infoLight } from './colorTheme';
import { mcgpalette3500 as info } from './colorTheme';
import { mcgpalette3600 as infoDark } from './colorTheme';
import { mcgpalette3A200 as successLight } from './colorTheme';
import { mcgpalette3A400 as success } from './colorTheme';
import { mcgpalette3A700 as successDark } from './colorTheme';

/*
  Global value used for testing during app build
*/
const verbose = false;

const customTheme = createMuiTheme({
  // Themes Settings
  palette: {
    // type: 'dark',
    primary: {
      light: primaryLight,
      main: primary,
      dark: primaryDark,
      contrastText: '#f2f2f2',
    },
    secondary: {
      light: secondaryLight,
      main: secondary,
      dark: secondaryDark,
      contrastText: '#1C141D',
    },
    error: {
      light: errorLight,
      main: error,
      dark: errorDark,
      contrastText: '#f2f2f2',
    },
    warning: {
      light: warningLight,
      main: warning,
      dark: warningDark,
      contrastText: '#1C141D',
    },
    info: {
      light: infoLight,
      main: info,
      dark: infoDark,
      contrastText: '#f2f2f2',
    },
    success: {
      light: successLight,
      main: success,
      dark: successDark,
      contrastText: '#1C141D',
    },
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <CssBaseline />
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/admin will show the admin page. */}
            <ProtectedRoute
              // shows <AdminPage> if user's authLevel >= 2
              exact
              path="/admin"
            >
              <AdminPage verbose={verbose} />
            </ProtectedRoute>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage verbose={verbose} />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows ProfilePage else shows LoginPage
              exact
              path="/profile"
            >
              <ProfilePage verbose={verbose} />
            </ProtectedRoute>

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/user"
            >
              <LoginPage verbose={verbose} />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/user"
            >
              <RegisterPage verbose={verbose} />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              authRedirect="/user"
            >
              <LandingPage verbose={verbose} />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
