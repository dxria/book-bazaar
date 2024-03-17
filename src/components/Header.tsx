import { Typography } from "@mui/material";
import React from "react";

export default function Header() {
    return (
        <header
            style={{
                height: "8vh",
                width: "100%",
                backgroundColor: "rgba(var(--red1), 1)",
                color: "rgba(var(--white), 1)",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Prata",
                fontSize: "32px",
            }}>
            THE BOOKHUNT
        </header>
    );
}
