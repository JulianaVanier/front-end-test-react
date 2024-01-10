import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const make = [
  {
    value: "belaz",
    label: "Belaz",
  },
  {
    value: "caterpillar",
    label: "Caterpillar",
  },
  {
    value: "komatsu",
    label: "Komatsu",
  },
];

export default function SelectFieldTrucks() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <TextField required id="outlined-select-currency" select label="Type">
          {make.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </>
    </Box>
  );
}
