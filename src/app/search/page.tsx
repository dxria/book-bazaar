"use client";
import { useEffect, useState } from "react";
import { SearchForm } from "@components/mainpage/SearchForm";
import { getBooks } from "@plugins/api/books";
import { TBook } from "@plugins/types/booksTypes";

type TSearch = {
    books: TBook[] | undefined;
};
export default function Page({
    searchParams,
}: {
    searchParams: { title: string };
}) {
    const [searchResult, setSearchResult] = useState<TSearch>();
    const title = searchParams.title || "";
    const request = title.split(" ").join("%20");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                if (request.trim() !== "") {
                    const fetchedBooks = await getBooks(request);
                    setSearchResult(fetchedBooks);
                } else {
                    setSearchResult(undefined);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks(); // Call fetchBooks when component mounts or searchParams change
    }, [request]);

    return (
        <div>
            <div
                style={{
                    padding: "50px",
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "center",
                }}>
                <SearchForm />
                <div>Результати пошуку за запитом: {title}</div>
            </div>
            <div
                style={{
                    padding: "50px",
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "center",
                    gap: "20px",
                }}>
                {searchResult &&
                    searchResult.books?.map((book) => (
                        <a
                            key={book.id}
                            href={book.url}
                            style={{
                                border: "2px solid rgba(var(--red1), 1",
                                borderRadius: "10px",
                                width: "85%",
                                padding: "30px",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "20px",
                                textDecoration: "none",
                                color: " rgba(var(--black), 1",
                            }}>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "20px",
                                }}>
                                <div>
                                    <img
                                        src={book.img}
                                        alt={book.title}
                                        width="70px"
                                    />
                                </div>
                                <div>
                                    <div>{book.title}</div>
                                    <div>{book.author}</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    {book.price} {book.currency}
                                </div>
                            </div>
                        </a> // Render each book title
                    ))}
            </div>
        </div>
    );
}
