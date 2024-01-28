import * as React from "react";
import { useEffect, useState } from "react";
import { LocalStorageManager } from "../../services/LocalStorageManager";
import HeaderTrucks from "./HeaderTrucks";
import ServicesTrucks from "./ServicesTrucks";
import ListTrucks from "./ListTrucks";
import SnackBarTrucks from "./fields/SnackBarTrucks";
import AlertDialogTrucks from "./fields/AlertDialogTrucks";

type Truck = {
	unique_id: string;
	make: string;
	id: string;
	isAvailable: boolean;
	purchaseDate: string;
};

const TruckListView = () => {
	// Get inf from LocalStorage
	const storage: LocalStorageManager = new LocalStorageManager();
	const storedTrucks = storage.GetAsJSON("Trucks");
	const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []);
	// ******************

	// Alert dialog
	const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);
	const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");
	// ******************

	// Alert dialog
	const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
	const [deleteItemAlert, setDeleteItemAlert] = React.useState(false);
	const [uniqueIdDelete, setuniqueIdDelete] = React.useState<string>("");
	// ******************

	useEffect(() => {
		storage.SetLocalStorageFromArray("Trucks", listTrucks);
	}, [listTrucks, storage]);

	return (
		<>
			<HeaderTrucks></HeaderTrucks>
			<ServicesTrucks
				listTrucks={listTrucks}
				setListTrucks={setListTrucks}
				setIsSnackBarOpen={setIsSnackBarOpen}
				setMessageSnackBar={setMessageSnackBar}
			></ServicesTrucks>
			<ListTrucks
				listTrucks={listTrucks}
				setListTrucks={setListTrucks}
				setIsSnackBarOpen={setIsSnackBarOpen}
				setMessageSnackBar={setMessageSnackBar}
				setOpenAlertDialog={setOpenAlertDialog}
				deleteItemAlert={deleteItemAlert}
				setDeleteItemAlert={setDeleteItemAlert}
				uniqueIdDelete={uniqueIdDelete}
				setuniqueIdDelete={setuniqueIdDelete}
			></ListTrucks>
			<SnackBarTrucks
				isSnackBarOpen={isSnackBarOpen}
				setIsSnackBarOpen={setIsSnackBarOpen}
				messageSnackBar={messageSnackBar}
			></SnackBarTrucks>
			<AlertDialogTrucks
				openAlertDialog={openAlertDialog}
				setOpenAlertDialog={setOpenAlertDialog}
				setDeleteItemAlert={setDeleteItemAlert}
			></AlertDialogTrucks>
		</>
	);
};
export default TruckListView;
