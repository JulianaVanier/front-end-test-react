import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import DrawerTrucksAction from "./fields/containers/DrawerTrucksAction";
// import SelectFieldTrucks from "./fields/SelectFieldTrucks";
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
import Select from '@mui/material/Select';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TruckList } from "../../services/TruckList";

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { Control } from "react-hook-form";
import { Controller } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/base";






type FormValues = {
    isAvailable: boolean,
    id: string,
    make: string,
    purchaseDate: string,
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



    // const [state, setState] = React.useState({
    //     isAvailable: true,
    // });

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.checked,
    //     });
    // };
    // ******************************************************


    let trucksList: TruckList = new TruckList();
    trucksList.SetList([...listTrucks]);
    // let myTruck: Truck;

    const NewItem = (truck: any) => {

        console.log('truck', truck)

        trucksList.AddTruck(truck);
        setListTrucks(trucksList.GetList());
    };

    // const EditItem = (truck: any) => {
    //     trucksList.EditTruck(truck);
    //     setListTrucks(trucksList.GetList());
    // };

    // const LoadTruckById = (uniqueId: string): void => {
    //     myTruck = trucksList.GetTruck(uniqueId);
    // };

    // const [purchaseDate, setDatePurchase] = React.useState<Dayjs | null>(dayjs());
    // const [purchaseDate, setDatePurchase] = React.useState(null);




    // const handleChange = (event: SelectChangeEvent) => {
    //     console.log(event.target.value as string);
    //   };

    const makeValues = [
        {
            value: 'belaz',
            label: 'Belaz',
        },
        {
            value: 'cartepillar',
            label: 'Cartepillar',
        },
        {
            value: 'komatsu',
            label: 'Komatsu',
        }
    ];



    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<FormValues>({
        resolver,
        defaultValues: {
            make: 'komatsu',
            isAvailable: true,
            id: '12345',
            purchaseDate: '',
        }
    })

    // const save = (data) => {
    //     // console.log(data);
    //     // localStorage.setItem("formData", JSON.stringify(data));
    //     NewItem(data);
    //     console.log("data insert", data);
    //     // alert(JSON.stringify(data));

    //     reset();
    // };

    const onSubmit = handleSubmit((data) => {
        // console.log(data);
        // localStorage.setItem("formData", JSON.stringify(data));
        NewItem(data);
        console.log("data insert", data);
        // alert(JSON.stringify(data));

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
                        <Controller
                            name="isAvailable"
                            control={control}
                            render={({ field: { value } }) => (                        
                                <Switch checked={value} {...register('isAvailable')} name="isAvailable" />
                            )}
                        />
                        <Divider sx={{ fontWeight: "bold" }}>Informations</Divider>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                {/* <SelectFieldTrucks /> */}
                                <Box>
                                    <TextField
                                        id="make"
                                        select
                                        label="Make"
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        {...register('make')}
                                    >
                                        {makeValues.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <TextField
                                        required
                                        label="Id"
                                        // value={myTruck.id}
                                        {...register('id', { required: true, maxLength: 6 })}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Controller
                                    name="purchaseDate"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <DatePicker value={value} label="Purchase Date" onChange={onChange} />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        {/* </Grid> */}
                    </Paper>
                </Box>
                <DrawerTrucksAction/>
                {/* <DrawerTrucksAction onSave={save} /> */}
            </form>

        </>
    );
}
