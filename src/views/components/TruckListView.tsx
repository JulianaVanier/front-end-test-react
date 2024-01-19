import { useEffect, useState } from 'react';
import { LocalStorageManager } from '../../services/LocalStorageManager';
import HeaderTrucks from './HeaderTrucks';
import ServicesTrucks from './ServicesTrucks';
import ListTrucks from './ListTrucks';
import { useNavigate } from 'react-router-dom';

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


// export default function TruckListView({autoOpen}:{autoOpen: boolean}) {
	const TruckListView: React.FC<TruckListViewProps> = (props) => {
	
	const storage: LocalStorageManager = new LocalStorageManager();

	// Get inf from LocalStorage
	const storedTrucks = storage.GetAsJSON("Trucks");
	const [listTrucks, setListTrucks] = useState<Truck[]>(storedTrucks || []); 

	const navigate = useNavigate();

	
	// EDIT ITEM ******************
	// const editItem = (truck: Truck) => {
	// 	console.log(truck);
	// 	navigate('/edit', {state: truck});
	// 	// history.push('/edit')
	// 	// history.push({ pathname: "/edit", state: truck });

    //     // trucksList.EditTruck(truck);
    //     // props.setListTrucks(trucksList.GetList());
	// 	// console.log("list aquiiii",props.listTrucks);
    // };
	// ******************

	useEffect(() => {
		console.log("new list Inside useEffect", listTrucks);
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


