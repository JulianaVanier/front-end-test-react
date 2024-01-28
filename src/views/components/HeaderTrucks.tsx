import { Typography } from "@mui/material";

export default function HeaderTrucks() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          m: 2,
          padding: "0.7rem",
          fontWeight: "bold", fontSize: 30, color: "grey", fontFamily: "sans-serif"
        }}
      >
        Front End Newtrax
      </Typography>
    </>
  );
}
