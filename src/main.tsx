import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import TruckListView from './views/components/TruckListView.tsx';



const router = createBrowserRouter([
	{
		path: "/",
		element: (
		<div>
			<App/>
		</div>
		),
	},
	{
		path: "/create",
		element: (
			<div>
				<App/>
			</div>
			),
	},
	{
		path: "/edit",
		element: (
		<div>
			<TruckListView/>
		</div>
		)
	}
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

