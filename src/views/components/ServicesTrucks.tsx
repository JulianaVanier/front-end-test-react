import { Box } from "@mui/material";
import DrawerTrucks from "./fields/containers/DrawerTrucks";
import SnackBarTrucks from "./fields/SnackBarTrucks";
import * as React from "react";

type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
}

type Truck = {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
};

const ServicesTrucks: React.FC<ServicesTrucksProps> = (props) => {

    const [isSnackBarOpen, setIsSnackBarOpen] = React.useState<boolean>(false);
    const [messageSnackBar, setMessageSnackBar] = React.useState<string>("test");

    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <DrawerTrucks
                    listTrucks={props.listTrucks}
                    setListTrucks={props.setListTrucks}
                    isSnackBarOpen={isSnackBarOpen}
                    setIsSnackBarOpen={setIsSnackBarOpen}
                    messageSnackBar={messageSnackBar}
                    setMessageSnackBar={setMessageSnackBar}
                    >
                </DrawerTrucks>
                <SnackBarTrucks
                    isSnackBarOpen={isSnackBarOpen}
                    setIsSnackBarOpen={setIsSnackBarOpen}
                    messageSnackBar={messageSnackBar}
                    setMessageSnackBar={setMessageSnackBar} >
                </SnackBarTrucks>
            </Box>
        </>
    );
}
export default ServicesTrucks;