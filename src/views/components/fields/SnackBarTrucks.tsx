import * as React from 'react';
import Box from '@mui/material/Box';
import SnackbarProvider, { SnackbarOrigin } from '@mui/material/Snackbar';

type SnackBarTrucksProps = {
	isSnackBarOpen: boolean
    setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>
    messageSnackBar: string,
	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>

}

const anchor: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  };

const SnackBarTrucks: React.FC<SnackBarTrucksProps> = (props) => {


const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setIsSnackBarOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <SnackbarProvider
        anchorOrigin={anchor}
        open={props.isSnackBarOpen}
        onClose={handleClose}
        autoHideDuration={4000}
        message={props.messageSnackBar}
      />
    </Box>
  );
}
export default SnackBarTrucks;