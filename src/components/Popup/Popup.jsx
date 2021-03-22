/* Import Libraries */
import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

function Popup(props) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <Popup /> ***');
  }

  console.log('$$%%$$%% Poppu Open %%$$%%$$');
  const { title, children, openPopup, setOpenPopup, verbose } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div>{title}</div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
