"use client";
import Link from "next/link";
import { TPromo } from "@plugins/types/booksTypes";
import { useBooksMutations } from "@components/hooks/useBooksMutations";
import { useEffect } from "react";
import PromoBlock from "@components/mainpage/PromoBlock";
import TopBooksBlock from "@components/mainpage/TopBooksBlock";
import { styles } from "@components/mainpage/style/Page.style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
    const {
        getTop,
        topBooks,
        successGettingTopBooks,
        getPromotions,
        promosInfo,
    } = useBooksMutations();

    useEffect(() => {
        getTop();
        getPromotions();
    }, [getTop, getPromotions]);

    return (
        <main>
            <Box component="section" className="banner" sx={styles.banner}>
                <Box sx={styles.mainBlock}>
                    <Typography sx={styles.title}>
                        Дізнайтесь про нові ексклюзивні пропозиції топових
                        онлайн-книгарень та порівняйте ціни на обрані книги!
                    </Typography>
                    <Typography sx={styles.subtitle}>
                        Агрегатор цін книгарень та доступні акційні пропозиції
                    </Typography>
                    <Box sx={styles.buttonsBox}>
                        <Link href="/search?title=молоко%20і%20мед">
                            <Button variant="contained" sx={styles.button}>
                                Почати пошук
                            </Button>
                        </Link>
                        <Link href="/promo">
                            <Button variant="contained" sx={styles.button}>
                                <span>Дослідити акції</span>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={styles.statsBox}>
                        <div style={styles.statsBox.wrap}>
                            <Typography sx={styles.statsBox.wrap.title}>
                                Більше 1000
                            </Typography>
                            <Typography sx={styles.statsBox.wrap.subtitle}>
                                книг
                            </Typography>
                        </div>
                        <div style={styles.statsBox.wraplast}>
                            <Typography sx={styles.statsBox.wrap.title}>
                                20
                            </Typography>
                            <Typography sx={styles.statsBox.wrap.subtitle}>
                                книгарень
                            </Typography>
                        </div>
                    </Box>
                </Box>
                {promosInfo && <PromoBlock promo={promosInfo} />}
            </Box>
            {successGettingTopBooks && topBooks && (
                <TopBooksBlock topBooks={topBooks} />
            )}
        </main>
    );
}
