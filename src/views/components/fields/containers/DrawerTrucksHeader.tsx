import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function DrawerTrucksHeader() {
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6">
                    Truck
                </Typography>
                <IconButton>
                    <HighlightOffIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}



