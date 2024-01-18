import { Box } from "@mui/material";
import DrawerTrucks from "./fields/containers/DrawerTrucks";

type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>
}

type Truck =  {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};

const ServicesTrucks: React.FC<ServicesTrucksProps> = (props) => {

    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <DrawerTrucks listTrucks={props.listTrucks} setListTrucks={props.setListTrucks}></DrawerTrucks>
            </Box>
        </>
    );
}
export default ServicesTrucks;