import { TBook } from "@plugins/types/booksTypes";
import React from "react";

type FoundBookProps = {
    book: TBook;
};
export const FoundBook: React.FC<FoundBookProps> = ({ book }) => {
    return (
        <div
            style={{
                backgroundColor: "rgba(var(--grey1), 1)",
                borderRadius: "15px",
                width: "100%",
                padding: "30px",
                display: "flex",
                flexFlow: "column nowrap",
                color: "rgba(var(--black), 1",
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "120px",
                }}>
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                        <img
                            src={book.img}
                            alt={book.title}
                            width="70px"
                            height="100px"
                        />
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: 600,
                            }}>
                            {book.title}
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                fontWeight: 500,
                            }}>
                            {book.author}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexFlow: "column nowrap",
                        width: "100px",
                        justifyContent: "flex-start",
                        gap: "10px",
                    }}>
                    <div
                        style={{
                            backgroundColor: "rgba(var(--red1), 1)",
                            borderRadius: "12px",
                            height: "32px",
                            width: "100px",
                            color: "rgba(var(--white), 1)",
                            display: "flex",
                            fontWeight: 600,
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "14px",
                        }}>
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

            <div
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(var(--grey2), 1)",
                    margin: "10px 0px",
                }}></div>

            <div>
                <a
                    href={book.url}
                    target="_blank"
                    style={{
                        color: "rgba(var(--black), 1",
                    }}>
                    Перейти до товару
                </a>
            </div>
        </div>
    );
};
