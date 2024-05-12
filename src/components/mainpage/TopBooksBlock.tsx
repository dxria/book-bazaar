import { TTopBook } from "@plugins/types/booksTypes";
import React from "react";
import NextImage from "next/image";
import NoPhoto from "@png/no-photo.png";
import MagnifyingGlassIcon from "@svg/magnifying-glass.svg";
import Link from "next/link";
import { styles } from "./style/TopBooksBlock.style";
import Button from "@mui/material/Button";

type TopBooksBlockProps = {
    topBooks: TTopBook[];
};

const TopBooksBlock: React.FC<TopBooksBlockProps> = ({ topBooks }) => {
    return (
        <section className="TopBooks" style={styles.section}>
            <h2 style={styles.title}>Найпопулярніші книги сьогодні</h2>
            <div style={styles.booksBlock}>
                {topBooks?.map((book) => (
                    <div key={book.id} style={styles.card}>
                        <div style={styles.infoBox}>
                            <div style={styles.infoBox.imgBox}>
                                <NextImage
                                    alt={book.title}
                                    src={book.img || NoPhoto}
                                    width={190}
                                    height={280}
                                    style={styles.infoBox.imgBox.img}
                                />
                            </div>
                            <h3 style={styles.infoBox.h3}>{book.title}</h3>
                            <h5 style={styles.infoBox.h5}>{book.author}</h5>
                        </div>
                        <Link
                            href={`/search?title=${book.title.toLowerCase()}`}>
                            <Button variant="contained" sx={styles.button}>
                                <div style={styles.button.wrap}>
                                    <span>Шукати</span>
                                    <NextImage
                                        alt="шукати"
                                        src={MagnifyingGlassIcon}
                                    />
                                </div>
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopBooksBlock;
