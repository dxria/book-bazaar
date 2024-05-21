import Link from "next/link";
import React from "react";
import NextImage from "next/image";
import Logo from "@svg/logo.svg";
import { SearchForm } from "@components/SearchForm/SearchForm";
import { styles } from "./style/Header.style";

export default function Header() {
    return (
        <header style={styles.header}>
            <nav style={styles.navigation}>
                <div style={styles.logo}>
                    <NextImage alt="" src={Logo} />
                    <Link href="/" style={styles.text}>
                        BookBazaar
                    </Link>
                </div>
                <Link href="/about" style={styles.text}>
                    <div>Про проект</div>
                </Link>
                <Link href="/promo" style={styles.text}>
                    <div>Акційні пропозиції</div>
                </Link>
            </nav>

            <SearchForm />
        </header>
    );
}
