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

/**
 * Component generates a reusable popup window.
 *
 * The following variables can be passed to customize the window for each use:
 * - title  -- header of window (string)
 * - children  -- component to be rendered in popup (component)
 * - openPopup  -- state variable used for opening and closing window
 * - setOpenPopup -- state hook used for opening and closing window
 * - verbose  -- global variable used for testing and debugging (boolean)
 *
 * @param {object} props parameters passed to the component that changes what is displayed in the popup
 * @returns {jsx} renders a popup window with the passed information
 */
function Popup(props) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <Popup /> ***');
  }

  // deconstruct props
  const { title, children, openPopup, setOpenPopup, verbose } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        {/* Popup Header */}
        <Grid container justify="space-between" alignItems="center">
          {/* Title */}
          <Grid item>
            <Typography variant="h4" component="h2">
              <strong>{title}</strong>
            </Typography>
          </Grid>

          {/* Close button */}
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

      {/* Popup content */}
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
