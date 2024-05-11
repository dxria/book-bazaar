"use client";
import { useEffect, useState } from "react";
import { useBooksMutations } from "@components/hooks/useBooksMutations";
import NextImage from "next/image";
import StarMark from "@svg/star-mark.svg";
import StarIcon from "@svg/star.svg";
import { styles } from "./page.style";
import { FoundBook } from "@components/searchpage/FoundBook";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { SortArray } from "@helpers/sort";
import { FilterType, TBook } from "@plugins/types/booksTypes";
import NoPhoto from "@png/no-photo.png";
import { spawn } from "child_process";

export default function Page({
    searchParams,
}: {
    searchParams: { title: string };
}) {
    const [filterType, setFilterType] =
        useState<keyof typeof FilterType>("asc");

    const [books, setBooks] = useState<TBook[] | undefined>();

    const title = searchParams.title || "";
    const request = title.split(" ").join("%20");

    const {
        scrapeBooks,
        booksInfo,
        scrappingBooks,
        scrapeRating,
        ratingInfo,
        scrappingRating,
        successScrappingRating,
    } = useBooksMutations();

    const handleSelectChange = (
        event: SelectChangeEvent<keyof typeof FilterType>,
    ) => {
        setFilterType(event.target.value as keyof typeof FilterType);
        if (books) {
            setBooks(
                SortArray(books, event.target.value as keyof typeof FilterType),
            );
        }
    };

    useEffect(() => {
        scrapeBooks(request);
        scrapeRating(request);
    }, [scrapeBooks, scrapeRating, request]);

    useEffect(() => {
        if (booksInfo) setBooks(booksInfo);
    }, [booksInfo, setBooks]);

    return (
        <div>
            <div className="search_text" style={styles.searchText}>
                <div style={styles.searchText.title}>
                    {scrappingBooks || scrappingRating ? (
                        <div style={styles.searchText.title.loadingBlock}>
                            <span>{`Шукаємо: ${title}`}</span>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        `Пошук: ${title}`
                    )}
                </div>
                <div style={styles.searchText.subtitle}>
                    {scrappingBooks || scrappingRating
                        ? ``
                        : `Найкращі результати за вашим запитом`}
                </div>
            </div>
            {books && successScrappingRating && (
                <>
                    {console.log(ratingInfo)}
                    <div
                        className="search_results"
                        style={styles.searchResults}>
                        <div style={styles.searchResults.aside}>
                            <div>
                                <p style={styles.searchResults.aside.title}>
                                    Оцінка на Goodreads{" "}
                                    {`: ${ratingInfo?.stars}` || ""}
                                </p>
                                {ratingInfo?.stars ? (
                                    <div
                                        style={
                                            styles.searchResults.aside
                                                .blockContent
                                        }>
                                        {[
                                            ...Array(
                                                Math.floor(
                                                    Number(ratingInfo.stars),
                                                ),
                                            ),
                                        ].map((_, index) => (
                                            <NextImage
                                                key={index}
                                                alt=""
                                                src={StarMark}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <i>Інформація про оцінку відсутня</i>
                                )}
                            </div>
                            {/* <div>
                            <p style={styles.searchResults.aside.title}>
                                Обрати книгарню
                            </p>
                            <div style={styles.searchResults.aside.chooseShop}>
                                Всі
                            </div>
                        </div> */}
                            <div>
                                <p style={styles.searchResults.aside.title}>
                                    Жанри
                                </p>
                                {ratingInfo?.genres ? (
                                    <div
                                        style={
                                            styles.searchResults.aside
                                                .genresBlock
                                        }>
                                        {ratingInfo?.genres.map((genre) => (
                                            <div
                                                key={genre}
                                                style={
                                                    styles.searchResults.aside
                                                        .genres
                                                }>
                                                {genre}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <i>Інформація про жанри відсутня</i>
                                )}
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
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                }}>
                                <div>{books.length} результатів пошуку</div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center",
                                    }}>
                                    <span>Фільтр: </span>
                                    <Select
                                        value={filterType}
                                        onChange={(event) =>
                                            handleSelectChange(event)
                                        }
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            boxShadow: "none",
                                            "& .MuiOutlinedInput-input": {
                                                fontSize: "14px",
                                            },
                                        }}
                                        MenuProps={{
                                            MenuListProps: {
                                                disablePadding: true,
                                            },
                                            slotProps: {
                                                paper: {
                                                    style: {
                                                        width: "180px",
                                                        marginTop: "5px",
                                                        borderRadius: "10px",
                                                        boxShadow:
                                                            "0px 2px 8px 0px #0000000F",
                                                    },
                                                },
                                            },
                                        }}>
                                        {Object.keys(FilterType).map((type) => (
                                            <MenuItem
                                                key={type}
                                                value={
                                                    type as keyof typeof FilterType
                                                }
                                                sx={{
                                                    whiteSpace: "normal",
                                                    wordWrap: "break-word",
                                                    fontSize: "14px",
                                                    borderBottom:
                                                        "1px solid rgba(var(--grey1), 0.1)",
                                                    "&.Mui-selected": {
                                                        backgroundColor:
                                                            "rgba(var(--red1), 0.1)",
                                                        color: "rgba(var(--red1), 1)",
                                                    },
                                                    "&.Mui-selected:hover": {
                                                        backgroundColor:
                                                            "rgba(var(--red1), 0.2)",
                                                    },
                                                    "&.Mui-focusVisible": {
                                                        backgroundColor:
                                                            "rgba(var(--red1), 0.2) !important",
                                                    },
                                                }}>
                                                {
                                                    FilterType[
                                                        type as keyof typeof FilterType
                                                    ]
                                                }
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            {books?.map((book) => (
                                <FoundBook book={book} key={book.id} />
                            ))}
                        </div>
                    </div>
                    <section
                        className="reviews"
                        style={{
                            marginTop: "80px",
                            display: "flex",
                            flexFlow: "column nowrap",
                            gap: "30px",
                        }}>
                        <h2 style={{ margin: 0 }}>
                            Відгуки про цю книгу на Goodreads
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                gap: "30px",
                            }}>
                            {ratingInfo?.reviews.map((review) => (
                                <div
                                    key={review.id}
                                    style={{
                                        width: "280px",
                                        padding: "25px",
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        gap: "20px",
                                        border: "1px solid rgba(var(--grey1), 1)",
                                        borderRadius: "12px",
                                    }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "20px",
                                        }}>
                                        <NextImage
                                            alt={review.name}
                                            src={review.img || NoPhoto}
                                            width={64}
                                            height={64}
                                            style={{ borderRadius: "12px" }}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                flexFlow: "column nowrap",
                                                justifyContent: "flex-start",
                                                gap: "5px",
                                            }}>
                                            <h5 style={{ margin: 0 }}>
                                                {review.name}
                                            </h5>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "5px",
                                                }}>
                                                {[...Array(review.stars)].map(
                                                    (_, index) => (
                                                        <NextImage
                                                            key={index}
                                                            alt=""
                                                            src={StarIcon}
                                                        />
                                                    ),
                                                )}{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: "14px" }}>
                                        {review.text}...
                                    </div>
                                    <div>
                                        <a
                                            href={ratingInfo.url}
                                            target="_blank"
                                            style={{
                                                color: "rgba(var(--black), 1",
                                            }}>
                                            Читати більше
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}
