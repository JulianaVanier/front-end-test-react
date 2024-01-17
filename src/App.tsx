import { useEffect, useState } from 'react';
import './App.css'
import { LocalStorageManager } from './services/LocalStorageManager';
import HeaderTrucks from './views/components/HeaderTrucks';
import ListTrucks from './views/components/ListTrucks';
import ServicesTrucks from './views/components/ServicesTrucks';

type Truck =  {
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


function App() {

	// let trucksList: TruckList = new TruckList();
	const storage: LocalStorageManager = new LocalStorageManager();

	// trucksList.SetList(storage.GetAsJSON("Trucks"));
	const storedTrucks = storage.GetAsJSON("Trucks");
	// let [listOfTrucks, setListOfTrucks] = useState<Truck[]>([]); 
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
