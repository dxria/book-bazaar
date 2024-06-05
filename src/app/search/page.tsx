"use client";
import { useEffect, useState } from "react";
import { useBooksMutations } from "@components/hooks/useBooksMutations";

import { SortArray } from "@helpers/sort";
import { FilterType, TBook } from "@plugins/types/booksTypes";
import Reviews from "@components/searchpage/Reviews";
import BooksList from "@components/searchpage/BooksList";
import { SelectChangeEvent } from "@mui/material";
import { styles } from "@components/searchpage/style/Page.style";
import GoodreadsRating from "@components/searchpage/GoodreadsRating";
import Genres from "@components/searchpage/Genres";

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
            {!scrappingBooks && !scrappingRating && (
                <>
                    <div
                        className="search_results"
                        style={styles.searchResults}>
                        <div style={styles.searchResults.aside}>
                            <GoodreadsRating ratingInfo={ratingInfo} />
                            <Genres ratingInfo={ratingInfo} />
                        </div>
                        <BooksList
                            books={books}
                            filterType={filterType}
                            handleSelectChange={handleSelectChange}
                        />
                    </div>
                    {ratingInfo && ratingInfo?.reviews?.length > 0 && (
                        <Reviews
                            reviews={ratingInfo.reviews}
                            url={ratingInfo.url}
                        />
                    )}
                </>
            )}
        </div>
    );
}
