import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
	{
		path: "/",
		element: (
		<div>
			<App/>
		</div>
		),
	},
	// {
	// 	path: "/create",
	// 	element: (<div><TrucksDetailWrapper/></div>)
	// }
	// {
	// 	path: "/edit",
	// 	// render={(props) => <Dashboard {...props} isAuthed={true} />}

	// 	// path:"/edit", element:{<TrucksDetailWrapper listTrucks={listTrucks} setListTrucks={setListTrucks} />} 
		
	// 	// render={(props) => <TrucksDetailWrapper {...props} listTrucks={listTrucks} setListTrucks={setListTrucks} />}
	// 	element: (
	// 	<div>
	// 		<TrucksDetailWrapper/>
	// 	</div>
	// 	)
	// }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);




// <React.StrictMode>
// 	<App />
// </React.StrictMode>,

