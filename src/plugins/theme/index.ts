import { createTheme } from "@mui/material/styles";
import { Andika } from "next/font/google";

const andika = Andika({
    subsets: ["latin"],
    weight: "400",
});

const theme = () => {
    return createTheme({
        typography: {
            fontFamily: [andika.style.fontFamily].join(","),
        },
    });
};

export default theme;
