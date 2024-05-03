"use client";
import { useEffect } from "react";
import { useBooksMutations } from "@components/hooks/useBooksMutations";
import NextImage from "next/image";
import StarMark from "@svg/star-mark.svg";
import { styles } from "./page.style";

export default function Page({
    searchParams,
}: {
    searchParams: { title: string };
}) {
    const title = searchParams.title || "";
    const request = title.split(" ").join("%20");

    const { scrapeBooks, booksInfo, scrappingBooks } = useBooksMutations();

    useEffect(() => {
        scrapeBooks(request);
    }, [scrapeBooks, request]);

    return (
        <div>
            <div className="search_text" style={styles.searchText}>
                <div style={styles.searchText.title}>
                    {scrappingBooks ? (
                        <div style={styles.searchText.title.loadingBlock}>
                            <span>{`Шукаємо: ${title}`}</span>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        `Пошук: ${title}`
                    )}
                </div>
                <div style={styles.searchText.subtitle}>
                    {scrappingBooks
                        ? ``
                        : `Найкращі результати за вашим запитом`}
                </div>
            </div>
            {booksInfo && (
                <div className="search_results" style={styles.searchResults}>
                    <div style={styles.searchResults.aside}>
                        <div>
                            <p style={styles.searchResults.aside.title}>
                                Оцінка на Goodreads
                            </p>
                            <div
                                style={styles.searchResults.aside.blockContent}>
                                <NextImage alt="" src={StarMark} />
                                <NextImage alt="" src={StarMark} />
                                <NextImage alt="" src={StarMark} />
                            </div>
                        </div>
                        <div>
                            <p style={styles.searchResults.aside.title}>
                                Обрати книгарню
                            </p>
                            <div style={styles.searchResults.aside.chooseShop}>
                                Всі
                            </div>
                        </div>
                        <div>
                            <p style={styles.searchResults.aside.title}>
                                Жанри
                            </p>
                            <div style={styles.searchResults.aside.genresBlock}>
                                <div style={styles.searchResults.aside.genres}>
                                    Фікшн
                                </div>
                                <div style={styles.searchResults.aside.genres}>
                                    Детектив
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexFlow: "column nowrap",
                            alignItems: "flex-start",
                            gap: "20px",
                            width: "75%",
                        }}>
                        {booksInfo?.map((book) => (
                            <div
                                key={book.id}
                                // href={book.url}
                                // target="_blank"
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
                                                backgroundColor:
                                                    "rgba(var(--red1), 1)",
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
                                            {/* <NextImage src={book.bookshop.image} alt={book.bookshop.name} width={50} height={100}/> */}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor:
                                            "rgba(var(--grey2), 1)",
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
