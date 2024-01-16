import { useEffect, useState } from 'react';
import './App.css'
import { LocalStorageManager } from './services/LocalStorageManager';
import { TruckList } from './services/TruckList';
import HeaderTrucks from './views/components/HeaderTrucks';
import ListTrucks from './views/components/ListTrucks';
import ServicesTrucks from './views/components/ServicesTrucks';

interface Truck {
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};

function App() {

	// let trucksList: TruckList = new TruckList();
	let storage: LocalStorageManager = new LocalStorageManager();

	// trucksList.SetList(storage.GetAsJSON("Trucks"));
	const storedItems = storage.GetAsJSON("Trucks");
	// let [listOfTrucks, setListOfTrucks] = useState<Truck[]>([]); 
	let [listTrucks, setListTrucks] = useState(storedItems); 


	// trucksList.SetList([{
	// 	make: "Cartepillar",
	// 	id: "123abc",
	// 	isAvailable: true,
	// 	purchaseDate: "01/01/1999"
	// },
	// {
	// 	make: "Belaz",
	// 	id: "345def",
	// 	isAvailable: true,
	// 	purchaseDate: "01/02/1999"
	// },
	// {
	// 	make: "Komatsu",
	// 	id: "678ghi",
	// 	isAvailable: false,
	// 	purchaseDate: "01/03/1999"
	// }]);

	// storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());


	// useEffect(() =>{
	// 	// storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());

	// 	// let newListOfTrucks = storage.GetAsJSON("Trucks");
	// 	trucksList.SetList(storage.GetAsJSON("Trucks"));

	// 	setListOfTrucks(trucksList.GetList());

	// 	// trucksList.RemoveTruck("345def");
	// },[]);

	// trucksList.SetList(listOfTrucks);
	// console.log("result of setListOfTrucks get list", listOfTrucks);
	// console.log("result of truckList GET", trucksList.GetList());

	useEffect(() => {
		console.log("new list Inside useEffect", listTrucks);
		storage.SetLocalStorageFromArray("Trucks", listTrucks);
	}, [listTrucks]);




	// const handleDelete = (id: any): void => {

	// 	// console.log("id", id);

	// 	trucksList.RemoveTruck(id);
	// 	console.log("new list after remove", trucksList.GetList());
	// 	setListOfTrucks(trucksList.GetList());
	// 	console.log("aqui tem que ter lista atualizada", listOfTrucks);
	// 	// storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());
	// 	// console.log("new list after remove", trucksList.GetList());

	// 	// setListOfTrucks(trucksList.GetList());

	// 	storage.SetLocalStorageFromArray("Trucks", listOfTrucks);
		
	// 	// console.log("updatedList", listOfTrucks);
	// 	// setListOfTrucks(trucksList.GetList());
	// 	// storage.SetLocalStorageFromArray("Trucks", updatedList);
	// 	// console.log("no handleDelete", trucksList.GetList());

	// };


	// console.log(listOfTrucks);


	return (
		<>
			<HeaderTrucks></HeaderTrucks>
			<ServicesTrucks listTrucks={listTrucks}></ServicesTrucks>
			<ListTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ListTrucks>
		</>
	)
}

export default App
