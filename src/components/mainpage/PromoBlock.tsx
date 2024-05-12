import { TPromo } from "@plugins/types/booksTypes";
import Link from "next/link";
import React from "react";
import { styles } from "./style/PromoBlock.style";
import Button from "@mui/material/Button";

type PromoBlockProps = {
    promo: TPromo;
};

const PromoBlock: React.FC<PromoBlockProps> = ({ promo }) => {
    return (
        <aside style={styles.aside}>
            <div style={styles.card}>
                <div style={styles.imgBox}>
                    <img
                        src={promo.img}
                        alt={promo.title}
                        width="300px"
                        style={styles.imgBox.img}
                    />
                </div>
                <div style={styles.infoBox}>
                    <div style={styles.infoBox.inner}>
                        <h4 style={styles.infoBox.inner.h4}>
                            Акція в книгарні
                        </h4>
                        <span>{promo.bookshop.name}</span>
                        <Link target="_blank" href={promo.url}>
                            <Button
                                variant="contained"
                                sx={styles.infoBox.inner.button}>
                                <span style={{ fontSize: "14px" }}>
                                    Перейти до {promo.bookshop.name}
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default PromoBlock;
