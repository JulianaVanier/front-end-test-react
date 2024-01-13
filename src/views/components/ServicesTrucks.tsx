import { Box } from "@mui/material";
import DrawerTrucks from "./fields/containers/DrawerTrucks";

export default function ServicesTrucks() {
    return (
        <>
            <Box sx={{ width: '100%', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <DrawerTrucks></DrawerTrucks>
            </Box>
        </>
    );
}