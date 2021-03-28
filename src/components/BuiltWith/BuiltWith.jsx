/* Import Libraries */
import React from 'react';
import { Box, Card, Grid, Typography } from '@material-ui/core';

import './BuiltWith.css';

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
  const array1 = [js, reAct, reDux];
  const array2 = [exPress, noDe, mui];
  const array3 = [postGres, momEnt, chartJS];

  return (
    <>
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
          {/* <Grid container spacing={3}> */}
          {/* <div className="logos">
            {logoArray.map((logo, i) => {
              return (
                <Box m={3}>
                  <Grid item key={i} xs={3}>
                    <Card>
                      <img src={logo} />
                    </Card>
                  </Grid>
                </Box>
              );
            })}
          </div> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
      <div className="logos bun">
        {array1.map((logo, i) => {
          return (
            <div className="logo">
              <Card key={i}>
                <img src={logo} height="200" />
              </Card>
            </div>
          );
        })}
      </div>
      <div className="logos">
        {array2.map((logo, i) => {
          return (
            <div className="logo">
              <Card key={i}>
                <img src={logo} height="200" />
              </Card>
            </div>
          );
        })}
      </div>
      <div className="logos bun">
        {array3.map((logo, i) => {
          return (
            <div className="logo">
              <Card key={i}>
                <img src={logo} height="200" />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BuiltWith;
