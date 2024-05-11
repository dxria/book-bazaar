import axios from "@plugins/axios/axios";

export async function getBooks(search: string) {
    const books = await axios.post(
        "http://localhost:3000/api/getBooks",
        JSON.stringify({ search: search }),
    );
    return books.data;
}

export async function getRatings(search: string) {
    const books = await axios.post(
        "http://localhost:3000/api/getRatings",
        JSON.stringify({ search: search }),
    );
    return books.data;
}
