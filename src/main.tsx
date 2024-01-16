import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import DrawerTrucks from './views/components/fields/containers/DrawerTrucks.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element: (<div><App/></div>),
	},
	{
		path: "/create",
		element: (<div><DrawerTrucks/></div>)
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

