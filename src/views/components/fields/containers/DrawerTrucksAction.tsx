import { AppBar, Toolbar, Button, Box } from "@mui/material";

// type DrawerTrucksActionProps = {
// 	onSave:()=>void,
// }

// const DrawerTrucksAction: React.FC<DrawerTrucksActionProps> = (props) => {

export default function  DrawerTrucksAction() {

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Button variant="contained" type="button">Cancel</Button>
				<Box sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 1 }} />
				{/* <Button variant="contained" type="submit" onClick={props.onSave}>Save</Button> */}
				<Button variant="contained" type="submit" >Save</Button>
			</Toolbar>
		</AppBar>
	);
}

// export default DrawerTrucksAction;
