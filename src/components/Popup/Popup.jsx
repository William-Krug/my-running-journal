/* Import Libraries */
import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Popup(props) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <Popup /> ***');
  }

  const { title, children, openPopup, setOpenPopup, verbose } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h2">
              <strong>{title}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon color="secondary" />
            </Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
