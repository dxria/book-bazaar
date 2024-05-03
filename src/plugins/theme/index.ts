import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const theme = () => {
    return createTheme({
        typography: {
            fontFamily: [montserrat.style.fontFamily].join(","),
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === "contained" && {
                            backgroundColor: "rgba(var(--red1), 1)",
                            boxShadow: "none",
                            color: "#fff",
                            fontSize: "14px",
                            fontWeight: "500",
                            height: "34px",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "rgba(var(--red1), 0.7)",
                            },
                            // "&.Mui-disabled": {
                            //     background: "rgba(var(--grey4), 1)",
                            //     color: "rgba(var(--grey1), 1)",
                            // },
                        }),
                        ...(ownerState.variant === "text" && {
                            boxShadow: "none",
                            color: "rgba(var(--red1), 1)",
                            fontSize: "14px",
                            fontWeight: "500",
                            height: "34px",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "rgba(var(--white), 1)",
                                color: "rgba(var(--black), 1)",
                            },
                        }),
                    }),
                },
            },
            MuiIconButton: {
                defaultProps: {
                    disableRipple: true,
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-input": {
                            fontSize: "14px",
                            color: "rgba(var(--black), 1)",
                        },
                        "& .MuiInputBase-input": {
                            fontSize: "14px",
                        },
                        "& .MuiOutlinedInput-root": {
                            color: "rgba(var(--grey3), 1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(var(--grey2), 1)",
                                borderWidth: "1px",
                                borderRadius: "10px",
                            },
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(var(--red1), 1)",
                                    borderWidth: "2px",
                                },
                            },
                        },
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                            maxWidth: "8px",
                            width: "8px",
                            backgroundColor: "#FFF",
                        },
                        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                            {
                                maxWidth: "8px",
                                width: "8px",
                                backgroundColor: "rgba(var(--grey4), 1)",
                                borderRadius: "10px",
                            },
                        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                            {
                                backgroundColor: "rgba(var(--grey2), 1)",
                            },
                    },
                },
            },
        },
    });
};

export default theme;
