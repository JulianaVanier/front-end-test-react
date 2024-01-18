import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Button } from "@mui/base";
import { TruckClass } from "../../services/TruckList";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { LocalStorageManager } from "../../services/LocalStorageManager";
import { useState } from "react";



type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>,
	// editItem: (truck: Truck) => void
}

type Truck = {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
}

const ListTrucks: React.FC<ServicesTrucksProps> = (props) => {

	// export default function ListTrucks() {


	// // GET DATA FROM LOCALSTORAGE
	// const storage: LocalStorageManager = new LocalStorageManager();

	// const storedTrucks = storage.GetAsJSON("Trucks");
	// console.log('storedTrucks', storedTrucks)

	// const [listTrucks, setListTrucks] = useState(storedTrucks);
	// // const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []); 

	// // const navigate = useNavigate();

	
	// // EDIT ITEM ******************
	// // const editItem = (truck: Truck) => {
	// // 	console.log(truck);
	// // 	navigate('/edit', {state: truck});
	// // 	// history.push('/edit')
	// // 	// history.push({ pathname: "/edit", state: truck });

    // //     // trucksList.EditTruck(truck);
    // //     // props.setListTrucks(trucksList.GetList());
	// // 	// console.log("list aquiiii",props.listTrucks);
    // // };
	// // ******************

	// useEffect(() => {
	// 	// console.log("new list Inside useEffect", listTrucks);

	// 	storage.SetLocalStorageFromArray("Trucks", listTrucks);
	// }, [storedTrucks, listTrucks]);

	// // useEffect(() => {
	// // 	// storage.GetAsJSON("Trucks");

	// // }, [listTrucks, storage]);

	// // ************************************************************************








	// const location = useLocation();
	const navigate = useNavigate();
	// const history = useHistory();


	const trucksList: TruckClass = new TruckClass();

	// DELETE ITEM ******************
	const DeleteItem = (unique_id: string) => {


		console.log(unique_id);
		trucksList.SetList([...props.listTrucks]);
		trucksList.RemoveTruck(unique_id);
		props.setListTrucks(trucksList.GetList());
	};
	// ******************

	// EDIT ITEM ******************
		const EditItem = (truck: Truck) => {
		console.log(truck);
		navigate('/edit', {state: truck});
		// history.push('/edit')
		// history.push({ pathname: "/edit", state: truck });



        // trucksList.EditTruck(truck);
        // props.setListTrucks(trucksList.GetList());
		// console.log("list aquiiii",props.listTrucks);
    };
	// ******************


	return (
		<Box sx={{ width: "100%" }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={{ color: "white" }}>Make</TableCell>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Is Available</TableCell>
							<TableCell align="center">Purchase Date</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {props.listTrucks.map((item: Truck) => ( */}
						{props.listTrucks.map((item: Truck) => (
							<TableRow
								key={item.unique_id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.make}
								</TableCell>
								<TableCell align="center">{item.id}</TableCell>
								<TableCell align="center">{ item.isAvailable ? "Yes" : "No"}</TableCell>
								<TableCell align="center">{item.purchaseDate}</TableCell>
								<TableCell align="center">
									<Button onClick={() => { EditItem(item);}}>Edit</Button>
									<Button onClick={() => { DeleteItem(item.unique_id);}}>Delete</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
export default ListTrucks;