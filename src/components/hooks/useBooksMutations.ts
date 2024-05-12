import { getBooks, getRatings, getTopBooks } from "@plugins/api/books";
import { useMutation } from "@plugins/api/useMutation";
import { TBook, TRating, TTopBook } from "@plugins/types/booksTypes";

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

    const {
        mutate: getTop,
        data: topBooks,
        isSuccess: successGettingTopBooks,
        isPending: gettingTopBooks,
    } = useMutation({ mutationFn: getTopBooks });

    return {
        scrapeBooks,
        booksInfo,
        successScrappingBooks,
        scrappingBooks,
        scrapeRating,
        ratingInfo,
        successScrappingRating,
        scrappingRating,
        getTop,
        topBooks,
        successGettingTopBooks,
        gettingTopBooks,
    } as unknown as {
        scrapeBooks: (title: string) => void;
        booksInfo: TBook[];
        successScrappingBooks: boolean;
        scrappingBooks: boolean;
        scrapeRating: (title: string) => void;
        ratingInfo: TRating | undefined;
        successScrappingRating: boolean;
        scrappingRating: boolean;
        getTop: () => void;
        topBooks: TTopBook[];
        successGettingTopBooks: boolean;
        gettingTopBooks: boolean;
    };
}
