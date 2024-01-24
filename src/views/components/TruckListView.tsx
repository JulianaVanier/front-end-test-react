import * as React from 'react';
import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../../services/LocalStorageManager';
import HeaderTrucks from './HeaderTrucks';
import ServicesTrucks from './ServicesTrucks';
import ListTrucks from './ListTrucks';
import SnackBarTrucks from './fields/SnackBarTrucks';
import AlertDialogTrucks from './fields/AlertDialogTrucks';

// type TruckListViewProps = {
//     isSnackBarOpen: boolean,
// 	setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
// 	messageSnackBar: string,
// 	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>
// }

type Truck = {
	unique_id: string;
	make: string;
	id: string;
	isAvailable: boolean;
	purchaseDate: string;
};


const TruckListView = () => {
// const TruckListView: React.FC<TruckListViewProps> = (props) => {

	const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);
	const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");

	const storage: LocalStorageManager = new LocalStorageManager();

	// Alert dialog
	const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
	const [deleteItemAlert, setDeleteItemAlert] = React.useState(false);
	// ******************

	// Get inf from LocalStorage
	const storedTrucks = storage.GetAsJSON("Trucks");
	const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []);


	useEffect(() => {
		storage.SetLocalStorageFromArray("Trucks", listTrucks);
	}, [listTrucks, storage]);

	return (
		<>
			<HeaderTrucks></HeaderTrucks>
			<ServicesTrucks
				listTrucks={listTrucks}
				setListTrucks={setListTrucks}
				isSnackBarOpen={isSnackBarOpen}
				setIsSnackBarOpen={setIsSnackBarOpen}
				messageSnackBar={messageSnackBar}
				setMessageSnackBar={setMessageSnackBar}
			></ServicesTrucks>
			<ListTrucks
				listTrucks={listTrucks}
				setListTrucks={setListTrucks}
				isSnackBarOpen={isSnackBarOpen}
				setIsSnackBarOpen={setIsSnackBarOpen}
				messageSnackBar={messageSnackBar}
				setMessageSnackBar={setMessageSnackBar}
				openAlertDialog={openAlertDialog}
				setOpenAlertDialog={setOpenAlertDialog}
				deleteItemAlert={deleteItemAlert}
				setDeleteItemAlert={setDeleteItemAlert}
			></ListTrucks>
			<SnackBarTrucks
				isSnackBarOpen={isSnackBarOpen}
				setIsSnackBarOpen={setIsSnackBarOpen}
				messageSnackBar={messageSnackBar}
				setMessageSnackBar={setMessageSnackBar} >
			</SnackBarTrucks>
			<AlertDialogTrucks
				openAlertDialog={openAlertDialog}
				setOpenAlertDialog={setOpenAlertDialog}
				deleteItemAlert={deleteItemAlert}
				setDeleteItemAlert={setDeleteItemAlert}
			></AlertDialogTrucks>
			
		</>
	)
}
export default TruckListView;


