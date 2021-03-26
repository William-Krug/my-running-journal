/* Import Libraries */
import React from 'react';
import { Box, Card, Grid, Typography } from '@material-ui/core';

/* Import Images */
import js from '../images/JavaScript.png';
import reAct from '../images/react.png';
import reDux from '../images/redux-logo-landscape.png';
import exPress from '../images/express.png';
import noDe from '../images/nodejs.png';
import mui from '../images/mattui.png';
import postGres from '../images/postgres.jpg';
import momEnt from '../images/moment.png';
import chartJS from '../images/chartjs-tutsplus.jpeg';

/**
 * Component displays the logos for the list of technologies used to
 * build the My Running Journal app
 *
 * @returns {jsx} renders logos of technologies used
 */
function BuiltWith() {
  const logoArray = [
    js,
    reAct,
    reDux,
    exPress,
    noDe,
    mui,
    postGres,
    momEnt,
    chartJS,
  ];

  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container justify="center">
          <Box mb={3}>
            <Grid item>
              <Typography variant="h1" component="h1">
                <strong>Built With</strong>
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid container spacing={3}>
          {logoArray.map((logo, i) => {
            return (
              <Grid item key={i} xs={3}>
                <Card m={3}>
                  <img src={logo} />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BuiltWith;
