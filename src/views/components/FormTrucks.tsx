import SelectFieldTrucks from "./fields/SelectFieldTrucks";
import SwitchTrucks from "./fields/SwitchTrucks";
import { Divider, Grid } from "@mui/material";
import TextBoxTrucks from "./fields/TextBoxTrucks";
import DatePickerTrucks from "./fields/DatePickerTrucks";

// useEffect(() => {
//   localStorage.setItem("dataTruck", JSON.stringify(name));
// }, [dataTruck]);

export default function FormTrucks() {
	return (
		<>
					<SwitchTrucks></SwitchTrucks>
					<Divider sx={{ fontWeight: "bold" }}>Informations</Divider>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<SelectFieldTrucks></SelectFieldTrucks>
						</Grid>
						<Grid item xs={6}>
							<TextBoxTrucks></TextBoxTrucks>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<DatePickerTrucks></DatePickerTrucks>
						</Grid>
						<Grid item xs={6}></Grid>
					</Grid>
		</>
	);
}
