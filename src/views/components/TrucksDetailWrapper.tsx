import * as React from "react";
import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import {
    Box,
    Paper,
    Divider,
    Grid,
    AppBar,
    Toolbar,
    Button,
    TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TruckClass } from "../../services/TruckList";
import Switch from "@mui/material/Switch";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalStorageManager } from "../../services/LocalStorageManager";

type ServicesTrucksProps = {
    listTrucks: Truck[];
    setListTrucks: React.Dispatch<React.SetStateAction<Truck[]>>;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageSnackBar: React.Dispatch<React.SetStateAction<string>>;
};

type Truck = {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};

type FormValues = {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};

const TrucksDetailWrapper: React.FC<ServicesTrucksProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const trucksList: TruckClass = new TruckClass();
    const storage: LocalStorageManager = new LocalStorageManager();

    trucksList.SetList([...props.listTrucks]);

    // for validation datepicker
    const today = dayjs();
    const limit = dayjs("2000-01-01");
    // **************************

    const makeValues = [
        {
            value: "",
            label: "",
        },
        {
            value: "Belaz",
            label: "Belaz",
        },
        {
            value: "Cartepillar",
            label: "Cartepillar",
        },
        {
            value: "Komatsu",
            label: "Komatsu",
        },
    ];

    // OnClose for button CANCEL
    function onClose() {
        if (location.pathname === "/edit") {
            props.setIsDrawerOpen(false);
            navigate("/");
        }
        props.setIsDrawerOpen(false);
    }
    // **************************

    // set defaut value to edit
    let defaultValuesEdit = [];

    if (location.pathname === "/edit") {
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
        // resolver,
        defaultValues: defaultValuesEdit || {},
    });
    const onSubmit = (data) => {
        save(data);
    };

    // condition save
    const save = (data: Truck) => {
        if (location.pathname === "/edit") {
            editItem(data);
            reset();
            props.setIsDrawerOpen(false);
            navigate("/");
            return;
        }

        newItem(data);
        navigate("/");

        reset();
    };
    // **************************

    const newItem = (truck: Truck) => {
        trucksList.AddTruck(truck);
        props.setListTrucks(trucksList.GetList());
        props.setIsDrawerOpen(false);
        props.setIsSnackBarOpen(true);
        props.setMessageSnackBar("Item has been successfully saved");
    };
    // **************************

    const editItem = (truck: Truck) => {
        trucksList.EditTruck(truck);
        props.setListTrucks(trucksList.GetList());
        storage.SetLocalStorageFromArray("Trucks", trucksList.GetList());
        props.setIsSnackBarOpen(true);
        props.setMessageSnackBar("Item has been successfully updated");
    };
    // **************************

    return (
        <>
            <DrawerTrucksHeader setIsDrawerOpen={props.setIsDrawerOpen} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    display={"flex"}
                    height={"100%"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                >
                    <Paper
                        sx={{
                            p: "30px",
                            height: "calc(100vh - 205px)",
                            overflowY: "auto",
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "-10px",
                            }}
                        >
                            <Controller
                                name="isAvailable"
                                control={control}
                                defaultValue={true}
                                render={({ field: { value } }) => (
                                    <Switch
                                        checked={value}
                                        {...register("isAvailable")}
                                        name="isAvailable"
                                    />
                                )}
                            />
                        </Box>
                        <Divider sx={{ fontWeight: "bold", fontSize: 20, color: "grey", fontFamily: "sans-serif"}}>
                            Informations
                        </Divider>
                        <Grid container spacing={2} marginTop={"20px"}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="make"
                                    select
                                    label="Make"
                                    fullWidth
                                    SelectProps={{
                                        native: true,
                                    }}
                                    {...register("make")}
                                >
                                    {makeValues.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <TextField
                                        required
                                        label="Id"
                                        {...register("id", {
                                            required: true,
                                            maxLength: 6,
                                            pattern: {
                                                value: /^[A-Za-z]{3}\d{3}$/,
                                                message: "Invalid id: 3 letters + 3 digits. Ex: NEW123",
                                            },
                                        })}
                                        helperText={"Ex: NEW123"}
                                        inputProps={{ style: { textTransform: "uppercase" } }}
                                    />
                                    {errors.id && (
                                        <div>
                                            <small>{errors.id.message}</small>
                                        </div>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
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
                                                minDate={limit}
                                                maxDate={today}
                                                onChange={(date) =>
                                                    onChange(date ? date.format("YYYY-MM-DD") : null)
                                                }
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}></Grid>
                        </Grid>
                    </Paper>
                </Box>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button variant="contained" type="button" onClick={onClose}>
                            Cancel
                        </Button>
                        <Box sx={{ display: "flex", flexDirection: "row", p: 1, m: 1 }} />
                        <Button variant="contained" type="submit">
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
            </form>
        </>
    );
};
export default TrucksDetailWrapper;
