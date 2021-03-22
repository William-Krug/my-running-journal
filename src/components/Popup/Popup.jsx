/* Import Libraries */
import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
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
      <DialogTitle style={{ paddingRight: '0px' }}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          // style={{ display: 'flex' }}
        >
          <Grid item style={{ flexGrow: 1 }}>
            {title}
          </Grid>
          <Grid item>
            <Button
              // variant="contained"
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
