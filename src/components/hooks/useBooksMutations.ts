import { getBooks } from "@plugins/api/books";
import { useMutation } from "@plugins/api/useMutation";
import { TBook } from "@plugins/types/booksTypes";

export function useBooksMutations() {
    const {
        mutate: scrapeBooks,
        data: booksInfo,
        isSuccess: successScrappingBooks,
        isPending: scrappingBooks,
    } = useMutation({ mutationFn: getBooks });
    
    return {
        scrapeBooks,
        booksInfo,
        successScrappingBooks,
        scrappingBooks,
    } as unknown as {
        scrapeBooks: (title: string) => void;
        booksInfo: TBook[];
        successScrappingBooks: boolean;
        scrappingBooks: boolean;
    };
}
