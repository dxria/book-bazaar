export const GetBooks = (searchPar: string) => {
    const books = [];
    if (searchPar !== "") {
        yakaboo(searchPar);
    }

    // return books,
};

export const yakaboo = async (search: string) => {
    const url = "https://www.yakaboo.ua/ua/search?q=".concat(search);
    console.log(url);
    const res = await fetch("http://localhost:3000/api/getBooks", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(url),
    });

    const books = await res.json();
    console.log(books, "books");
};
