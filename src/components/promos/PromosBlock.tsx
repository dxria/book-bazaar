/* eslint-disable @next/next/no-img-element */
import { TPromoObj, TTopBook } from "@plugins/types/booksTypes";
import React from "react";
import NextImage from "next/image";
import NoPhoto from "@png/no-photo.png";
import MagnifyingGlassIcon from "@svg/magnifying-glass.svg";
import Link from "next/link";
import { styles } from "./style/Promo.style";
import Button from "@mui/material/Button";

type PromoProps = {
    promo: TPromoObj;
    shop: string;
};

const Promo: React.FC<PromoProps> = ({ promo, shop }) => {
    return (
        <div key={promo.id} style={styles.promoBox}>
            <div style={styles.promoBox.textBox}>
                <div style={styles.promoBox.textBox.imgBox}>
                    <img
                        alt={promo.title}
                        src={promo.img || NoPhoto.src}
                        width={340}
                        style={styles.promoBox.textBox.imgBox.img}
                    />
                </div>
                <h3 style={styles.promoBox.textBox.h3}>{promo.title}</h3>
                <h6 style={styles.promoBox.textBox.h3}>{promo.description}</h6>
            </div>
            <Link href={promo.url}>
                <Button variant="contained" sx={styles.button}>
                    <div style={styles.button.wrap}>
                        <span>{shop}</span>
                        <NextImage alt="перейти" src={MagnifyingGlassIcon} />
                    </div>
                </Button>
            </Link>
        </div>
    );
};

export default Promo;
