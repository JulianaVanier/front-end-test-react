import * as React from 'react';
import Box from '@mui/material/Box';
import SnackbarProvider, { SnackbarOrigin } from '@mui/material/Snackbar';

// interface isSnackBarOpen extends SnackbarOrigin {
//   open: boolean;
// }
type SnackBarTrucksProps = {
	snackBarOpen: boolean
}

const anchor: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  };


// export default function SnackBarTrucks() {
const SnackBarTrucks: React.FC<SnackBarTrucksProps> = (props) => {

const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);

// const status = props.snackBarOpen;

// setIsSnackBarOpen = status;

//   const [state, setState] = React.useState<State>({
//     open: false,
//     vertical: 'bottom',
//     horizontal: 'center',
//   });
//   const { vertical, horizontal, open } = state;

//   const handleClick = (newState: SnackbarOrigin) => () => {
//     setState({ ...newState, open: true });
//   };

const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackBarOpen(false);
  };

//   const buttons = (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
//           Bottom-Center
//         </Button>
//       </Box>
//     </React.Fragment>
//   );

  return (
    <Box sx={{ width: 500 }}>
      {/* {buttons} */}
      <SnackbarProvider
        anchorOrigin={anchor}
        open={isSnackBarOpen}
        onClose={handleClose}
        autoHideDuration={5000}
        message="I love snacks"
        // key={vertical + horizontal}
      />
    </Box>
  );
}
export default SnackBarTrucks;