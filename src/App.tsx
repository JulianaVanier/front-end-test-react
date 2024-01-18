import { useEffect, useState } from 'react';
import './App.css'
import { LocalStorageManager } from './services/LocalStorageManager';
import HeaderTrucks from './views/components/HeaderTrucks';
import ListTrucks from './views/components/ListTrucks';
import ServicesTrucks from './views/components/ServicesTrucks';

type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


function App() {

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

export default App
