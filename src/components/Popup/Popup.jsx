/* Import Libraries */
import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

function Popup(props) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <Popup /> ***');
  }

  const { title, children, openPopup, setOpenPopup, verbose } = props;

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>title go here</div>
      </DialogTitle>
      <DialogContent>
        <div>content goes here</div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
