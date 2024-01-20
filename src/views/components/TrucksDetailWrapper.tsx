import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import { Box, Paper, Divider, Grid, AppBar, Toolbar, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Resolver } from "react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TruckClass } from "../../services/TruckList";

import Switch from '@mui/material/Switch';
import { Controller } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type Truck = {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
};


type FormValues = {
    unique_id: string,
    make: string,
    id: string,
    isAvailable: boolean,
    purchaseDate: string
}



const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values,
        errors: {}
    }
}

const TrucksDetailWrapper: React.FC<ServicesTrucksProps> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const trucksList: TruckClass = new TruckClass();
    trucksList.SetList([...props.listTrucks]);

    const makeValues = [
        {
            value: 'Belaz',
            label: 'Belaz',
        },
        {
            value: 'Cartepillar',
            label: 'Cartepillar',
        },
        {
            value: 'Komatsu',
            label: 'Komatsu',
        }
    ];

    // OnClose for button CANCEL
    function onClose() {
        if (location.pathname === '/edit') {
            props.setIsDrawerOpen(false);
            navigate('/');
        }
        props.setIsDrawerOpen(false);
    }
    // **************************

    // set defaut value to edit
    let defaultValuesEdit = [];

    if (location.pathname === '/edit') {

        const data = location.state;

        defaultValuesEdit = data;
        console.log('defaultValuesEdit', defaultValuesEdit);
    }
    // **************************


    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
        control,
    } = useForm<FormValues>({
        resolver,
        defaultValues: defaultValuesEdit || {},
        // defaultValues: {
        //     make: defaultValuesEdit.make,
        //     isAvailable: defaultValuesEdit.isAvailable,
        //     id: defaultValuesEdit.id,
        //     purchaseDate: '',
        // }
        //         defaultValues: {
        //         make: 'Komatsu',
        //         isAvailable: true,
        //         id: '12345',
        //         purchaseDate: '',
        // }
    });

    const save = (data: Truck) => {

        if (location.pathname === '/edit') {
            editItem(data);
            reset();
            props.setIsDrawerOpen(false);
            return
        }
        
        console.log(data);
        NewItem(data);
        console.log("data insert", data);
        reset();
        props.setIsDrawerOpen(false);
    };

    const NewItem = (truck: Truck) => {

        console.log('truck inserted', truck)

        trucksList.AddTruck(truck);
        props.setListTrucks(trucksList.GetList());
        // setListTrucks(trucksList.GetList());

        console.log('trucksList.GetList()', trucksList.GetList());
    };

    const editItem = (truck: Truck) => {
        console.log('Here in editItem', truck);
        trucksList.EditTruck(truck);
        props.setListTrucks(trucksList.GetList());

    }



    return (
        <>
            <DrawerTrucksHeader setIsDrawerOpen={props.setIsDrawerOpen} />

            <form >

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
                    </Paper>
                </Box>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button variant="contained" type="button" onClick={onClose}>Cancel</Button>
                        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 1 }} />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit((data) => save(data))}
                        >
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
            </form>

        </>
    );
}
export default TrucksDetailWrapper;