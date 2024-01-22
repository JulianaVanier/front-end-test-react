import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

type DrawerTrucksHeaderProps = {
	setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const DrawerTrucksHeader: React.FC<DrawerTrucksHeaderProps> = (props) => {
	
	const navigate = useNavigate();

	function onClose() {
		if (location.pathname  === '/edit' || location.pathname  === '/create'){
            props.setIsDrawerOpen(false);
            navigate('/');
        }
		props.setIsDrawerOpen(false);
	}

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="h6">Truck</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton onClick={onClose}>
					<HighlightOffIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
export default DrawerTrucksHeader;
