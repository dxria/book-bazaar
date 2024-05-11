import { getBooks, getRatings } from "@plugins/api/books";
import { useMutation } from "@plugins/api/useMutation";
import { TBook, TRating } from "@plugins/types/booksTypes";

export function useBooksMutations() {
    const {
        mutate: scrapeBooks,
        data: booksInfo,
        isSuccess: successScrappingBooks,
        isPending: scrappingBooks,
    } = useMutation({ mutationFn: getBooks });

    const {
        mutate: scrapeRating,
        data: ratingInfo,
        isSuccess: successScrappingRating,
        isPending: scrappingRating,
    } = useMutation({ mutationFn: getRatings });

    return {
        scrapeBooks,
        booksInfo,
        successScrappingBooks,
        scrappingBooks,
        scrapeRating,
        ratingInfo,
        successScrappingRating,
        scrappingRating,
    } as unknown as {
        scrapeBooks: (title: string) => void;
        booksInfo: TBook[];
        successScrappingBooks: boolean;
        scrappingBooks: boolean;
        scrapeRating: (title: string) => void;
        ratingInfo: TRating | undefined;
        successScrappingRating: boolean;
        scrappingRating: boolean;
    };
}
