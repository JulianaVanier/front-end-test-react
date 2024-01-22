import * as React from 'react';
import Box from '@mui/material/Box';
import SnackbarProvider, { SnackbarOrigin } from '@mui/material/Snackbar';

// interface isSnackBarOpen extends SnackbarOrigin {
//   open: boolean;
// }
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


// export default function SnackBarTrucks() {
const SnackBarTrucks: React.FC<SnackBarTrucksProps> = (props) => {


console.log('props.snackBarOpen DENTR SNACKBAR', props.isSnackBarOpen);
console.log('Aqui message', props.messageSnackBar);
// setIsSnackBarOpen(props.snackBarOpen);

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

    props.setIsSnackBarOpen(false);
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
        open={props.isSnackBarOpen}
        // open={true}
        onClose={handleClose}
        autoHideDuration={5000}
        message={props.messageSnackBar}
        // key={vertical + horizontal}
      />
    </Box>
  );
}
export default SnackBarTrucks;