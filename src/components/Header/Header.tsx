import Link from "next/link";
import React from "react";
import NextImage from "next/image";
import Logo from "@svg/logo.svg";
import { SearchForm } from "@components/SearchForm/SearchForm";
import { styles } from "./style/Header.style";

export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <NextImage alt="" src={Logo} />
                <Link href="/" style={styles.text}>
                    BookBazaar
                </Link>
            </div>
            <SearchForm />
        </header>
    );
}
