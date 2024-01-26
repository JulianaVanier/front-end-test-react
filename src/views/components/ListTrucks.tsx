import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { TruckClass } from "../../services/TruckList";
import { useNavigate } from "react-router-dom";
import { LocalStorageManager } from '../../services/LocalStorageManager';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useEffect } from 'react';



import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';


type ServicesTrucksProps = {
	listTrucks: Truck[],
	setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>,
	// editItem: (truck: Truck) => void
	isSnackBarOpen: boolean,
	setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
	messageSnackBar: string,
	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>,
	openAlertDialog: boolean,
	setOpenAlertDialog: React.Dispatch<React.SetStateAction<boolean>>,
	deleteItemAlert: boolean,
	setDeleteItemAlert: React.Dispatch<React.SetStateAction<boolean>>,
	uniqueIdDelete: string,
	setuniqueIdDelete: React.Dispatch<React.SetStateAction<string>>
}

type Truck = {
	unique_id: string,
	make: string,
	id: string,
	isAvailable: boolean,
	purchaseDate: string
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));


const ListTrucks: React.FC<ServicesTrucksProps> = (props) => {


	// const location = useLocation();
	const navigate = useNavigate();
	// const history = useHistory();


	const trucksList: TruckClass = new TruckClass();
	const storage: LocalStorageManager = new LocalStorageManager();



	useEffect (() => {
		if(props.deleteItemAlert===true){
			handleDeleteItem(props.uniqueIdDelete)
		}

	}, [props.deleteItemAlert]);

	// DELETE ITEM ******************
	// const DeleteItem = async (unique_id: string) => {

	// 	props.setuniqueIdDelete(unique_id);
	// 	console.log('uniqueIdDelete inside function delete', props.uniqueIdDelete)
	// 	props.setOpenAlertDialog(true);

	// 	console.log('props.deleteItemAlert', props.deleteItemAlert)

	// 	if (props.deleteItemAlert === true) {
	// 		console.log('delete Item alert', props.deleteItemAlert);

	// 	await handleDeleteItem(props.uniqueIdDelete);

	// 	props.setIsSnackBarOpen(true);
	// 	props.setMessageSnackBar('The truck has been successfully deleted');
	// 	}

	// };


	const DeleteItem = async (unique_id: string) => {

		props.setuniqueIdDelete(unique_id);
		console.log('uniqueIdDelete inside function delete', props.uniqueIdDelete)
		props.setOpenAlertDialog(true);

		console.log('props.deleteItemAlert', props.deleteItemAlert)


		// if (props.deleteItemAlert === true) {
		// 	console.log('props.deleteItemAlert inside condition before await', props.deleteItemAlert)

		// 	await handleDeleteItem(props.uniqueIdDelete);
		// 	props.setIsSnackBarOpen(true);
		// 	props.setMessageSnackBar('The truck has been successfully deleted');

		// }



		// if (props.deleteItemAlert === true) {
		// 	console.log('delete Item alert', props.deleteItemAlert);

		// handleDeleteItem(props.uniqueIdDelete);

		// props.setIsSnackBarOpen(true);
		// props.setMessageSnackBar('The truck has been successfully deleted');
		// }

	};

	// ******************
	// const onDelete = (unique_id: string) => {
	// 	console.log('unique_id', unique_id)
	// 	uniqueIdDelete = unique_id;
	// 	console.log('uniqueIdDelete', uniqueIdDelete)
	// 	props.setOpenAlertDialog(true);

	// };

	const handleDeleteItem = async (unique_id: string) => {
		console.log('unique_id inside handleDeleteItem', unique_id);
		trucksList.SetList([...props.listTrucks]);
		trucksList.RemoveTruck(unique_id);
		props.setListTrucks(trucksList.GetList());
		storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());
		props.setDeleteItemAlert(false);
		props.setIsSnackBarOpen(true);
		props.setMessageSnackBar('The truck has been successfully deleted');


	};

	// EDIT ITEM ******************
	const EditItem = (truck: Truck) => {
		navigate('/edit', { state: truck });
	};
	// ******************

	// let uniqueIdDelete: string;

	return (
		<Box sx={{ width: "100%" }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="a dense table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="center">Make</StyledTableCell>
							<StyledTableCell align="center">Id</StyledTableCell>
							<StyledTableCell align="center">Is Available</StyledTableCell>
							<StyledTableCell align="center">Purchase Date</StyledTableCell>
							<StyledTableCell align="center">Action</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {props.listTrucks.map((item: Truck) => ( */}
						{props.listTrucks.map((item: Truck) => (
							<TableRow hover
								key={item.unique_id}
							// sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<StyledTableCell component="th" scope="row">
									{item.make}
								</StyledTableCell>
								<StyledTableCell align="center">{item.id}</StyledTableCell>
								<StyledTableCell align="center">{item.isAvailable ? "Yes" : "No"}</StyledTableCell>
								<StyledTableCell align="center">{item.purchaseDate}</StyledTableCell>
								<StyledTableCell align="center">
									<Stack spacing={2} direction="row" display='flex' justifyContent='flex-end' >
										{/* <Button onClick={() => { EditItem(item); }}>Edit</Button>
										<Button onClick={() => { DeleteItem(item.unique_id); }}>Delete</Button> */}

										<IconButton aria-label="edit">
											<ModeIcon onClick={() => { EditItem(item); }}></ModeIcon>
										</IconButton>

										<IconButton aria-label="delete">
											<DeleteIcon onClick={() => {
												DeleteItem(item.unique_id);
											}}></DeleteIcon>
										</IconButton>
									</Stack>
								</StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box >
	);
}
export default ListTrucks;