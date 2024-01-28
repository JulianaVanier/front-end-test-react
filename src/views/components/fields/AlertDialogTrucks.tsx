import * as React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

type AlertDialogTrucksProps = {
	openAlertDialog: boolean;
	setOpenAlertDialog: React.Dispatch<React.SetStateAction<boolean>>;
	setDeleteItemAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const AlertDialogTrucks: React.FC<AlertDialogTrucksProps> = (props) => {
	const handleClose = () => {
		props.setOpenAlertDialog(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={props.openAlertDialog}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Confirme Delete"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to delete this item?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							props.setDeleteItemAlert(true);
							props.setOpenAlertDialog(false);
						}}
						autoFocus
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
export default AlertDialogTrucks;
