import { Typography } from "@mui/material";

export default function Header() {
	return (
		<>
			<Typography
				variant="h5"
				color="text.primary"
				sx={{
					alignSelf: "left",
					padding: "0.7rem",
				}}
			>
				Front End Test - React
			</Typography>
		</>
	);
}
