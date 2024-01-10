import SelectFieldTrucks from "./fields/SelectFieldTrucks";
import SwitchTrucks from "./fields/SwitchTrucks";
import { Box, Paper, Divider, Grid } from "@mui/material";
import TextBoxTrucks from "./fields/TextBoxTrucks";


export default function FormTrucks() {
  return (
    <>
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Paper
          sx={{
            p: "30px",
            width: "100%",
            height: "20rem",
            overflowY: "auto",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-16px",
            }}
          >
            <SwitchTrucks></SwitchTrucks>
          </Box>
          <Divider sx={{ fontWeight: 'bold' }}>Informations</Divider>
						<Grid container spacing={2}>
							<Grid item xs={6}>
                <SelectFieldTrucks></SelectFieldTrucks>
								{/* <NTSelectField control={control} name={'type'} label={t('Type')} required fieldError={errors.type} options={typeList} disabled={props.id !== CREATE}></NTSelectField> */}
							</Grid>
							<Grid item xs={6}>
                <TextBoxTrucks></TextBoxTrucks>
							</Grid>
						</Grid>

        </Paper>
      </Box>
    </>
  );
}
