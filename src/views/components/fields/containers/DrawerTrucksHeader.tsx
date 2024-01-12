import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box } from "@mui/material";

function onClose() {}

export default function DrawerTrucksHeader() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">Truck</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <HighlightOffIcon onClick={onClose} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
