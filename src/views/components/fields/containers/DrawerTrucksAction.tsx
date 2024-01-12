import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function DrawerTrucksAction() {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">   
        <Button variant="contained" type="button">Cancel</Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 1, }} />
        <Button variant="contained"  type="button" >Save</Button>   
      </Toolbar>
    </AppBar>
  );
}
