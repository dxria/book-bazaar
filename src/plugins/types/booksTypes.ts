export type TBook = {
    id: number;
    url: string;
    img?: string;
    title: string;
    author: string;
    price: number;
    currency: string;
    bookshop: { name: string; image: string };
};

export type TTopBook = {
    id: number;
    img?: string;
    title: string;
    author: string;
};

export type TTopBookToSave = {
    img?: string;
    title: string;
    author: string;
};

export type TPromo = Record<string, TPromoObj[]>;

export type TPromoObj = {
    id: number;
    url: string;
    img?: string;
    title: string;
    description?: string;
};

export type TPromoToSave = {
    url: string;
    img?: string;
    title: string;
    description: string;
    bookshopName: string; 
    bookshopImage: string ;
};

export type TReview = {
    id: number;
    img?: string;
    name: string;
    stars: number;
    text: string;
};

export type TRating = {
    url: string;
    stars: string;
    genres: string[];
    reviews: TReview[];
};

export type TBookstoreConstant = {
    baseURL: string;
    searchURL: string;
    bookshop: {
        name: string;
        image: string;
    };
    cardsClass: string;
    linkFinders: { find: string; attr: string };
    pageClasses: {
        image: string;
        imageAttr: string;
        title: string;
        author: string;
        price: string;
    };
};

export enum FilterType {
    asc = "Від низької ціни до високої",
    desc = "Від високої ціни до низької",
}
