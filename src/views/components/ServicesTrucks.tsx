import * as React from "react";
import DrawerTrucks from "./fields/containers/DrawerTrucks";
import { Box } from "@mui/material";


type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
    isSnackBarOpen: boolean,
	setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
	messageSnackBar: string,
	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>
}

type Truck = {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
};

const ServicesTrucks: React.FC<ServicesTrucksProps> = (props) => {



    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <DrawerTrucks
                    listTrucks={props.listTrucks}
                    setListTrucks={props.setListTrucks}
                    isSnackBarOpen={props.isSnackBarOpen}
                    setIsSnackBarOpen={props.setIsSnackBarOpen}
                    messageSnackBar={props.messageSnackBar}
                    setMessageSnackBar={props.setMessageSnackBar}
                    >
                </DrawerTrucks>
            </Box>
        </>
    );
}
export default ServicesTrucks;