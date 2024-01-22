import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import { Box, Paper, Divider, Grid, AppBar, Toolbar, Button } from "@mui/material";
import { useForm, Controller, Resolver } from "react-hook-form";
import { TextField } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TruckClass } from "../../services/TruckList";

import Switch from '@mui/material/Switch';
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from 'dayjs';

import { LocalStorageManager } from "../../services/LocalStorageManager";

import SnackBarTrucks from "./fields/SnackBarTrucks";
import * as React from "react";



type ServicesTrucksProps = {
    listTrucks: Truck[],
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSnackBarOpen: boolean,
    setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    messageSnackBar: string,
	setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>
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
    const storage: LocalStorageManager = new LocalStorageManager();

    trucksList.SetList([...props.listTrucks]);

    // for validation datepicker
    const today = dayjs();
    const tomorrow = dayjs('2000-01-01');
    // **************************


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
    }
    // **************************

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<FormValues>({
        resolver,
        defaultValues: defaultValuesEdit || {},
    });

    // condition save
    const save = (data: Truck) => {
 

        if (location.pathname === '/edit') {
            editItem(data);
            reset();
            props.setIsDrawerOpen(false);
            navigate('/');
            return
        }

        newItem(data);
        navigate('/');

       
        reset();
    };
    // **************************

    const newItem = (truck: Truck) => {

        trucksList.AddTruck(truck);
        props.setListTrucks(trucksList.GetList());
        props.setIsDrawerOpen(false);
        controlSnackBarOpen();
    };
    // **************************

    const editItem = (truck: Truck) => {

        trucksList.EditTruck(truck);
        props.setListTrucks(trucksList.GetList());
        storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());
        // props.setIsDrawerOpen(false);

    }
    // **************************



    // snackbar


    const controlSnackBarOpen = () => {
        
        props.setIsSnackBarOpen(true);
        props.setMessageSnackBar('Item saved');
        console.log('props.setMessageSnackBar Aqui a mensagem no form', props.setMessageSnackBar)
        console.log('isSnackBarOpen dentro form', props.isSnackBarOpen);
        
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
                                        defaultValue="Select"
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
                                        {...register('id', {
                                            required: 'This field is required',
                                            maxLength: 6,
                                            pattern: {
                                                value: /^[A-Za-z]{3}\d{3}$/,
                                                message: 'Invalid format. It should be three letters followed by three digits.',
                                            },
                                        })}
                                        error={Boolean(errors.id)}
                                        helperText={errors.id?.message}
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
                                        <DatePicker
                                            value={value ? dayjs(value) : null}
                                            label="Purchase Date"
                                            defaultValue={today}
                                            minDate={tomorrow}
                                            maxDate={today}
                                            onChange={(date) => onChange(date ? date.format('YYYY-MM-DD') : null)} />
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