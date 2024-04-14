export const getBooks = async (search: string) => {
    const books = await fetch("http://localhost:3000/api/getBooks", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ search: search }),
    });
    return books.json();
};
