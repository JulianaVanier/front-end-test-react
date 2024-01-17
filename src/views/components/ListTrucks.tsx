import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Button } from "@mui/base";
import { TruckList } from "../../services/TruckList";

export default function ListTrucks({ listTrucks, setListTrucks }) {



	let trucksList: TruckList = new TruckList();
	// let storage: LocalStorageManager = new LocalStorageManager();

	// let list = storage.GetAsJSON("Trucks");


	// function deleteItem(id: string){
	// 	// trucksListprop.AddTruck({
	// 	// 	make: "do teste",
	// 	// 	id: "123abc",
	// 	// 	isAvailable: true,
	// 	// 	purchaseDate: "01/01/1999"	
	// 	// })

	// 	trucksList.SetList(list);
	// 	trucksList.RemoveTruck(id);
	// 	// let newNewList = trucksList.GetList();

	// 	console.log("list", trucksList.GetList());
	// 	// storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());
	// }

	// const AddNewItemInList = () => {
	// 	const newList = [...list];
	// 	newList.push({
	// 		"make": "bolinha",
	// 		"id": "123abc",
	// 		"isAvailable": true,
	// 		"purchaseDate": "01/01/1999"
	// 	});
	// 	setListOfTrucks(newList); 
	// 	// setListOfTrucks([{
	// 	// 	"make": "Ovo",
	// 	// 	"id": "123abc",
	// 	// 	"isAvailable": true,
	// 	// 	"purchaseDate": "01/01/1999"
	// 	// }]);
	// 	// console.log("Funcao set list", setListOfTrucks);

	// };

	const DeleteItem = (unique_id: string) => {
		console.log(unique_id);
		trucksList.SetList([...listTrucks]);
		trucksList.RemoveTruck(unique_id);
		setListTrucks(trucksList.GetList());
	};

	const EditItem = (truck: any) => {
		console.log(truck);
        trucksList.EditTruck(truck);
        setListTrucks(trucksList.GetList());
		console.log("list aquiiii",listTrucks);
    };

	return (
		<Box sx={{ width: "100%" }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow
							sx={{
								"&:first-child td, &:first-child th": {
									bgcolor: "primary.main",
									color: "background.paper",
								},
							}}
						>
							<TableCell sx={{ color: "white" }}>Make</TableCell>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Is Available</TableCell>
							<TableCell align="center">Purchase Date</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{listTrucks.map((item: any) => (
							<TableRow
								key={item.make}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.make}
								</TableCell>
								<TableCell align="center">{item.id}</TableCell>
								<TableCell align="center">{item.isAvailable}</TableCell>
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
