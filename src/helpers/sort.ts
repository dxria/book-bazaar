import { TBook } from "@plugins/types/booksTypes";

export const SortArray = (array: TBook[], order: "asc" | "desc"): TBook[] => {
    if (order === "asc") {
        return array.sort((a, b) => a.price - b.price);
    } else {
        return array.sort((a, b) => b.price - a.price);
    }
};
