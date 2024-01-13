// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { Button } from "@mui/base";
// import { InputProps } from "@mui/base";



export default function TextBoxTrucks() {
	// const [idValue, setIdValue] = useState("");
	

	// function handleSubmission() {
	// 	// localStorage.clear();
	// 	let dataTruck = {
	// 		DatePurchase: idValue,
	// 	};
	// 	localStorage.setItem("userInfo", JSON.stringify(dataTruck));
	// 	alert("Data recorded!");
	// 	window.location.reload();
	// }

	// const handleIdChange =(event)=>{
	//     const newValue = event.target.value;
	//     const reqBox = /^[A-Za-z]{0,3}[0-9]{0,3}$/;
	//     if (reqBox.test(newValue) || newValue ===''){
	//         setIdValue(newValue);
	//     }
	// }

	return (
		<>
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					required
					id="outlined-required-firstName"
					label="Id"
					// value={idValue}
					// onChange={(e) => setIdValue(e.target.value)}
					inputProps={{ maxLength: 6 }}
				/>
			</Box>
		</>
	);
}
