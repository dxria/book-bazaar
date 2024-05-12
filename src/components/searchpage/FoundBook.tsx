import { TBook } from "@plugins/types/booksTypes";
import React from "react";
import { styles } from "./style/FoundBook.style";

type FoundBookProps = {
    book: TBook;
};
export const FoundBook: React.FC<FoundBookProps> = ({ book }) => {
    return (
        <div style={styles.card}>
            <div style={styles.content}>
                <div style={styles.content.infoBox}>
                    <div style={styles.content.infoBox.imgBox}>
                        <img
                            src={book.img}
                            alt={book.title}
                            width="70px"
                            height="100px"
                        />
                    </div>
                    <div>
                        <div style={styles.content.infoBox.title}>
                            {book.title}
                        </div>
                        <div style={styles.content.infoBox.author}>
                            {book.author}
                        </div>
                    </div>
                </div>
                <div style={styles.content.priceBox}>
                    <div style={styles.content.priceBox.price}>
                        {book.price} {book.currency}
                    </div>
                    <div>
                        <img
                            src={book.bookshop.image}
                            alt={book.bookshop.name}
                            width="50px"
                        />
                    </div>
                </div>
            </div>

            <div style={styles.divider}></div>

            <div>
                <a href={book.url} target="_blank" style={styles.link}>
                    Перейти до товару
                </a>
            </div>
        </div>
    );
};
