import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextBoxTrucks() {

    // const[idValue, setIdValue] = React.useState('');

    // const handleIdChange =(event)=>{
    //     const newValue = event.target.value;
    //     const reqBox = /^[A-Za-z]{0,3}[0-9]{0,3}$/;
    //     if (reqBox.test(newValue) || newValue ===''){
    //         setIdValue(newValue);
    //     }
    // }



  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="outlined-required"
          label="Id"
        //   value={idValue}
        //   onChange={handleIdChange}
        //   inputProps={{maxLength:6}}
        />
    </Box>
    </>
  );
}