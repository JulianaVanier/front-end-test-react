import { Box } from "@mui/material";
import DrawerTrucks from "./fields/containers/DrawerTrucks";

// type DrawerTrucksActionProps = {
// 	onSave:()=>void,
// }

export default function ServicesTrucks({ listTrucks, setListTrucks }) {
    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <DrawerTrucks listTrucks={listTrucks} setListTrucks={setListTrucks}></DrawerTrucks>
            </Box>
        </>
    );
}