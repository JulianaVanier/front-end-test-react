import { Box, Paper, Button } from "@mui/material";
import DrawerTrucksAction from "./fields/containers/DrawerTrucksAction";
import FormTrucks from "./FormTrucks";
import DrawerTrucksHeader from "./fields/containers/DrawerTrucksHeader";
import { useForm, Resolver } from "react-hook-form";

// useEffect(() => {
//   localStorage.setItem("dataTruck", JSON.stringify(name));
// }, [dataTruck]);

type FormValues = {
    firstName: string
    lastName: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName
            ? {
                firstName: {
                    type: "required",
                    message: "This is required.",
                },
            }
            : {},
    }
}

export default function TurcksDetailWrapper() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver })
    const onSubmit = handleSubmit((data) => console.log(data))


    return (
        <>
            <DrawerTrucksHeader></DrawerTrucksHeader>
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "-16px",
                        }}
                    ></Box>
                    <form onSubmit={onSubmit}>
                        <input {...register("firstName")} placeholder="Bill" />
                        {errors?.firstName && <p>{errors.firstName.message}</p>}

                        <input {...register("lastName")} placeholder="Luo" />
                        {/* <FormTrucks></FormTrucks>
                        <DrawerTrucksAction></DrawerTrucksAction> */}
                        <input type="submit" />
                    </form>
                </Paper>
            </Box>
        </>
    );
}
