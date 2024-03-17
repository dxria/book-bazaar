"use client";

import { SearchForm } from "@components/mainpage/SearchForm";
import { GetBooks } from "@helpers/actions";

export default function Page({ searchParams }) {
    const title = searchParams.title || "";
    const request = (title as string).split(" ").join("%20");

    const books = GetBooks(request);

    return (
        <div>
            <SearchForm />
            <div>{title}</div>
        </div>
    );
}
