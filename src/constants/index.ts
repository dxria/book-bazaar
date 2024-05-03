
export const YakabooObj: TBookstoreConstant = {
    baseURL: "https://www.yakaboo.ua",
    searchURL: "https://www.yakaboo.ua/ua/search/?q=",
    bookshop: {
        name: "Yakaboo",
        image: "https://www.yakaboo.ua/dist/site-logo.svg?b1b42e85cd73b83f8438e35973bc2a6f",
    },
    cardsClass: "div.category-card",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".slide__img",
        imageAttr:"src",
        title: ".main__header .base-product__title h1",
        author: ".main__header .base-product__author a",
        price: ".side .base-product__price .ui-price-display__main span",
    },
};



export const Bookish: TBookstoreConstant = {
    baseURL: "",
    searchURL: "https://bookish.kiev.ua/search?search=",
    bookshop: {
        name: "Bookish",
        image: "https://bookish.kiev.ua/image/cache/catalog/image/catalog/logo.webp",
    },
    cardsClass: "div.main_item_wrapper",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".popup_link",
        imageAttr: "href",
        title: ".top_info .preview_text",
        author: ".props_list tr:first-child td.char_value span",
        price: ".prices_block .price_value",
    },
};
export const Bookling: TBookstoreConstant = {
    baseURL: "https://bookling.ua",
    searchURL: "https://bookling.ua/catalog/?s=%D0%9F%D0%BE%D1%88%D1%83%D0%BA&q=",
    bookshop: {
        name: "Bookling",
        image: "https://bookling.ua/upload/CNext/702/original_2_01.png",
    },
    cardsClass: "div.main_item_wrapper",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".popup_link img",
        imageAttr: "src",
        title: ".dotdot",
        author: ".autor-spoiler",
        price: ".main_item_wrapper .values_wrapper",
    },
};


export const Bukva: TBookstoreConstant = {
    baseURL: "https://bukva.ua",
    searchURL: "https://bukva.ua/ua/search/index/?l=1&filter=Array&sort=default&page=1&search=",
    bookshop: {
        name: "Буква",
        image: "https://bukva.ua/img/logo.png?1714717303",
    },
    cardsClass: ".no1",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".ArtImage",
        imageAttr: "src",
        title: ".bg_h1_small h1",
        author: "",
        price: ".price_value",
      
    },
};

export const NashFormat: TBookstoreConstant = {
    baseURL: "https://nashformat.ua/",
    searchURL: "https://nashformat.ua/search?keyword=",
    bookshop: {
        name: "Наш формат",
        image: "https://nashformat.ua/design/NF/images/logo-nf.svg",
    },
    cardsClass: "div.novimage_wrapper",
    linkFinders: { find: "a", attr: "href" },
    pageClasses: {
        image: ".galleries-main a",
        imageAttr: "href",
        title: ".col-lg-8 h1",
        author: ".author_title",
        price: ".fn-price ",
    },
};




export type TBookstoreConstant = {
    baseURL: string,
    searchURL: string,
    bookshop: {
        name: string,
        image: string,
    },
    cardsClass: string,
    linkFinders: { find: string, attr: string },
    pageClasses: {
        image: string,
        imageAttr:string;
        title: string,
        author: string,
        price: string,
    },
}

export const shopFuncDependencies = {
    yakaboo: YakabooObj,
    bukva: Bukva,
    Bookish: Bookish,
    Bookling: Bookling,
    nashFormat: NashFormat
}




// export const BookYeObj: TBookstoreConstant = {
//     baseURL: "https://book-ye.com.ua",
//     searchURL: "https://book-ye.com.ua/#/search/",
//     bookshop: {
//         name: "Книгарня Є",
//         image: "https://book-ye.com.ua/local/templates/book_ye/images/components/header-logo.png",
//     },
//     cardsClass: "div.multi-item",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".preview__media",
//         imageAttr: ".preview__media",
//         title: ".card__content .card__title h1",
//         author: ".main__header .base-product__author a",
//         price: ".side .base-product__price .ui-price-display__main span:first-child",
//         // currency:
//         //     ".side .base-product__price .ui-price-display__main .ui-price-display__currency",
//     },
// };


// export const Knigoland: TBookstoreConstant = {
//     baseURL: "https://knigoland.com.ua/",
//     searchURL: "https://knigoland.com.ua/search?q=",
//     bookshop: {
//         name: "Книгоград",
//         image: "http://www.knigograd.com.ua/skins/basic/customer/images/ak_logo.gif",
//     },
//     cardsClass: ".knl-catalog-item__card",
//     linkFinders: { find: "a", attr: "href" },
//     pageClasses: {
//         image: ".preview__media",
//         imageAttr: ".preview__media",
//         title: ".card__content .card__title h1",
//         author: ".main__header .base-product__author a",
//         price: ".side .base-product__price .ui-price-display__main span:first-child",
//         // currency:
//         //     ".side .base-product__price .ui-price-display__main .ui-price-display__currency",
//     },
// };

