import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../../services/LocalStorageManager';
import HeaderTrucks from './HeaderTrucks';
import ServicesTrucks from './ServicesTrucks';
import ListTrucks from './ListTrucks';
import * as React from 'react';


type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


	const TruckListView = () => {
	
	const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);
	const [messageSnackBar, setMessageSnackBar] = React.useState<string>("");
	
	const storage: LocalStorageManager = new LocalStorageManager();

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
			></ListTrucks>
		</>
	)
}
export default TruckListView;


