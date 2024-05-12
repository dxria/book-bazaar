import axios from "@plugins/axios/axios";

export async function getBooks(search: string) {
    const books = await axios.post(
        "/api/getBooks",
        JSON.stringify({ search: search }),
    );
    return books.data;
}

export async function getRatings(search: string) {
    const books = await axios.post(
        "/api/getRatings",
        JSON.stringify({ search: search }),
    );
    return books.data;
}
export async function getTopBooks() {
    const books = await axios.get("/api/getTopBooks");
    return books.data;
}

export async function getPromos() {
    const books = await axios.get("/api/getPromos");
    return books.data;
}
