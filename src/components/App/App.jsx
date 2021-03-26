/* Import Libraries */
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CssBaseline, Typography } from '@material-ui/core';
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
import BuiltWith from '../BuiltWith/BuiltWith';

/* Import CSS */
import './App.css';

/*
  Global value used for testing during app build
*/
const verbose = false;

/*
  Generate own Material-UI theme color palette
*/
const customTheme = createMuiTheme({
  // Themes Settings
  palette: {
    // type: 'dark',
    primary: {
      main: '#193655',
      contrastText: '#f2f2f2',
    },
    secondary: {
      main: '#ee6216',
      contrastText: '#1C141D',
    },
    error: {
      main: '#1c141d',
      contrastText: '#f2f2f2',
    },
    warning: {
      main: '#e7460c',
      contrastText: '#1C141D',
    },
    info: {
      main: '#57887b',
      contrastText: '#f2f2f2',
    },
    success: {
      main: '#3cffc4',
      contrastText: '#1C141D',
    },
  },
  typography: {
    h2: {
      // fontFamily: 'Architects Daughter',
      fontFamily: 'Merienda',
    },
    fontFamily: 'Raleway',
  },
  overrides: {
    MuiCard: {
      root: {
        // backgroundColor: '#f2f2f2',
      },
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
            {/* Shows <AdminPage /> if user's `authLevel` >= 2 */}
            <ProtectedRoute exact path="/admin">
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

            {/* Built With page for presentation */}
            <Route exact path="/builtWith">
              <BuiltWith />
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <Typography variant="h1" component="h1" gutterBottom>
                *** 404 - Error on page load ***
              </Typography>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
