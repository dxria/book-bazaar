"use client";
import Link from "next/link";
import React from "react";
import styles from "./style/Footer.module.css";
import { usePathname } from "next/navigation";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Footer() {
    const pathname = usePathname();
    const pathes = [
        { url: "/", name: "THE BOOKHUNT" },
        { url: "/about", name: "ABOUT" },
        { url: "/sales", name: "SALES AND HOT PROPOSITIONS" },
    ];
    return (
        <nav className={styles.Nav}>
            {pathes.map((path, index) => (
                <Link
                    key={index}
                    href={`${path.url}`}
                    className={
                        path.url === pathname ? styles.ActiveLink : styles.Link
                    }>
                    {path.name}
                </Link>
            ))}
        </nav>
    );
}
