import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TrucksDetailWrapper from "../../TrucksDetailWrapper";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
}

type Truck =  {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
};


const DrawerTrucks: React.FC<ServicesTrucksProps> = (props) => {

	// const navigate = useNavigate();

	const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

	// function createItem(){
	// 	console.log('CREATE ITEM HERE');
	// 	navigate("/create");

	// }

	useEffect(() => {
		if (location.pathname  === '/edit'){
			// const data = location.state;
			setIsDrawerOpen(true);
			// console.log('data', data);
			// console.log('props.listTrucks', props.listTrucks);
		}
		
	}, []);


	return (
		<>
			{(['right'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button variant="contained" onClick={()=>{setIsDrawerOpen(true)}}>
						Insert
					</Button>
					<Drawer
						anchor={anchor}
						open={isDrawerOpen}
						onClose={()=>{setIsDrawerOpen(false); console.log('close')}}
					>
						<TrucksDetailWrapper listTrucks={props.listTrucks} setListTrucks={props.setListTrucks} setIsDrawerOpen={setIsDrawerOpen}></TrucksDetailWrapper>
					</Drawer>
				</React.Fragment>
			))}
		</>
	);
}
export default DrawerTrucks;