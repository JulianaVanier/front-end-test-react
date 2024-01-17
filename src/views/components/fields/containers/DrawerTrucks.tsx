import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TrucksDetailWrapper from "../../TrucksDetailWrapper";
import { Box } from "@mui/material";


export default function DrawerTrucks({ listTrucks, setListTrucks }) {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

	return (
		<>
			{(['right'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button variant="contained" onClick={()=>setIsDrawerOpen(true)}>
						Insert
					</Button>
					<Drawer
						anchor={anchor}
						open={isDrawerOpen}
						onClose={()=>setIsDrawerOpen(false)}
					>
						<TrucksDetailWrapper listTrucks={listTrucks} setListTrucks={setListTrucks}></TrucksDetailWrapper>
					</Drawer>
				</React.Fragment>
			))}
		</>
	);
}
