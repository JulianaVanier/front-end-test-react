import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../../services/LocalStorageManager';
import HeaderTrucks from './HeaderTrucks';
import ServicesTrucks from './ServicesTrucks';
import ListTrucks from './ListTrucks';


type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


export default function TruckListView() {
	
	const storage: LocalStorageManager = new LocalStorageManager();

	const storedTrucks = storage.GetAsJSON("Trucks");
	const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []); 

	useEffect(() => {
		console.log("new list Inside useEffect", listTrucks);
		storage.SetLocalStorageFromArray("Trucks", listTrucks);
	}, [listTrucks, storage]);

	return (
		<>
			<HeaderTrucks></HeaderTrucks>
			<ServicesTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ServicesTrucks>
			<ListTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ListTrucks>
		</>
	)
}



