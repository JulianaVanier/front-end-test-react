import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TrucksDetailWrapper from "../../TrucksDetailWrapper";

type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
}

type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


const DrawerTrucks: React.FC<ServicesTrucksProps> = (props) => {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

	return (
		<>
			{(['right'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button variant="contained" onClick={()=>setIsDrawerOpen(true)}>
						Insert
					</Button>
					<Drawer
						anchor={anchor}
						open={isDrawerOpen}
						onClose={()=>setIsDrawerOpen(false)}
					>
						<TrucksDetailWrapper listTrucks={props.listTrucks} setListTrucks={props.setListTrucks}></TrucksDetailWrapper>
					</Drawer>
				</React.Fragment>
			))}
		</>
	);
}
export default DrawerTrucks;