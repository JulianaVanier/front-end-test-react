import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import DrawerTrucksAction from "./fields/containers/DrawerTrucksAction";
// import SelectFieldTrucks from "./fields/SelectFieldTrucks";
import SwitchTrucks from "./fields/SwitchTrucks";
import { Box, Paper, Divider, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
// import type {
//     SubmitHandler,
//     DefaultValues
// } from "react-hook-form";
import { TextField } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Resolver } from "react-hook-form";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TruckList } from "../../services/TruckList";





// useEffect(() => {
//   localStorage.setItem("dataTruck", JSON.stringify(name));
// }, [dataTruck]);




// export type FormValues = {
//     TextField: string;
//     // Datepicker: Date;
//     // ReactSelect: NestedValue<{ value: string; label: string }>;
// };

// export const defaultValues: DefaultValues<FormValues> = {
//     TextField: "",
//     // Datepicker: new Date(),
//     // ReactSelect: { value: "cartepillar", label: "Cartepillar" },
// };



// export default function TurcksDetailWrapper() {

//     const {
//         handleSubmit,
//         register,
//         reset,
//         control,
//         formState: { errors }
//     } = useForm<FormValues>({
//         defaultValues
//     });

//     const onSubmit: SubmitHandler<FormValues> = (data) =>
//         alert(JSON.stringify(data));

//     // console.log(errors);

//     // const onSubmit = handleSubmit((data) => console.log(data))

//     // const cloneWithRegister = (child: React.ReactElement) =>
//     // React.cloneElement(child,{register});

//     return (
//         <>
//             <DrawerTrucksHeader />

//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Box
//                     display={"flex"}
//                     height={"100%"}
//                     flexDirection={"column"}
//                     justifyContent={"space-between"}
//                 >
//                     <Paper
//                         sx={{
//                             p: "30px",
//                             // width: "100%",
//                             height: "20rem",
//                             overflowY: "auto",
//                             flexGrow: 1,
//                         }}
//                     >
//                         <SwitchTrucks />

//                         <Divider sx={{ fontWeight: "bold" }}>Informations</Divider>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                                 <SelectFieldTrucks />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Box
//                                     component="form"
//                                     sx={{
//                                         "& .MuiTextField-root": { m: 1, width: "25ch" },
//                                     }}
//                                     noValidate
//                                     autoComplete="off"
//                                 >
//                                     <Controller
//                                         render={({ field }) => <TextField {...field} />}
//                                         name="TextField"
//                                         control={control}
//                                     />
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                         <Grid container spacing={2}>
//                             <Grid item xs={6}>
//                                 {/* <Controller
//                                     control={control}
//                                     name="Datepicker"
//                                     render={({ field: { value, ...fieldProps } }) => {
//                                         return (
//                                             <DatePicker
//                                                 {...fieldProps}
//                                                 className="input"
//                                                 // placeholderText="Select date"
//                                                 // selected={value}
//                                             />
//                                         );
//                                     }}
//                                 /> */}
//                             </Grid>
//                             <Grid item xs={6}></Grid>
//                         </Grid>
//                     </Paper>
//                 </Box>

//                 <DrawerTrucksAction />
//             </form>

//         </>
//     );
// }


// *****************************

type FormValues = {
    typeMake: string
    id: string
    make: { label: string; value: string }
    purchaseDate: string
}

const resolver: Resolver<FormValues> = async (values) => {
    // return {
    //     values: values.typeMake ? values : {},
    //     errors: !values.typeMake
    //         ? {
    //             typeMake: {
    //                 type: "required",
    //                 message: "This is required.",
    //             },
    //         }
    //         : {},
    // }

    return {
        values: values,
        errors: {}
    }
}


export default function TurcksDetailWrapper({ listTrucks, setListTrucks }) {

    let trucksList: TruckList = new TruckList();
    trucksList.SetList([...listTrucks]);
    let myTruck = trucksList.GetTruck("1234");

	const NewItem = (truck: any) => {
		trucksList.AddTruck(truck);
		setListTrucks(trucksList.GetList());
	};

    const EditItem = (truck: any) => {
		trucksList.EditTruck(truck);
		setListTrucks(trucksList.GetList());
	};

    // const LoadTruckById = (id: string) => {

    //     return
    // };

    const [purchaseDate, setDatePurchase] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    // const handleChange = (event: SelectChangeEvent) => {
    //     console.log(event.target.value as string);
    //   };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        // control,
    } = useForm<FormValues>({ resolver })

    const onSubmit = handleSubmit((data) => {
        // console.log(data);
        // localStorage.setItem("formData", JSON.stringify(data));
        EditItem(data);
        alert(JSON.stringify(data));

        reset();
    });

    // const onSubmit = handleSubmit((data) => console.log(data))

    // const cloneWithRegister = (child: React.ReactElement) =>
    // React.cloneElement(child,{register});

    return (
        <>
            <DrawerTrucksHeader />

            <form onSubmit={onSubmit}>

                <Box
                    display={"flex"}
                    height={"100%"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                >
                    <Paper
                        sx={{
                            p: "30px",
                            // width: "100%",
                            height: "20rem",
                            overflowY: "auto",
                            flexGrow: 1,
                        }}
                    >
                        <SwitchTrucks />

                        <Divider sx={{ fontWeight: "bold" }}>Informations</Divider>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                {/* <SelectFieldTrucks /> */}
                                <Box
                                    component="form"
                                    sx={{
                                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Select required label="make"  {...register("make")} >
                                        <MenuItem value={"cartepillar"}>Cartepillar</MenuItem>
                                        <MenuItem value={"belaz"}>Belaz</MenuItem>
                                        <MenuItem value={"Komatsu"}>Komatsu</MenuItem>
                                    </Select>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    component="form"
                                    sx={{
                                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        required
                                        label="Id"
                                        value={myTruck.id}
                                        {...register("id")}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DatePicker'
                                        ]}
                                    >
                                        <DemoItem label="Responsive variant">
                                            {/* <DatePicker   {...register("datePurchase")} /> */}
                                            <DatePicker value={purchaseDate} {...register("purchaseDate")} onChange={(newValue) => setDatePurchase(newValue)}/>

                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}></Grid>
                        </Grid>
                    </Paper>
                </Box>

                <DrawerTrucksAction />
            </form>

        </>
    );
}
