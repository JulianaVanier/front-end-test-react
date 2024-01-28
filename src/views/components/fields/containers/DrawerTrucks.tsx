import * as React from "react";
import { Drawer, Button } from "@mui/material";
import TrucksDetailWrapper from "../../TrucksDetailWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


type ServicesTrucksProps = {
	listTrucks: Truck[],
	setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>,
	setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>,
}

type Truck = {
	unique_id: string,
	make: string,
	id: string,
	isAvailable: boolean,
	purchaseDate: string
};


const DrawerTrucks: React.FC<ServicesTrucksProps> = (props) => {

	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

	useEffect(() => {
		if (location.pathname === '/edit') {
			setIsDrawerOpen(true);
		}

	}, []);

	return (
		<>
			{(['right'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button sx={{ ml:2, mb:3}} variant="contained" onClick={() => { setIsDrawerOpen(true); navigate('/create') }}>
						Insert
					</Button>
					<Drawer
						anchor={anchor}
						open={isDrawerOpen}
						onClose={() => { setIsDrawerOpen(false); navigate("/"); console.log('close') }}
					>
						<TrucksDetailWrapper
							listTrucks={props.listTrucks}
							setListTrucks={props.setListTrucks}
							setIsDrawerOpen={setIsDrawerOpen}
							setIsSnackBarOpen={props.setIsSnackBarOpen}
							setMessageSnackBar={props.setMessageSnackBar}
						>
						</TrucksDetailWrapper>
					</Drawer>
				</React.Fragment>
			))}
		</>
	);
}
export default DrawerTrucks;