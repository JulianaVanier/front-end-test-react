import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../../services/LocalStorageManager';
import HeaderTrucks from './HeaderTrucks';
import ServicesTrucks from './ServicesTrucks';
import ListTrucks from './ListTrucks';


type TruckListViewProps = {
	drawerAutoOpen: boolean
}


type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


	const TruckListView: React.FC<TruckListViewProps> = (props) => {
	
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
			<ServicesTrucks listTrucks={listTrucks} setListTrucks={setListTrucks} drawerAutoOpen={props.drawerAutoOpen}></ServicesTrucks>
			<ListTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ListTrucks>
		</>
	)
}
export default TruckListView;


