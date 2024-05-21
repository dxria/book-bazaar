/* eslint-disable @next/next/no-img-element */
import { TPromo, TPromoObj } from "@plugins/types/booksTypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { styles } from "./style/PromoBlock.style";
import Button from "@mui/material/Button";

type PromoBlockProps = {
    promo: TPromo;
};

const PromoBlock: React.FC<PromoBlockProps> = ({ promo }) => {
    const [promotion, setPromotion] = useState<TPromoObj>();

    useEffect(() => {
        setPromotion(promo[Object.keys(promo)[0]][0]);
    }, [promo]);

    return (
        <>
            {promotion && (
                <aside style={styles.aside}>
                    <div style={styles.card}>
                        <div style={styles.imgBox}>
                            <img
                                src={promotion.img}
                                alt={promotion.title}
                                width="300px"
                                style={styles.imgBox.img}
                            />
                        </div>
                        <div style={styles.infoBox}>
                            <div style={styles.infoBox.inner}>
                                <h4 style={styles.infoBox.inner.h4}>
                                    Акція в книгарні
                                </h4>
                                <span>{Object.keys(promo)[0]}</span>
                                <Link target="_blank" href={promotion.url}>
                                    <Button
                                        variant="contained"
                                        sx={styles.infoBox.inner.button}>
                                        <span style={{ fontSize: "14px" }}>
                                            Перейти до {Object.keys(promo)[0]}
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
};

export default PromoBlock;
