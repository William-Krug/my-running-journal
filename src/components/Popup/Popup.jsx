/* Import Libraries */
import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Popup(props) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <Popup /> ***');
  }

  const { title, children, openPopup, setOpenPopup, verbose } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle style={{ paddingRight: '5px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>{title}</div>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon color="action" />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
