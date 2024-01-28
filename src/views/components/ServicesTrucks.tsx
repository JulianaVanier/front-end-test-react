import * as React from "react";
import DrawerTrucks from "./fields/containers/DrawerTrucks";

type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
	setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
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
                <DrawerTrucks
                    listTrucks={props.listTrucks}
                    setListTrucks={props.setListTrucks}
                    setIsSnackBarOpen={props.setIsSnackBarOpen}
                    setMessageSnackBar={props.setMessageSnackBar}
                    >
                </DrawerTrucks>
        </>
    );
}
export default ServicesTrucks;