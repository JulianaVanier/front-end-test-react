import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Button, FormControl } from "@mui/base";

// const maxDateLimite = dayjs('2000-12-31').toDate();

// const [datePurchase, setDatePurchase] = useState("");

// function handleSubmission(){
//   localStorage.clear();
//   let dataTruck = {
//     DatePurchase: datePurchase,
//   };
//   localStorage.setItem("userInfo", JSON.stringify(dataTruck));
//   alert("Data recorded!");
//   window.location.reload();
// }

export default function DatePickerTrucks() {
  return (
    <FormControl>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Purchase Date"
          // onChange={(e) => setDatePurchase(e.target.value)}
          // value={datePurchase}
        />
      </DemoContainer>
    </LocalizationProvider>
    {/* <Button onClick={handleSubmission}>Submit</Button> */}
    </FormControl>
  );
}
