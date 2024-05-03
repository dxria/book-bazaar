import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import NextImage from "next/image";
import Logo from "@svg/logo.svg";
import { SearchForm } from "./SearchForm/SearchForm";

export default function Header() {
    return (
        <header
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "32px",
                // padding: "20px 40px",
            }}>
            <div
                style={{
                    fontWeight: "600",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                }}>
                <NextImage alt="" src={Logo} />
                <Link
                    href="/"
                    style={{
                        color: "rgba(var(--black), 1)",
                        textDecoration: "none",
                    }}>
                    BookBazaar
                </Link>
            </div>
            <SearchForm />{" "}
        </header>
    );
}
