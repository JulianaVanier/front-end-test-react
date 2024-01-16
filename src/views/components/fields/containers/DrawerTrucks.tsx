import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TrucksDetailWrapper from "../../TrucksDetailWrapper";

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerTrucks({ listTrucks, setListTrucks }) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === "keydown" &&
					((event as React.KeyboardEvent).key === "Tab" ||
						(event as React.KeyboardEvent).key === "Shift")
				) {
					return;
				}

				setState({ ...state, [anchor]: open });
			};

	return (
		<>
			{(["right"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<Button variant="contained" onClick={toggleDrawer(anchor, true)}>
						Insert
					</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						<TrucksDetailWrapper listTrucks={listTrucks} setListTrucks={setListTrucks}></TrucksDetailWrapper>
					</Drawer>
				</React.Fragment>
			))}
		</>
	);
}
