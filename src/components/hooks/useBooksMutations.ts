import {
    getBooks,
    getPromos,
    getRatings,
    getTopBooks,
} from "@plugins/api/books";
import { useMutation, useQuery } from "@plugins/api/useMutation";
import { TBook, TPromo, TRating, TTopBook } from "@plugins/types/booksTypes";

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

    // const {
    //     mutate: getTop,
    //     data: topBooks,
    //     isSuccess: successGettingTopBooks,
    //     isPending: gettingTopBooks,
    // } = useMutation({ mutationFn: getTopBooks});
    const { data: topBooks, refetch: getTop, isSuccess: successGettingTopBooks } = useQuery({
        queryFn: () => getTopBooks(),
        queryKey: ["getTopBooks"],
    });
    const {
        mutate: getPromotions,
        data: promosInfo,
        isSuccess: successGettingPromotions,
        isPending: gettingPromotions,
    } = useMutation({ mutationFn: getPromos });

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
        // gettingTopBooks,
        getPromotions,
        promosInfo,
        successGettingPromotions,
        gettingPromotions,
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
        // gettingTopBooks: boolean;
        getPromotions: () => void;
        promosInfo: TPromo[];
        successGettingPromotions: boolean;
        gettingPromotions: boolean;
    };
}
