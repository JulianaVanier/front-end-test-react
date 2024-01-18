
// import { useEffect, useState } from 'react';
import './App.css';
import TruckListView from './views/components/TruckListView';
import { useLocation } from 'react-router-dom';


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {
// 	createBrowserRouter,
// 	RouterProvider,
// } from "react-router-dom";
// import TrucksDetailWrapper from './views/components/TrucksDetailWrapper';

// import { LocalStorageManager } from './services/LocalStorageManager';
// import HeaderTrucks from './views/components/HeaderTrucks';
// import ListTrucks from './views/components/ListTrucks';
// import ServicesTrucks from './views/components/ServicesTrucks';

// type Truck =  {
//     unique_id: string;
//     make: string;
//     id: string;
//     isAvailable: boolean;
//     purchaseDate: string;
// };

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: (<div><App/></div>),
// 	},
// 	// {
// 	// 	path: "/create",
// 	// 	element: (<div><TrucksDetailWrapper/></div>)
// 	// }
// 	// {
// 	// 	path: "/edit",
// 	// 	element: (<div><TrucksDetailWrapper /></div>)
// 	// }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// );
function App() {


	// const location = useLocation();
	// const data = location.state;

	// console.log('data', data)


	// const storage: LocalStorageManager = new LocalStorageManager();

	// const storedTrucks = storage.GetAsJSON("Trucks");
	// const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []); 

	// useEffect(() => {
	// 	console.log("new list Inside useEffect", listTrucks);
	// 	storage.SetLocalStorageFromArray("Trucks", listTrucks);
	// }, [listTrucks, storage]);

	return (
		// <>
		// 	<HeaderTrucks></HeaderTrucks>
		// 	<ServicesTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ServicesTrucks>
		// 	<ListTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></ListTrucks>
		// </>
		<TruckListView></TruckListView>

	)

}





export default App
