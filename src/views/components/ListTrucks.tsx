import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Button } from "@mui/base";


export default function ListTrucks({obj, onDelete}) {

	// let trucksList: TruckList = new TruckList();
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
						{obj.map((obj: any) => (
							<TableRow
								key={obj.make}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{obj.make}
								</TableCell>
								<TableCell align="center">{obj.id}</TableCell>
								<TableCell align="center">{obj.isAvailable}</TableCell>
								<TableCell align="center">{obj.purchaseDate}</TableCell>
								<TableCell align="center">
									<Button>Edit</Button>
									<Button onClick={() => onDelete(obj.id)}>Delete</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
